import { useNavigate } from "react-router-dom";

const useJoin = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleMainClick = () => {
    navigate("/");
  };
  return { handleLoginClick, handleMainClick };
};

export default useJoin;
