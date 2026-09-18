import { FiImage } from "react-icons/fi";

export default function ImagePlaceholder({ label, ratio = "3 / 4", className = "" }) {
  return (
    <div className={`cx-frame-wrap ${className}`}>
      <div className="cx-frame" style={{ aspectRatio: ratio }} aria-hidden="true">
        <FiImage />
      </div>
      {label ? <p className="cx-frame__caption">{label}</p> : null}
    </div>
  );
}
