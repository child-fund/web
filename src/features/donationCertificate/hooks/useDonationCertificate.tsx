import { useContext, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import { useAtom } from "jotai";

import { ToastTheme } from "shared/components/Toast/Container";
import { ToastContext } from "shared/components/Toast/ToastProvider";
import copyImageByClipboardApi from "shared/utils/copyImageByClipboardApi";
import copyImageByExecCommand from "shared/utils/copyImageByExecCommand";
import shareUrlByWebShareApi from "shared/utils/shareUrlByWebShareApi";
import nicknameAtom from "shared/atoms/nicknameAtom";

import AirplaneColor from "features/selectAirplane/constants/airplaneColor";
import airplaneList from "features/selectAirplane/constants/airplaneList";
import certificateColorList from "../constants/certificateColorList";

const useDonationCertificate = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as
    | { airplaneColor: AirplaneColor; airplaneImage: string }
    | undefined;
  const { showToast } = useContext(ToastContext);
  const certificateAreaRef = useRef<HTMLDivElement>(null);
  const [nickname] = useAtom(nicknameAtom);

  const handleBackToMainClick = () => {
    navigate("/");
  };

  const handleHistoryClick = () => {
    navigate("/history");
  };

  const handleSaveImageClick = async () => {
    if (!certificateAreaRef.current) return;

    const imageElement = await html2canvas(certificateAreaRef.current);
    const link = document.createElement("a");
    link.href = imageElement.toDataURL();
    link.download = `${nickname}님의 종이비행기 후원인증서.png`;
    link.click();
  };

  const handleShareClick = async () => {
    const imageUrl = await convertHtmlToImage();
    if (!imageUrl) {
      return;
    }

    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const file = new File([blob], "your-image-name.png", {
          type: "image/png",
        });
        shareUrlByWebShareApi({
          title: "에스칼프린트x초록우산 종이비행기 기부인증서",
          files: [file],
        });
        console.log(file);
      });

    // if (!firstTrial) {
    //   const secondTrial = await copyImageByClipboardApi(imageUrl);
    //   if (secondTrial) {
    //     showToast("인증서가 클립보드에 저장되었어요!", ToastTheme.GREEN);
    //   } else {
    //     const lastTrial = await copyImageByExecCommand(imageUrl);
    //     if (lastTrial) {
    //       showToast("인증서가 클립보드에 저장되었어요!", ToastTheme.GREEN);
    //     } else {
    //       showToast("공유하기가 지원되지 않는 환경입니다.");
    //     }
    //   }
    // }
  };

  const convertHtmlToImage = async () => {
    const certificateArea = certificateAreaRef.current;

    if (certificateArea) {
      try {
        const imageElement = await html2canvas(certificateAreaRef.current);
        const dataURL = imageElement.toDataURL();

        return dataURL;
      } catch (e) {
        console.error(e);
        return undefined;
      }
    }
  };

  const airplaneColor = state?.airplaneColor || airplaneList[0].key;
  const certificateColor =
    certificateColorList.find((item) => item.key === airplaneColor) ||
    certificateColorList[0];

  const airplaneImage = state?.airplaneImage || airplaneList[0].certificate;

  return {
    airplaneImage,
    certificateAreaRef,
    certificateColor,
    handleBackToMainClick,
    handleSaveImageClick,
    handleHistoryClick,
    handleShareClick,
  };
};

export default useDonationCertificate;
