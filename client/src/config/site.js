// Single source of truth for contact details, social profiles and site identity.
// Anything still marked TODO is treated as "not configured" by the UI and is
// hidden rather than rendered as a dead link.

export const siteUrl = "https://breakwatersrecruitment.co.za";
export const siteName = "Breakwaters Recruiting";
export const owner = "Vanessa Boucher";
export const locality = "Johannesburg";
export const region = "Gauteng";
export const country = "ZA";

export const emailVanessa = "vanessa@breakwatersrecruiting.co.za";
// TEMPORARY: recruits@ is not set up yet, so job-seeker mail goes to Vanessa.
// Restore to "recruits@breakwatersrecruitment.co.za" here (contact.php already
// sends there) once you want it shown, then split the email rows in
// ContactDetails, Footer, index.html JSON-LD and LegalPages back out.
export const emailRecruits = emailVanessa;

export const linkedinUrl = "https://www.linkedin.com/company/breakwaters-recruiting-agency/";
// TODO: full Facebook page URL, e.g. "https://www.facebook.com/breakwatersrecruiting"
export const facebookUrl = "";
// TODO: WhatsApp number, digits only, country code first, no + or spaces, e.g. "27823703603"
export const whatsappE164 = "";
// TODO: mailbox that receives contact-form submissions when audience is "Other".
// (Also used server-side in public/contact.php - keep the two in sync.)
export const formRecipient = "";

export const whatsappMessage =
  "Hi Vanessa, I found Breakwaters Recruiting online and would like to chat about ";

export const whatsappUrl = whatsappE164
  ? `https://wa.me/${whatsappE164}?text=${encodeURIComponent(whatsappMessage)}`
  : "";

export const socialLinks = [
  { name: "LinkedIn", url: linkedinUrl },
  { name: "Facebook", url: facebookUrl },
].filter((s) => s.url);
