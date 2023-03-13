// TODO: hook 네이밍, useMain or useMainContainer?

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContext } from "components/Toast/ToastProvider";

import { ToastTheme } from "components/Toast";

const useMain = () => {
  const { showToast } = useContext(ToastContext);
  const [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    showToast("Toast!", ToastTheme.GRAY);
  }, []);

  const navigate = useNavigate();

  const handleShareClick = () => {};

  const handleJoinClick = () => {
    navigate("/join");
  };

  const handleHistoryClick = () => {
    navigate("/history");
  };

  const handleDonateClick = () => {
    navigate("/selectairplane");
  };
  return {
    loginStatus,
    handleShareClick,
    handleJoinClick,
    handleHistoryClick,
    handleDonateClick,
  };
};

export default useMain;
