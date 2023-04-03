import useFindAccountIdTabContents from "features/findAccount/hooks/useFindAccountIdTabContents";

import FindIdInput from "./Input/Container";
import FindIdResult from "./Result/Container";

const FindIdTabContents = () => {
  const {
    handleFindAccountIdClick,
    handleLoginClick,
    accountId,
    handleNicknameChange,
    nickname,
    nicknameWarningMessage,
  } = useFindAccountIdTabContents();

  return accountId ? (
    <FindIdResult
      id={accountId}
      nickname={nickname}
      onLoginClick={handleLoginClick}
    />
  ) : (
    <FindIdInput
      onSearchIdClick={handleFindAccountIdClick}
      onNicknameChange={handleNicknameChange}
      nickname={nickname}
      nicknameWarningMessage={nicknameWarningMessage}
    />
  );
};

export default FindIdTabContents;
