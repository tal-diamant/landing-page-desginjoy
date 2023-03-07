import { useRef, useState, useEffect } from "react";
import { useElementOnScreen } from "@/hooks/useElementOnScreen/useElementOnScreen";

interface Props {
  children: React.ReactNode;
  direction?: string;
  delay?: number;
  positionOffset?: number;
}

export default function AnimateIn({ direction = "up", delay = 0, positionOffset = 4.9, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref, "-36px");
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    if (onScreen) {
      setSeen(true);
    }
  }, [onScreen]);

  switch (direction) {
    case "up":
      return (
        <div
          ref={ref}
          style={{
            opacity: seen ? 1 : 0,
            translate: seen ? "none" : "0 2rem",
            transition: "750ms cubic-bezier(.38,.7,.3,1)",
            transitionDelay: `${delay}ms`
          }}
        >
          {children}
        </div>
      );
    case "down":
      return (
        <div
          ref={ref}
          style={{
            opacity: seen ? 1 : 0,
            translate: seen ? "none" : "0 -4rem",
            transition: "750ms cubic-bezier(.38,.7,.3,1)",
          }}
        >
          {children}
        </div>
      );
    case "left":
      return (
        <div
          ref={ref}
          style={{
            opacity: seen ? 1 : 0,
            translate: seen ? "none" : "4.7vw 0",
            transition: "750ms cubic-bezier(.38,.7,.3,1)",
          }}
        >
          {children}
        </div>
      );
    case "right":
      return (
        <div
          ref={ref}
          style={{
            opacity: seen ? 1 : 0,
            translate: seen ? "none" : `-${positionOffset}vw 0`,
            transition: ".75s cubic-bezier(.38,.7,.3,1)",
          }}
        >
          {children}
        </div>
      );
    default:
      return (
        <div
          ref={ref}
          style={{
            opacity: seen ? 1 : 0,
            translate: seen ? "none" : "0 2rem",
            transition: "750ms cubic-bezier(.38,.7,.3,1)",
          }}
        >
          {children}
        </div>
      );
  }
}
