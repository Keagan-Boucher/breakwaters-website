import portraitWebp from "../../../assets/images/founder-vanessa-boucher.webp";
import portraitJpg from "../../../assets/images/founder-vanessa-boucher.jpg";
import { owner } from "../../../config/site";

export default function FounderPortrait() {
  return (
    <figure className="cx-figure">
      <picture>
        <source srcSet={portraitWebp} type="image/webp" />
        <img src={portraitJpg} alt={`${owner}, founder of Breakwaters Recruiting`} width="640" height="800" loading="lazy" decoding="async" />
      </picture>
      <figcaption>{owner}, Founder</figcaption>
    </figure>
  );
}
