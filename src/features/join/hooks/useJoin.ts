import { useNavigate } from "react-router-dom";

import useIdInput from "./useIdInput";
import useNicknameInput from "./useNicknameInput";
import usePasswordInput from "./usePasswordInput";
import useRetypedPasswordInput from "./useRetypedPasswordInput";

const useJoin = () => {
  const navigate = useNavigate();
  const {
    handleNicknameChange,
    nickname,
    nicknameWrongInput,
    nicknameWarningMessage,
  } = useNicknameInput();
  const { handleIdChange, id, idWarningMessage, idWrongInput } = useIdInput();
  const {
    handlePasswordChange,
    password,
    passwordWarningMessage,
    passwordWrongInput,
  } = usePasswordInput();
  const {
    handleRetypedPasswordChange,
    retypedPassword,
    retypePasswordWarningMessage,
    retypedPasswordWrongInput,
  } = useRetypedPasswordInput(password);

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSubmitClick = () => {
    navigate("/selectairplane");
  };

  const allInputValidated = [
    nicknameWrongInput,
    idWrongInput,
    passwordWrongInput,
    retypedPasswordWrongInput,
  ].every((value) => value !== true);

  const allInputHaveValue = [nickname, id, password, retypedPassword].every(
    (value) => value !== ""
  );

  const canSubmit = allInputValidated && allInputHaveValue;

  return {
    canSubmit,
    handleLoginClick,
    handleSubmitClick,
    handleNicknameChange,
    nickname,
    nicknameWrongInput,
    nicknameWarningMessage,
    handleIdChange,
    id,
    idWarningMessage,
    idWrongInput,
    handlePasswordChange,
    password,
    passwordWarningMessage,
    passwordWrongInput,
    handleRetypedPasswordChange,
    retypedPassword,
    retypePasswordWarningMessage,
    retypedPasswordWrongInput,
  };
};

export default useJoin;
