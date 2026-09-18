import useInView from "../../../hooks/useInView";

export default function Reveal({ as: Tag = "div", className = "", delay = 0, style, children, ...rest }) {
  const [ref, isVisible] = useInView();
  const classes = ["cx-reveal", isVisible ? "cx-reveal--visible" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag ref={ref} className={classes} style={{ transitionDelay: `${delay}ms`, ...style }} {...rest}>
      {children}
    </Tag>
  );
}
