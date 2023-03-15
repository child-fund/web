import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useDonationCertificate = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");

  const handleBackToMainClick = () => {};

  const handleHistoryClick = () => {
    navigate("/history");
  };

  const handleSaveImageClick = () => {};

  const handleShareClick = () => {};

  return {
    handleBackToMainClick,
    handleSaveImageClick,
    handleHistoryClick,
    handleShareClick,
    nickname,
  };
};

export default useDonationCertificate;
