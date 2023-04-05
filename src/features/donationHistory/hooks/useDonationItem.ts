import { useNavigate } from "react-router-dom";
import { Donation } from "../apis/useDonationHistoryData";

const id = 123;

const useDonationItem = () => {
  const navigate = useNavigate();

  const handleCertificateClick = () => {
    navigate(`/certificate`);
  };

  const handleDetailClick = (item: Donation) => {
    navigate(`/history/${id}`, { state: { item } });
  };
  return {
    handleCertificateClick,
    handleDetailClick,
  };
};

export default useDonationItem;
