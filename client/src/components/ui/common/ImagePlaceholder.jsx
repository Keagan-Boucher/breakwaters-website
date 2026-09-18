import { FiImage } from "react-icons/fi";

// TODO: replace with a real portrait (e.g. src/assets/images/founder-vanessa-boucher.webp)
// and swap the frame for <img width height loading="lazy" alt="...">.
export default function ImagePlaceholder({ label }) {
  return (
    <figure className="cx-figure">
      <div className="cx-figure__frame" aria-hidden="true"><FiImage /></div>
      {label ? <figcaption>{label}</figcaption> : null}
    </figure>
  );
}
