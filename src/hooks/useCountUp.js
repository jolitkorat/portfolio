import { useState, useEffect } from "react";

export default function useCountUp(target, triggered) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;

    const duration = 1600;
    const start = performance.now();

    const frame = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // cubic ease-out
      setCount(Math.round(ease * target));
      if (progress < 1) requestAnimationFrame(frame);
    };

    requestAnimationFrame(frame);
  }, [triggered, target]);

  return count;
}
