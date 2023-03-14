import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const useWriteDream = () => {
  const navigate = useNavigate();
  const [dream, setDream] = useState("");

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDream(e.target.value);
  };

  const handleSubmitClick = () => {
    navigate("/certificate");
  };

  return { dream, handleTextChange, handleSubmitClick };
};

export default useWriteDream;
