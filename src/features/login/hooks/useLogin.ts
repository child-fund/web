import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";

import nicknameAtom from "shared/atoms/nicknameAtom";
import participatedAtom from "shared/atoms/participatedAtom";
import { ToastContext } from "shared/components/Toast/ToastProvider";
import postSignIn from "../apis/postSignIn";
import getParticipation from "shared/apis/getParticipation";

import useAccountIdInput from "./useAccountIdInput";
import usePasswordInput from "./usePasswordInput";

const useLogin = () => {
  const navigate = useNavigate();
  const { showToast } = useContext(ToastContext);
  const [, setNickname] = useAtom(nicknameAtom);
  const [, setParticipated] = useAtom(participatedAtom);
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
    // TODO: 여기에는 swr이나 리액트 쿼리를 쓰면 좋겠다.
    const { result, data } = await postSignIn({
      accountId,
      password,
    });

    if (result && data) {
      localStorage.setItem("accessToken", data.accessToken);
      setNickname(data.nickname || ""); // TODO: 기본값 없애야

      await checkParticipationAndMoveNext();
      return;
    }

    showToast(`이용량 급증으로 인해 로그인이 지연되고 있어요.
    이 메시지가 반복된다면 1688-4272 고객센터로 연락주세요.`);
  };

  const checkParticipationAndMoveNext = async () => {
    // TODO: accessToken 저장하는거랑 getParticipation이랑 묶을 수 있을것 같은데, 그럼 getParticipation의 에러 toast는 어떻게 보여주지? useContext를 못쓰는데. 꼭 manager로 만들필요 없고 hook으로 해도 될까?
    const { result, data } = await getParticipation();

    if (!result || !data) {
      showToast(`에러가 발생했어요.
      이 메시지가 반복된다면 1688-4272 고객센터로 연락주세요.`);
      return;
    }

    if (data.isParticipate) {
      navigate("/history");
    } else {
      navigate("/");
    }

    setParticipated(data.isParticipate);
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
