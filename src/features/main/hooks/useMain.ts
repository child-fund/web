import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import shareUrlByWebShareApi from "../../../shared/utils/shareUrlByWebShareApi";
import copyTextByClipboardApi from "../../../shared/utils/copyTextByClipboardApi";
import copyTextByExecCommand from "../../../shared/utils/copyTextByExecCommand";

import { ToastContext } from "shared/components/Toast/ToastProvider";

import { ToastTheme } from "shared/components/Toast/Container";
import getDonationSummary from "../apis/getDonationSummary";

const total = 10000;
const isParticipated = false;

const useMain = () => {
  const navigate = useNavigate();
  const { showToast } = useContext(ToastContext);
  const [totalAirplaneCount, setTotalAirplaneCount] = useState(0);
  const [totalDonation, setTotalDonation] = useState(0);
  const [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    initDonationSummary();
  }, []);

  const initDonationSummary = async () => {
    const { result, data } = await getDonationSummary();

    if (result && data) {
      setTotalAirplaneCount(data.totalAirplaneCount);
      setTotalDonation(data.totalDonation);
      return;
    }

    showToast(`이용량 급증으로 인해 데이터 로드가 지연되고 있어요.
    이 메시지가 반복된다면 1688-4272 고객센터로 연락주세요.`);
  };

  const handleNoticeClick = () => {
    window.open(
      "https://escal-print.notion.site/X-25392410e8b04c10b17b66d7cd413b54"
    );
  };

  const handleShareClick = () => {
    const firstTrial = shareUrlByWebShareApi({
      title: "에스칼프린트x초록우산 종이비행기 기부이벤트",
      url: window.location.href,
    });

    if (!firstTrial) {
      const secondTrial = copyTextByClipboardApi();

      if (secondTrial) {
        showToast(`링크가 복사되었어요!`, ToastTheme.GREEN);
      } else {
        const lastTrial = copyTextByExecCommand();

        if (lastTrial) {
          showToast(`링크가 복사되었어요!`, ToastTheme.GREEN);
        } else {
          showToast("공유하기가 지원되지 않는 환경입니다.");
        }
      }
    }
  };

  const checkDonationAvailability = () => {
    const today = new Date(2023, 3, 15); // TODO: 나중에 빈값으로 수정해줘야함
    const eventStartDate = new Date(2023, 3, 10);
    const eventEndDate = new Date(2023, 3, 30);

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

    if (today > eventEndDate) {
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
    totalAirplaneCount,
    totalDonation,
  };
};

export default useMain;
