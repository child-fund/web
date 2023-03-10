import { createContext, PropsWithChildren, useRef, useState } from "react";
import Toast, { ToastTheme } from "components/Toast";

export const ToastContext = createContext({
  showToast(message: string, theme: ToastTheme) {},
});

const ToastProvider = ({ children }: PropsWithChildren) => {
  const [isVisible, setIsVisible] = useState(false);
  const [theme, setTheme] = useState<ToastTheme>(ToastTheme.GRAY);
  const [message, setMessage] = useState("");
  const showTimer = useRef<NodeJS.Timeout | null>(null);

  const showToast = (message: string, theme: ToastTheme) => {
    setTheme(theme);
    setMessage(message);
    setIsVisible(true);

    if (showTimer.current) {
      clearTimeout(showTimer.current);
    }

    showTimer.current = setTimeout(() => {
      setIsVisible(false);
      showTimer.current = null;
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast isVisible={isVisible} message={message} theme={theme} />
    </ToastContext.Provider>
  );
};

export default ToastProvider;
