import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";

import shareByWebShareApi from "../../../shared/utils/shareByWebShareApi";
import copyTextByClipboardApi from "../../../shared/utils/copyTextByClipboardApi";
import copyTextByExecCommand from "../../../shared/utils/copyTextByExecCommand";

import { ToastContext } from "shared/components/Toast/ToastProvider";
import participatedAtom from "shared/atoms/participatedAtom";
import getDonationSummary from "../apis/getDonationSummary";
import getParticipation from "shared/apis/getParticipation";

import { ToastTheme } from "shared/components/Toast/Container";

const useMain = () => {
  const navigate = useNavigate();
  const { showToast } = useContext(ToastContext);
  const [participated, setParticipated] = useAtom(participatedAtom);
  const [totalAirplaneCount, setTotalAirplaneCount] = useState(0);
  const [totalDonation, setTotalDonation] = useState(0);

  useEffect(() => {
    initDonationSummary();
    checkParticipated();
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

  const checkParticipated = async () => {
    const accessToken = localStorage.getItem("escalAccessToken");

    if (!accessToken) {
      return;
    }

    const { result, data } = await getParticipation();

    if (result && data) {
      setParticipated(data.isParticipate);
      return;
    }

    showToast(`에러가 발생했어요.
    이 메시지가 반복된다면 1688-4272 고객센터로 연락주세요.`);
  };

  const handleNoticeClick = () => {
    window.open(
      "https://escal-print.notion.site/X-25392410e8b04c10b17b66d7cd413b54"
    );
  };

  const handleShareClick = async () => {
    const firstTrial = await shareByWebShareApi({
      url: window.location.href,
    });

    if (firstTrial) {
      return;
    }

    const secondTrial = copyTextByClipboardApi();

    if (secondTrial) {
      showToast(`링크를 복사했어요!`, ToastTheme.GREEN);
      return;
    }

    const lastTrial = copyTextByExecCommand();

    if (lastTrial) {
      showToast(`링크를 복사했어요!`, ToastTheme.GREEN);
    } else {
      showToast("공유하기가 지원되지 않는 환경입니다.");
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

    if (totalAirplaneCount >= 10000) {
      showToast(
        `많은 분들의 성원으로 조기 마감되었어요!
        다음 참여기간에 다시 만나요!`,
        ToastTheme.GREEN
      );
      return false;
    }

    if (participated) {
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
    const today = new Date(2023, 3, 15); // TODO: 나중에 빈값으로 수정해줘야함
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
      return;
    } else {
      navigate("/join");
      return;
    }
  };

  const handleHistoryClick = () => {
    navigate("/history");
  };

  const handleDonateClick = () => {
    if (checkDonationAvailability()) {
      navigate("/selectairplane");
    }
  };

  return {
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
