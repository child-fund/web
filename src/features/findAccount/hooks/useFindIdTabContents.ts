import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const useFindIdTabContents = () => {
  const navigate = useNavigate();
  const [showResult, setShowResult] = useState(true); //TODO: 다시 False로 바꿔야함
  const [id, setId] = useState("찾기 결과");
  const [nickname, setNickname] = useState("닉네임"); // TODO: 초기값 비워야함
  const [nicknameWrongInput, setNicknameWrongInput] = useState(false);
  const [nicknameWarningMessage, setNicknameWarningMessage] = useState("");

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
    // TODO: api 들어갈 자리
    const pattern = /^[ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z]{1,16}$/;
    return pattern.test(value);
  };

  const handleFindIdClick = () => {
    setShowResult(true);
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
    nicknameWrongInput,
    nicknameWarningMessage,
  };
};

export default useFindIdTabContents;
