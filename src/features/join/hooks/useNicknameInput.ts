import { ChangeEvent, useContext, useState } from "react";

import getIsNicknameDuplicate from "../fetchers/getIsNicknameDuplicate";
import { ToastContext } from "shared/components/Toast/ToastProvider";
import useDebouncedCallback from "shared/utils/useDebouncedCallback";

const useNicknameInput = () => {
  const { showToast } = useContext(ToastContext);
  const [nickname, setNickname] = useState("");
  const [nicknameWarningMessage, setNicknameWarningMessage] = useState("");

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    setNickname(inputValue);
    debouncedCheckValidityAndDuplication(inputValue);
  };

  const checkValidityAndDuplication = async (inputValue: string) => {
    const isValidateInput = checkValidity(inputValue);

    if (!isValidateInput) {
      // 기획을 여러번 요청했으나 응답이 없고, 필요성은 분명하여 임의로 WarningMessage를 넣음.
      setNicknameWarningMessage(
        "국문 또는 영문 16자 이내로, 띄어쓰기 없이 만들어주세요."
      );
      return;
    }

    const { result, data } = await getIsNicknameDuplicate({
      nickname: inputValue,
    });

    if (result && data?.isDuplicate) {
      setNicknameWarningMessage("이미 사용중인 닉네임이에요 :(");
      return;
    }

    if (!result) {
      showToast(`이용량 급증으로 인해 닉네임 확인이 지연되고 있어요.
      이 메시지가 반복된다면 1688-4272 고객센터로 연락주세요.`);
    }

    setNicknameWarningMessage("");
  };

  const checkValidity = (value: string) => {
    const pattern = /^[ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z]{1,16}$/;
    return pattern.test(value);
  };

  const debouncedCheckValidityAndDuplication = useDebouncedCallback(
    checkValidityAndDuplication,
    225
  );

  return {
    handleNicknameChange,
    nickname,
    nicknameWarningMessage,
  };
};

export default useNicknameInput;
