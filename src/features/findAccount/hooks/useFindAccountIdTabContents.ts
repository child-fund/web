import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import getIdByNickname from "../apis/getIdByNickname";

const useFindAccountIdTabContents = () => {
  const navigate = useNavigate();
  const [accountId, setAccountId] = useState("");
  const [nickname, setNickname] = useState("");
  const [nicknameWarningMessage, setNicknameWarningMessage] = useState("");

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNicknameWarningMessage("");
    setNickname(e.target.value);
  };

  const handleFindAccountIdClick = async () => {
    const { result, data } = await getIdByNickname({ nickname });

    if (result && data) {
      setAccountId(data.accountId);
      return;
    }

    setAccountId("");
    setNicknameWarningMessage("이 닉네임으로 가입된 계정은 없어요 :(");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return {
    accountId,
    handleFindAccountIdClick,
    handleLoginClick,
    handleNicknameChange,
    nickname,
    nicknameWarningMessage,
  };
};

export default useFindAccountIdTabContents;
