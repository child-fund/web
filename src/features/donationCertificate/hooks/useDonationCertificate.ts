import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as htmlToImage from "html-to-image";

const useDonationCertificate = () => {
  const navigate = useNavigate();
  const certificateAreaRef = useRef<HTMLDivElement>(null);
  const [nickname, setNickname] = useState("");

  const handleBackToMainClick = () => {};

  const handleHistoryClick = () => {
    navigate("/history");
  };

  const handleSaveImageClick = () => {};

  const handleShareClick = async () => {
    const imageUrl = await convertHtmlToImage();

    if (navigator.share && imageUrl) {
      try {
        await navigator.share({
          title: "기부 인증서",
          url: imageUrl,
        });
      } catch (e) {
        console.error(e);
      }
    } else {
      console.log("Web Share API is not supported in your browser.");
    }
  };

  const convertHtmlToImage = async () => {
    const certificateArea = certificateAreaRef.current;

    if (certificateArea) {
      try {
        const dataURL = await htmlToImage.toPng(certificateArea);
        return dataURL;
      } catch (e) {
        console.error(e);
        return undefined;
      }
    }
  };

  return {
    handleBackToMainClick,
    handleSaveImageClick,
    handleHistoryClick,
    handleShareClick,
    nickname,
  };
};

export default useDonationCertificate;
