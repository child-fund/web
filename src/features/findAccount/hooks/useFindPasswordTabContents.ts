import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const useFindPasswordTabContents = () => {
  const navigate = useNavigate();
  const [showResult, setShowResult] = useState(false);
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [nicknameWrongInput, setNicknameWrongInput] = useState(false);
  const [nicknameWarningMessage, setNicknameWarningMessage] = useState("");
  const [id, setId] = useState("");
  const [idWrongInput, setIdWrongInput] = useState(false);
  const [idWarningMessage, setIdWarningMessage] = useState("");

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);

    const result = checkValidity(e.target.value);

    if (result) {
      setNicknameWrongInput(false);
    } else {
      setNicknameWrongInput(true);
      setNicknameWarningMessage("이 닉네임으로 가입된 계정은 없어요 :(");
    }
  };

  const checkValidity = (value: string) => {
    const pattern = /^[ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z]{1,16}$/;
    return pattern.test(value);
  };

  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);

    const result = checkValidity(e.target.value);

    if (result) {
      setIdWrongInput(false);
    } else {
      setIdWrongInput(true);
      setIdWarningMessage(`입력하신 닉네임 또는 아이디의 정보가 일치하지 않습니다.
      정보를 다시 확인해주세요.`);
    }
  };

  const handleFindPasswordClick = () => {
    setShowResult(true);
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
    nicknameWrongInput,
    nicknameWarningMessage,
    handleIdChange,
    id,
    idWrongInput,
    idWarningMessage,
  };
};

export default useFindPasswordTabContents;
