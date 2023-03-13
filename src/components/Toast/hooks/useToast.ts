import { useEffect, useRef } from "react";

interface UseToast {
  isVisible: boolean;
}

const useToast = (props: UseToast) => {
  const toastRef = useRef<HTMLDivElement>(null);
  const toastElement = toastRef.current;
  const fadeOutTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (props.isVisible) {
      slideUp();
    } else {
      fadeOut();
    }
  }, [props.isVisible]);

  const slideUp = () => {
    if (fadeOutTimer.current) {
      clearTimeout(fadeOutTimer.current);
    }

    if (toastElement) {
      toastElement.style.opacity = "1";
      toastElement.style.bottom = "2rem";
    }
  };

  const fadeOut = () => {
    if (toastElement) {
      toastElement.style.opacity = "0";
    }

    resetLocation();
  };

  const resetLocation = () => {
    if (fadeOutTimer.current) {
      clearTimeout(fadeOutTimer.current);
    }

    fadeOutTimer.current = setTimeout(() => {
      if (toastElement) {
        toastElement.style.bottom = "-100%";
      }

      fadeOutTimer.current = null;
    }, 2000);
  };

  return {
    toastRef,
  };
};

export default useToast;
