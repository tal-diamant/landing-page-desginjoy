import { useRef, useState, useEffect } from "react";
import { useElementOnScreen } from "@/hooks/useElementOnScreen/useElementOnScreen";

interface Props {
  children: React.ReactNode;
  direction?: string;
}

export default function AnimateIn({ direction = "up", children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref, "-20px");
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
            transition: "250ms ease-in-out",
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
            // translate: seen ? "none" : "0 -2rem",
            transition: "250ms ease-in-out",
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
            // translate: seen ? "none" : "2rem 0",
            transition: "250ms ease-in-out",
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
            // translate: seen ? "none" : "-2rem 0",
            transition: "250ms ease-in-out",
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
            transition: "250ms ease-in-out",
          }}
        >
          {children}
        </div>
      );
  }
}
