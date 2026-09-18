import { useEffect, useLayoutEffect, useRef, useState } from "react";

// Visible-once observer. Nodes already in (or above) the viewport when React
// mounts are marked visible before first paint, so prerendered content never
// flickers and a reload mid-page never hides anything.
export default function useInView() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useLayoutEffect(() => {
    const node = ref.current;
    if (node && node.getBoundingClientRect().top < window.innerHeight) setIsVisible(true);
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node || isVisible || typeof IntersectionObserver === "undefined") {
      if (!isVisible) setIsVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, [isVisible]);

  return [ref, isVisible];
}
