import { useNavigate } from "react-router-dom";

const useNavigationBar = () => {
  const navigate = useNavigate();

  const handleGoBackClick = () => {
    navigate(-1);
  };

  return { handleGoBackClick };
};

export default useNavigationBar;
