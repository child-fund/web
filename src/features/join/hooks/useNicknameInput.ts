import { ChangeEvent, useState } from "react";

const useNicknameInput = () => {
  const [nickname, setNickname] = useState("");
  const [nicknameWrongInput, setNicknameWrongInput] = useState(false);
  const [nicknameWarningMessage, setNicknameWarningMessage] = useState("");

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);

    const result = checkValidity(e.target.value);

    if (result) {
      setNicknameWrongInput(false);
    } else {
      setNicknameWrongInput(true);
      setNicknameWarningMessage("띄어쓰기는 할 수 없어요 :(");
    }

    // "이미 사용중인 닉네임이에요 :("
  };

  const checkValidity = (value: string) => {
    const pattern = /^[ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z]{1,16}$/;
    return pattern.test(value);
  };

  return {
    handleNicknameChange,
    nickname,
    nicknameWrongInput,
    nicknameWarningMessage,
  };
};

export default useNicknameInput;
