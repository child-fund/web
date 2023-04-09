import { useNavigate } from "react-router-dom";

const useNavigationBar = () => {
  const navigate = useNavigate();

  const handleGoBackClick = () => {
    navigate(-1);
  };

  const handleGoHomeClick = () => {
    navigate("/");
  };

  return { handleGoBackClick, handleGoHomeClick };
};

export default useNavigationBar;
