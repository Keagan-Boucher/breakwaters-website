// Sends Core Web Vitals (LCP, INP, CLS) to the existing GA4 property as events.
export default function reportWebVitals() {
  if (typeof window.gtag !== "function") return;
  import("web-vitals").then(({ onCLS, onINP, onLCP }) => {
    const send = ({ name, delta, id }) =>
      window.gtag("event", name, {
        event_category: "Web Vitals",
        value: Math.round(name === "CLS" ? delta * 1000 : delta),
        event_label: id,
        non_interaction: true,
      });
    onCLS(send); onINP(send); onLCP(send);
  });
}
