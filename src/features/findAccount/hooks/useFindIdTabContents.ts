import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import getIdByNickname from "../apis/getIdByNickname";

const useFindIdTabContents = () => {
  const navigate = useNavigate();
  const [showResult, setShowResult] = useState(false);
  const [id, setId] = useState("");
  const [nickname, setNickname] = useState("");
  const [nicknameWarningMessage, setNicknameWarningMessage] = useState("");

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNicknameWarningMessage("");
    setNickname(e.target.value);
  };

  const handleFindIdClick = async () => {
    const { result, data } = await getIdByNickname({ nickname });

    if (result && data) {
      setId(data.accountId);
      // TODO: id값으로 showresult 퉁칠 수 있지 않을까
      setShowResult(true);
      return;
    }

    setNicknameWarningMessage("이 닉네임으로 가입된 계정은 없어요 :(");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return {
    handleFindIdClick,
    handleLoginClick,
    id,
    showResult,
    handleNicknameChange,
    nickname,
    nicknameWarningMessage,
  };
};

export default useFindIdTabContents;
