import { useNavigate } from "react-router-dom";

const useDonationHistory = () => {
  const navigate = useNavigate();

  const handleGoBackClick = () => {
    navigate(-1);
  };

  const handleLoadMoreClick = () => {};

  const handleNoticeClick = () => {};

  return {
    handleGoBackClick,
    handleLoadMoreClick,
    handleNoticeClick,
  };
};

export default useDonationHistory;
