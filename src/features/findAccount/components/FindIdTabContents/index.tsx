import useFindIdTabContents from "features/findAccount/hooks/useFindIdTabContents";

import FindIdInput from "./Input";
import FindIdResult from "./Result";

const FindIdTabContents = () => {
  const {
    handleFindIdClick,
    handleLoginClick,
    id,
    showResult,
    handleNicknameChange,
    nickname,
    nicknameWrongInput,
    nicknameWarningMessage,
  } = useFindIdTabContents();

  return showResult ? (
    <FindIdResult id={id} nickname={nickname} onLoginClick={handleLoginClick} />
  ) : (
    <FindIdInput
      onSearchIdClick={handleFindIdClick}
      onNicknameChange={handleNicknameChange}
      nickname={nickname}
      nicknameWrongInput={nicknameWrongInput}
      nicknameWarningMessage={nicknameWarningMessage}
    />
  );
};

export default FindIdTabContents;
