import { useEffect, RefObject } from "react";

type EventType = MouseEvent | TouchEvent

export function useClickOutSide(
  ref: RefObject<HTMLDivElement | null>,
  handler: (event: EventType) => void
): void {
  useEffect(() => {
    const listener = (event: EventType) => {
      const el = ref?.current;
      if (!el || el.contains(event.target as Node)) return;

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
