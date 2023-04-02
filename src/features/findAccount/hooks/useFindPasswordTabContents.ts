import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import getPassword from "../apis/getPassword";

const useFindPasswordTabContents = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [accountId, setAccountId] = useState("");
  const [warningMessage, setWarningMessage] = useState("");

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWarningMessage("");
    setNickname(e.target.value);
  };

  const handleAccountIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWarningMessage("");
    setAccountId(e.target.value);
  };

  const handleFindPasswordClick = async () => {
    const { result, data } = await getPassword({
      nickname,
      accountId,
    });

    if (result && data) {
      setPassword(data.password);
      return;
    }

    setWarningMessage(`입력하신 닉네임 또는 아이디의 정보가 일치하지 않습니다.
    정보를 다시 확인해주세요.`);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return {
    accountId,
    handleAccountIdChange,
    handleFindPasswordClick,
    handleLoginClick,
    handleNicknameChange,
    nickname,
    password,
    warningMessage,
  };
};

export default useFindPasswordTabContents;
