import { useNavigate } from "react-router-dom";
import { Donation } from "../apis/useDonationHistoryData";

const useDonationItem = (donation: Donation) => {
  const navigate = useNavigate();

  const handleCertificateClick = () => {
    navigate(`/certificate`, {
      state: {
        airplaneColor: donation.color,
        airplaneImage: donation.imageUrl,
      },
    });
  };

  const handleDetailClick = () => {
    navigate(`/history/${donation.donationId}`);
  };

  return {
    handleCertificateClick,
    handleDetailClick,
  };
};

export default useDonationItem;
