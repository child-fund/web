import { useNavigate } from "react-router-dom";
import { Donation } from "../apis/useDonationHistoryData";

const donationId = 2;

const useDonationItem = () => {
  const navigate = useNavigate();

  const handleCertificateClick = () => {
    navigate(`/certificate`);
  };

  const handleDetailClick = (item: Donation) => {
    navigate(`/history/${donationId}`, { state: { item } });
  };

  return {
    handleCertificateClick,
    handleDetailClick,
  };
};

export default useDonationItem;
