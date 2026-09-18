import { FaWhatsapp } from "react-icons/fa6";
import { whatsappUrl, owner } from "../../config/site";

// Renders nothing until whatsappE164 is filled in config/site.js.
export default function WhatsAppButton() {
  if (!whatsappUrl) return null;
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-fab"
      aria-label={`Chat with ${owner.split(" ")[0]} on WhatsApp (opens in a new tab)`}
    >
      <FaWhatsapp aria-hidden="true" />
      <span className="wa-fab__label">WhatsApp</span>
    </a>
  );
}
