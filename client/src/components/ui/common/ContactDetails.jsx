import { FaWhatsapp } from "react-icons/fa6";
import { emailRecruits, emailVanessa, whatsappUrl, owner } from "../../../config/site";

// Direct-contact list used on the homepage and the contact page.
export default function ContactDetails() {
  return (
    <dl>
      <div>
        <dt>Job seekers</dt>
        <dd><a href={`mailto:${emailRecruits}`}>{emailRecruits}</a></dd>
      </div>
      <div>
        <dt>Employers</dt>
        <dd><a href={`mailto:${emailVanessa}`}>{emailVanessa}</a></dd>
      </div>
      {whatsappUrl && (
        <div>
          <dt>WhatsApp</dt>
          <dd>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn--secondary btn--compact">
              <FaWhatsapp aria-hidden="true" /> Chat with {owner.split(" ")[0]} on WhatsApp
            </a>
          </dd>
        </div>
      )}
    </dl>
  );
}
