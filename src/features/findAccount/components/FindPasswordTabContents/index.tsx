import useFindPasswordTabContents from "features/findAccount/hooks/useFindPasswordTabContents";

import FindPasswordInput from "./Input";
import FindPasswordResult from "./Result";

const FindPasswordTabContents = () => {
  const {
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
  } = useFindPasswordTabContents();

  return showResult ? (
    <FindPasswordResult
      onLoginClick={handleLoginClick}
      nickname={nickname}
      password={password}
    />
  ) : (
    <FindPasswordInput
      onSearchPasswordClick={handleFindPasswordClick}
      onNicknameChange={handleNicknameChange}
      nickname={nickname}
      nicknameWrongInput={nicknameWrongInput}
      nicknameWarningMessage={nicknameWarningMessage}
      onIdChange={handleIdChange}
      id={id}
      idWrongInput={idWrongInput}
      idWarningMessage={idWarningMessage}
    />
  );
};

export default FindPasswordTabContents;
