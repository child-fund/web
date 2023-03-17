import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import shareByWebShareApi from "../utils/shareByWebShareApi";
import shareByClipboardApi from "../utils/shareByClipboardApi";
import shareByExecCommand from "../utils/shareByExecCommand";

import { ToastContext } from "shared/components/Toast/ToastProvider";

import { ToastTheme } from "shared/components/Toast/Container";

const total = 1000;
const isParticipated = true;

const useMain = () => {
  const navigate = useNavigate();
  const { showToast } = useContext(ToastContext);
  const [loginStatus, setLoginStatus] = useState(false);

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

  const checkDonationAvailability = () => {
    const today = new Date();
    const eventStartDate = new Date(2023, 3, 10);

    const timeDifference = eventStartDate.getTime() - today.getTime();

    if (timeDifference > 0) {
      const seconds = timeDifference / 1000;
      const minutes = seconds / 60;
      const hours = minutes / 60;
      const days = Math.floor(hours / 24);

      const remainingHours = Math.floor(hours % 24);
      const remainingMinutes = Math.floor(minutes % 60);

      showToast(
        `아직 서비스를 준비하고 있어요!
        ${days}일 ${remainingHours}시간 ${remainingMinutes}분 뒤에 만나기로 해요!`,
        ToastTheme.GRAY
      );
      return false;
    }

    if (today > eventStartDate) {
      showToast(
        `지금은 참여기간이 아니에요!
        다음 참여기간에 만나도록 해요!`,
        ToastTheme.GRAY
      );
      return false;
    }

    if (total >= 10000) {
      showToast(
        `많은 분들의 성원으로 조기 마감되었어요!
        다음 참여기간에 다시 만나요!`,
        ToastTheme.GREEN
      );
      return false;
    }

    if (isParticipated) {
      showToast(
        `해당 참여기간 동안에는 한 번만 참여 가능해요!
        다음 참여기간에 다시 참여해주세요 :)`,
        ToastTheme.GRAY
      );
      return false;
    }

    return true;
  };

  const handleJoinClick = () => {
    if (checkDonationAvailability()) {
      navigate("/join");
    }
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
