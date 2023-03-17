import { useNavigate } from "react-router-dom";
import { DummyData } from "../dummyData";

const id = 123;

const useDonationItem = () => {
  const navigate = useNavigate();

  const handleCertificateClick = () => {
    navigate(`/certificate`);
  };

  const handleDetailClick = (item: DummyData) => {
    navigate(`/history/${id}`, { state: { item } });
  };
  return {
    handleCertificateClick,
    handleDetailClick,
  };
};

export default useDonationItem;
