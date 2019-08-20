import * as React from "react";

export interface State {
  x: number;
  y: number;
}

const isClient = typeof window === "object";

export const useWindowScroll = (): State => {
  const frame = React.useRef(0);
  const [state, setState] = React.useState<State>({
    x: isClient ? window.pageXOffset : 0,
    y: isClient ? window.pageYOffset : 0,
  });

  React.useEffect(() => {
    const handler = (): void => {
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        setState({
          x: window.pageXOffset,
          y: window.pageYOffset,
        });
      });
    };

    window.addEventListener("scroll", handler, {
      capture: false,
      passive: true,
    });

    return (): void => {
      cancelAnimationFrame(frame.current);
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return state;
};
