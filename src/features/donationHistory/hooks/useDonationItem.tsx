import { useNavigate } from "react-router-dom";

const id = 123;

const useDonationItem = () => {
  const navigate = useNavigate();

  const handleCertificateClick = () => {
    navigate(`/certificate`);
  };

  const handleDetailClick = () => {
    navigate(`/history/${id}`);
  };
  return {
    handleCertificateClick,
    handleDetailClick,
  };
};

export default useDonationItem;
