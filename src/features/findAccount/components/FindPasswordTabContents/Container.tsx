import useFindPasswordTabContents from "features/findAccount/hooks/useFindPasswordTabContents";

import FindPasswordInput from "./Input/Container";
import FindPasswordResult from "./Result/Container";

const FindPasswordTabContents = () => {
  const {
    accountId,
    handleAccountIdChange,
    handleFindPasswordClick,
    handleLoginClick,
    handleNicknameChange,
    password,
    nickname,
    warningMessage,
  } = useFindPasswordTabContents();

  return password ? (
    <FindPasswordResult
      onLoginClick={handleLoginClick}
      nickname={nickname}
      password={password}
    />
  ) : (
    <FindPasswordInput
      accountId={accountId}
      accountIdWarningMessage={warningMessage}
      nickname={nickname}
      nicknameWarningMessage={warningMessage}
      onIdChange={handleAccountIdChange}
      onNicknameChange={handleNicknameChange}
      onSearchPasswordClick={handleFindPasswordClick}
    />
  );
};

export default FindPasswordTabContents;
