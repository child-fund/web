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
    usePasswordInput({ accountId });

  const handleJoinClick = () => {
    navigate("/join");
  };

  const handleFindAccountClick = () => {
    navigate("/findaccount");
  };

  const handleSubmitClick = async () => {
    // TODO: 여기에는 swr이나 리액트 쿼리를 쓰면 좋겠다.
    const { result, data } = await postSignIn({
      accountId,
      password,
    });

    if (result && data) {
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("nickname", data.nickname); // TODO: 전역변수로 with jotai

      // TODO: 참여여부에 따라 경로 다르게
      navigate("/");
      // navigate("/history");
      return;
    }

    showToast(`이용량 급증으로 인해 로그인이 지연되고 있어요.
    이 메시지가 반복된다면 1688-4272 고객센터로 연락주세요.`);
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
