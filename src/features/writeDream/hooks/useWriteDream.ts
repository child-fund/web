import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContext } from "components/Toast/ToastProvider";

const useWriteDream = () => {
  const navigate = useNavigate();
  const { showToast } = useContext(ToastContext);
  const [dream, setDream] = useState("");

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDream(e.target.value);
  };

  const handleSubmitClick = () => {
    if (dream.length === 0) {
      showToast(`이루고 싶은 꿈이나 소원을 적어주세요!
      작성 완료 후에 다음 단계로 넘어갈 수 있어요 :)`);
      return;
    }

    if (dream.length > 300) {
      showToast(`내용이 너무 길어요
      조금만 줄여서 작성해주세요 :)`);
      return;
    }

    navigate("/certificate");
  };

  return { dream, handleTextChange, handleSubmitClick };
};

export default useWriteDream;
