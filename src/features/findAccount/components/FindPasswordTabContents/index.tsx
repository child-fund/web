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
    nicknameWarningMessage,
    handleIdChange,
    id,
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
      nicknameWarningMessage={nicknameWarningMessage}
      onIdChange={handleIdChange}
      id={id}
      idWarningMessage={idWarningMessage}
    />
  );
};

export default FindPasswordTabContents;
