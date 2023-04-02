import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContext } from "shared/components/Toast/ToastProvider";
import postSignIn from "../apis/postSignIn";

import useAccountIdInput from "./useAccountIdInput";
import usePasswordInput from "./usePasswordInput";

const useLogin = () => {
  const navigate = useNavigate();
  const { showToast } = useContext(ToastContext);
  const { handleAccountIdChange, accountId, accountIdWarningMessage } =
    useAccountIdInput();
  const { handlePasswordChange, password, passwordWarningMessage } =
    usePasswordInput();

  const handleJoinClick = () => {
    navigate("/join");
  };

  const handleFindAccountClick = () => {
    navigate("/findaccount");
  };

  const handleSubmitClick = async () => {
    const { result, data, statusCode } = await postSignIn({
      accountId,
      password,
    });

    if (result && data) {
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("nickname", data.nickname);

      // TODO: 참여여부에 따라 경로 다르게
      navigate("/");
      // navigate("/history");
      return;
    }

    // TODO: 아이디/비밀번호가 틀렸을경우
    if (statusCode === 404) {
    }

    if (statusCode === 500) {
      showToast(
        "로그인이 지연되고 있습니다. 이 메시지가 반복될 경우 고객센터로 연락해주세요."
      );
    }
  };

  const allInputValidated = [
    accountIdWarningMessage,
    passwordWarningMessage,
  ].every((value) => value === "");

  const allInputHaveValue = [accountId, password].every(
    (value) => value !== ""
  );

  const canSubmit = allInputValidated && allInputHaveValue;

  return {
    canSubmit,
    handleJoinClick,
    handleFindAccountClick,
    handleSubmitClick,
    handleAccountIdChange,
    accountId,
    accountIdWarningMessage,
    handlePasswordChange,
    password,
    passwordWarningMessage,
  };
};

export default useLogin;
