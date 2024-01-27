// This custom hook is used for detecting and applying if user click is outside the preferred target.

import { useCallback, useEffect, useRef, RefObject } from "react";

const useOutsideClick = <T extends HTMLElement>(
  onClose: () => void
): RefObject<T> => {
  const ref = useRef<T>(null);
  const escapeListener = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );
  const clickListener = useCallback(
    (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        onClose?.();
      }
    },
    [onClose]
  );
  useEffect(() => {
    document.addEventListener("click", clickListener);
    document.addEventListener("keyup", escapeListener);
    return () => {
      document.removeEventListener("click", clickListener);
      document.removeEventListener("keyup", escapeListener);
    };
  }, [escapeListener, clickListener]);
  return ref;
};

export default useOutsideClick;
