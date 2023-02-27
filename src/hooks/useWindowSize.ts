import { useState, useEffect } from "react";

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.screen.width,
    height: window.screen.height,
  });

  function handleResize() {
    const { height, width } = window.screen;
    setWindowSize({ height, width });
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
