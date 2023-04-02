import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import getPassword from "../apis/getPassword";

const useFindPasswordTabContents = () => {
  const navigate = useNavigate();
  const [showResult, setShowResult] = useState(false);
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [nicknameWarningMessage, setNicknameWarningMessage] = useState("");
  const [id, setId] = useState("");
  const [idWarningMessage, setIdWarningMessage] = useState("");

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNicknameWarningMessage("");
    setNickname(e.target.value);
  };

  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIdWarningMessage("");
    setId(e.target.value);
  };

  const handleFindPasswordClick = async () => {
    const { result, data, statusCode } = await getPassword({
      nickname,
      accountId: id,
    });

    if (result && data) {
      setPassword(data.password);
      // TODO: password값으로 showresult 퉁칠 수 있지 않을까
      setShowResult(true);
    }

    // TODO: 아이디, 닉네임중에 어떤게 문제인지 알려줘야함
    if (statusCode === 404) {
      setIdWarningMessage(`입력하신 닉네임 또는 아이디의 정보가 일치하지 않습니다.
      정보를 다시 확인해주세요.`);
      // setNicknameWarningMessage("이 닉네임으로 가입된 계정은 없어요 :(");
    }
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return {
    handleFindPasswordClick,
    handleLoginClick,
    password,
    showResult,
    handleNicknameChange,
    nickname,
    nicknameWarningMessage,
    handleIdChange,
    id,
    idWarningMessage,
  };
};

export default useFindPasswordTabContents;
