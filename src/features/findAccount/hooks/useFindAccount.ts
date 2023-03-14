import { useNavigate } from "react-router-dom";

const useFindAccount = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleJoinClick = () => {
    navigate("/join");
  };

  return {
    handleLoginClick,
    handleJoinClick,
  };
};

export default useFindAccount;
