import { useEffect, useRef } from "react";

const useTypewriterEffect = (text: string, delay = 3100, speed = 120) => {
  const typingRef = useRef<HTMLSpanElement>(null);
  const isTyped = useRef<boolean>(false);

  useEffect(() => {
    if (!typingRef.current || isTyped.current) return;

    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (
          typingRef.current &&
          typingRef.current.textContent !== null &&
          i < text.length
        ) {
          typingRef.current.textContent += text[i];
          i++;
        } else {
          clearInterval(interval);
          isTyped.current = true;
        }
      }, speed);

      return () => {
        clearInterval(interval);
      };
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [text, delay, speed]);

  return typingRef;
};

export default useTypewriterEffect;
