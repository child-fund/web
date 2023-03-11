// TODO: hook 네이밍, useMain or useMainContainer?

import { ToastTheme } from "components/Toast";
import { ToastContext } from "components/Toast/ToastProvider";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useMain = () => {
  const { showToast } = useContext(ToastContext);

  useEffect(() => {
    showToast("Toast!", ToastTheme.GRAY);
  }, []);

  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate("/join");
  };

  const handleHistoryClick = () => {
    navigate("/history");
  };

  const handleDonateClick = () => {
    navigate("/selectairplane");
  };
  return { handleJoinClick, handleHistoryClick, handleDonateClick };
};

export default useMain;
