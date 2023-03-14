import { useNavigate } from "react-router-dom";

import useIdInput from "./useIdInput";
import usePasswordInput from "./usePasswordInput";

const useLogin = () => {
  const navigate = useNavigate();
  const { handleIdChange, id, idWarningMessage, idWrongInput } = useIdInput();
  //  TODO: join과 다른역할인데 겹침
  const {
    handlePasswordChange,
    password,
    passwordWarningMessage,
    passwordWrongInput,
  } = usePasswordInput();

  const handleJoinClick = () => {
    navigate("/join");
  };

  const handleFindAccountClick = () => {
    navigate("/findaccount");
  };

  const handleSubmitClick = () => {
    // TODO: 이벤트 참여 여부에 따라 경로 다름
    navigate("/");
    // navigate("/history");
  };

  const allInputValidated = [idWrongInput, passwordWrongInput].every(
    (value) => value !== true
  );

  const allInputHaveValue = [id, password].every((value) => value !== "");

  const canSubmit = allInputValidated && allInputHaveValue;

  return {
    canSubmit,
    handleJoinClick,
    handleFindAccountClick,
    handleSubmitClick,
    handleIdChange,
    id,
    idWarningMessage,
    idWrongInput,
    handlePasswordChange,
    password,
    passwordWarningMessage,
    passwordWrongInput,
  };
};

export default useLogin;
