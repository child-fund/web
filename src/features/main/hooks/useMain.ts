import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContext } from "shared/components/Toast/ToastProvider";

import { ToastTheme } from "shared/components/Toast/Container";

const useMain = () => {
  const { showToast } = useContext(ToastContext);
  const [loginStatus, setLoginStatus] = useState(false);

  const navigate = useNavigate();

  const handleNoticeClick = () => {
    showToast(
      `아직 서비스를 준비하고 있어요!
    1일 12시간 36분 뒤에 만나기로 해요!`,
      ToastTheme.GRAY
    );
  };

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
    handleNoticeClick,
    handleShareClick,
    handleJoinClick,
    handleHistoryClick,
    handleDonateClick,
  };
};

export default useMain;
