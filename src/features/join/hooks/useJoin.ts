import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContext } from "shared/components/Toast/ToastProvider";
import joinFetcher from "../fetchers/joinFetcher";
import loginFetcher from "features/login/fetchers/loginFetcher";

import useIdInput from "./useIdInput";
import useNicknameInput from "./useNicknameInput";
import usePasswordInput from "./usePasswordInput";
import useRetypedPasswordInput from "./useRetypedPasswordInput";

const useJoin = () => {
  const { showToast } = useContext(ToastContext);
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

  const handleSubmitClick = async () => {
    const { result, statusCode } = await joinFetcher({
      nickname,
      accountId: id,
      password,
    });

    if (result) {
      handleLogin();

      return;
    }

    // TODO: 이런건 fetcher 안으로 넣는게 좋을까요? 에러처리에 관한거니까?
    if (statusCode === 400) {
      showToast("모든 영역이 잘 입력되었는지 확인해주세요.");
      return;
    }

    showToast(
      "회원가입이 지연되고 있습니다. 이 메시지가 반복될 경우 고객센터로 연락해주세요."
    );
  };

  const handleLogin = async () => {
    const { result, data } = await loginFetcher({
      accountId: id,
      password,
    });

    if (result && data) {
      // TODO: 로그인할때에 또 쓰일것 같은데 이렇게 쓰는게 맞나;; 그런데 로그인에서는 에러타입에 따라 메시지를 다르게 줌
      // TODO: 이런 저장하는 로직은 manager에 넣어야 할까
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("nickname", data.nickname);
      navigate("/selectairplane");
      return;
    }

    showToast(
      "로그인이 지연되고 있습니다. 이 메시지가 반복될 경우 고객센터로 연락해주세요."
    );
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
