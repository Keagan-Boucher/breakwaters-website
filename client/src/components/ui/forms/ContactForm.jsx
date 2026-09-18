import { useId, useRef, useState } from "react";
import { emailRecruits } from "../../../config/site";

const AUDIENCES = [
  { value: "", label: "Please choose" },
  { value: "job_seeker", label: "Job seeker" },
  { value: "employer", label: "Employer" },
  { value: "other", label: "Other" },
];

const LOADED_AT = Date.now();

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Please enter a valid email address.";
  if (!v.audience) e.audience = "Please tell us who you are so the right person replies.";
  if (v.message.trim().length < 10) e.message = "Please add a short message (at least 10 characters).";
  if (!v.consent) e.consent = "We need your consent to process this form.";
  return e;
}

export default function ContactForm() {
  const id = useId();
  const f = (n) => `${id}-${n}`;
  const [values, setValues] = useState({ name: "", email: "", phone: "", audience: "", message: "", consent: false, website: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: "idle", text: "" });
  const statusRef = useRef(null);

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));
  const describe = (k, hint) => [hint ? f(`${k}-hint`) : null, errors[k] ? f(`${k}-err`) : null].filter(Boolean).join(" ") || undefined;

  async function onSubmit(e) {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) {
      document.getElementById(f(Object.keys(errs)[0]))?.focus();
      return;
    }
    setStatus({ state: "pending", text: "Sending your message…" });
    const body = new URLSearchParams({ ...values, consent: values.consent ? "yes" : "", form_ts: String(LOADED_AT) });
    try {
      const res = await fetch("/contact.php", { method: "POST", body, headers: { Accept: "application/json" } });
      const ct = res.headers.get("content-type") || "";
      if (!ct.includes("application/json")) {
        throw new Error(import.meta.env.DEV
          ? "Dev mode: /contact.php did not return JSON. Start the PHP server (php -S localhost:8001 -t public) alongside npm start — see DEPLOY.md."
          : "The form service is unavailable right now.");
      }
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "We couldn't send your message.");
      setStatus({ state: "success", text: "Thanks, your message is on its way. We'll reply by email." });
      setValues((v) => ({ ...v, name: "", email: "", phone: "", audience: "", message: "", consent: false }));
    } catch (err) {
      setStatus({ state: "error", text: `${err.message} You can also email ${emailRecruits} directly.` });
    } finally {
      requestAnimationFrame(() => statusRef.current?.focus());
    }
  }

  const pending = status.state === "pending";

  return (
    <form className="cx-form" onSubmit={onSubmit} noValidate>
      <div className="cx-field">
        <label htmlFor={f("name")}>Name <span aria-hidden="true">*</span></label>
        <input id={f("name")} name="name" type="text" autoComplete="name" required maxLength={100}
          value={values.name} onChange={set("name")} aria-invalid={!!errors.name} aria-describedby={describe("name")} />
        {errors.name && <p className="cx-field__error" id={f("name-err")}>{errors.name}</p>}
      </div>

      <div className="cx-field">
        <label htmlFor={f("email")}>Email <span aria-hidden="true">*</span></label>
        <input id={f("email")} name="email" type="email" autoComplete="email" required maxLength={254}
          value={values.email} onChange={set("email")} aria-invalid={!!errors.email} aria-describedby={describe("email")} />
        {errors.email && <p className="cx-field__error" id={f("email-err")}>{errors.email}</p>}
      </div>

      <div className="cx-field">
        <label htmlFor={f("phone")}>Phone <span className="cx-field__optional">(optional)</span></label>
        <input id={f("phone")} name="phone" type="tel" autoComplete="tel" maxLength={40}
          value={values.phone} onChange={set("phone")} />
      </div>

      <div className="cx-field">
        <label htmlFor={f("audience")}>I am a… <span aria-hidden="true">*</span></label>
        <select id={f("audience")} name="audience" required value={values.audience} onChange={set("audience")}
          aria-invalid={!!errors.audience} aria-describedby={describe("audience", true)}>
          {AUDIENCES.map((a) => <option key={a.value} value={a.value}>{a.label}</option>)}
        </select>
        <p className="cx-field__hint" id={f("audience-hint")}>Job seekers and employers go to different inboxes.</p>
        {errors.audience && <p className="cx-field__error" id={f("audience-err")}>{errors.audience}</p>}
      </div>

      <div className="cx-field">
        <label htmlFor={f("message")}>Message <span aria-hidden="true">*</span></label>
        <textarea id={f("message")} name="message" rows={5} required maxLength={5000}
          value={values.message} onChange={set("message")} aria-invalid={!!errors.message} aria-describedby={describe("message")} />
        {errors.message && <p className="cx-field__error" id={f("message-err")}>{errors.message}</p>}
      </div>

      <div className="cx-field cx-field--check">
        <input id={f("consent")} name="consent" type="checkbox" checked={values.consent} onChange={set("consent")}
          aria-invalid={!!errors.consent} aria-describedby={describe("consent", true)} />
        <label htmlFor={f("consent")}>I consent to Breakwaters Recruiting using these details to respond to my enquiry. <span aria-hidden="true">*</span></label>
        <p className="cx-field__hint" id={f("consent-hint")}>
          Under POPIA we only use what you send here to reply to you and, if you're a job seeker, to discuss suitable roles. We don't sell or share it, and you can ask us to delete it at any time.
        </p>
        {errors.consent && <p className="cx-field__error" id={f("consent-err")}>{errors.consent}</p>}
      </div>

      {/* Honeypot: hidden from everyone, filled only by bots. */}
      <div className="cx-form__hp" aria-hidden="true">
        <label htmlFor={f("website")}>Website</label>
        <input id={f("website")} name="website" type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={set("website")} />
      </div>

      <div className="cx-form__actions">
        <button type="submit" className="btn btn--primary" disabled={pending} aria-busy={pending}>
          {pending ? "Sending…" : "Send message"}
        </button>
      </div>

      <p ref={statusRef} tabIndex={-1} className={`cx-form__status cx-form__status--${status.state}`} role="status" aria-live="polite">
        {status.text}
      </p>
    </form>
  );
}
