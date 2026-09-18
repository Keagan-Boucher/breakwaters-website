import { useEffect, useRef, useState } from "react";

export default function useInView(options) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px", ...options });

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isVisible];
}
