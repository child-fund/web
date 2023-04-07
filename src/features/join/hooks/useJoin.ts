import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";

import nicknameAtom from "shared/atoms/nicknameAtom";
import { ToastContext } from "shared/components/Toast/ToastProvider";
import postSignUp from "../apis/postSignUp";
import postSignIn from "features/login/apis/postSignIn";

import useAccountIdInput from "./useAccountIdInput";
import useNicknameInput from "./useNicknameInput";
import usePasswordInput from "./usePasswordInput";
import useRetypedPasswordInput from "./useRetypedPasswordInput";

const useJoin = () => {
  const [, setNickname] = useAtom(nicknameAtom);
  const { showToast } = useContext(ToastContext);
  const navigate = useNavigate();
  const { handleNicknameChange, nickname, nicknameWarningMessage } =
    useNicknameInput();
  const { handleAccountIdChange, accountId, accountIdWarningMessage } =
    useAccountIdInput();
  const { handlePasswordChange, password, passwordWarningMessage } =
    usePasswordInput();
  const {
    handleRetypedPasswordChange,
    retypedPassword,
    retypePasswordWarningMessage,
  } = useRetypedPasswordInput(password);

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSubmitClick = async () => {
    const { result, statusCode } = await postSignUp({
      nickname,
      accountId,
      password,
    });

    if (result) {
      await handleLogin();
      return;
    }

    if (statusCode === 400) {
      // 기획이 없어 임의로 추가함
      showToast("모든 영역이 잘 입력되었는지 확인해주세요.");
      return;
    }

    showToast(
      `이용량 급증으로 인해 회원가입이 지연되고 있어요.
      이 메시지가 반복된다면 1688-4272 고객센터로 연락주세요.`
    );
  };

  const handleLogin = async () => {
    const { result, data } = await postSignIn({
      accountId,
      password,
    });

    // console.log("accountId", accountId, "password", password, "data", data);

    if (result && data) {
      localStorage.setItem("escalAccessToken", data.accessToken);
      setNickname(data.nickname);
      navigate("/selectairplane");
      return;
    }

    showToast(
      `이용량 급증으로 인해 로그인이 지연되고 있어요.
      이 메시지가 반복된다면 1688-4272 고객센터로 연락주세요.`
    );
  };

  const allInputValidated = [
    nicknameWarningMessage,
    accountIdWarningMessage,
    passwordWarningMessage,
    retypePasswordWarningMessage,
  ].every((value) => value === "");

  const allInputHaveValue = [
    nickname,
    accountId,
    password,
    retypedPassword,
  ].every((value) => value !== "");

  const canSubmit = allInputValidated && allInputHaveValue;

  return {
    canSubmit,
    handleLoginClick,
    handleSubmitClick,
    handleNicknameChange,
    nickname,
    nicknameWarningMessage,
    handleAccountIdChange,
    accountId,
    accountIdWarningMessage,
    handlePasswordChange,
    password,
    passwordWarningMessage,
    handleRetypedPasswordChange,
    retypedPassword,
    retypePasswordWarningMessage,
  };
};

export default useJoin;
