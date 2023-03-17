import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import shareByWebShareApi from "../utils/shareByWebShareApi";
import shareByClipboardApi from "../utils/shareByClipboardApi";
import shareByExecCommand from "../utils/shareByExecCommand";

import { ToastContext } from "shared/components/Toast/ToastProvider";

import { ToastTheme } from "shared/components/Toast/Container";

const useMain = () => {
  const { showToast } = useContext(ToastContext);
  const [loginStatus, setLoginStatus] = useState(false);

  const navigate = useNavigate();

  const handleNoticeClick = () => {
    // TODO: 이런 url은 어떻게 관리하는 것이 좋을까
    window.open(
      "https://escal-print.notion.site/X-25392410e8b04c10b17b66d7cd413b54"
    );
  };

  const handleShareClick = () => {
    // TODO: 이 함수를 더 잘 짤 수 있을까욤
    // TODO: 이런 함수들은 utils 에 넣는게 맞을까욤
    const firstTrial = shareByWebShareApi();

    if (!firstTrial) {
      const secondTrial = shareByClipboardApi();

      if (secondTrial) {
        showToast(`링크가 복사되었어요!`, ToastTheme.GREEN);
      } else {
        const lastTrial = shareByExecCommand();

        if (lastTrial) {
          showToast(`링크가 복사되었어요!`, ToastTheme.GREEN);
        } else {
          alert("공유하기가 지원되지 않는 환경입니다.");
        }
      }
    }
  };

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
