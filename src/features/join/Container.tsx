import useJoin from "./hooks/useJoin";

import AnnouncementButton from "components/Announcement/Button";
import AnnouncementText from "components/Announcement/Text";
import Button, { ButtonTheme } from "components/Button";
import InputArea from "components/InputArea";
import Input from "components/Input";

import {
  Container,
  StyledTitle,
  StyledDescription,
  AnnouncementArea,
} from "./Container.style";

const JoinContainer = () => {
  const {
    canSubmit,
    handleLoginClick,
    handleSubmitClick,
    handleNicknameChange,
    nickname,
    nicknameWrongInput,
    nicknameWarningMessage,
    handleIdChange,
    id,
    idWarningMessage,
    idWrongInput,
    handlePasswordChange,
    password,
    passwordWarningMessage,
    passwordWrongInput,
    handleRetypedPasswordChange,
    retypedPassword,
    retypePasswordWarningMessage,
    retypedPasswordWrongInput,
  } = useJoin();

  return (
    <Container>
      <StyledTitle
        text={`1분만 시간내어서
        회원가입을 부탁드려요`}
      />
      <StyledDescription text="회원가입 후에 바로 기부참여가 가능해요" />
      <InputArea>
        <Input
          placeholder="닉네임을 하나 만들어볼까요?"
          // placeholder="한글 혹은 영문으로 만들어주세요"
          onValueChange={handleNicknameChange}
          title="닉네임"
          value={nickname}
          wrongInput={nicknameWrongInput}
          warningMessage={nicknameWarningMessage}
        />
        <Input
          placeholder="사용할 아이디를 만들어주세요!"
          onValueChange={handleIdChange}
          title="아이디"
          value={id}
          wrongInput={idWrongInput}
          warningMessage={idWarningMessage}
        />
        <Input
          placeholder="8자 이상 20자 이하로 영문, 숫자를 조합해야해요!"
          onValueChange={handlePasswordChange}
          title="비밀번호"
          type="password"
          value={password}
          wrongInput={passwordWrongInput}
          warningMessage={passwordWarningMessage}
        />
        <Input
          placeholder="만든 비밀번호를 확인해볼까요?"
          onValueChange={handleRetypedPasswordChange}
          title="비밀번호 확인"
          type="password"
          value={retypedPassword}
          wrongInput={retypedPasswordWrongInput}
          warningMessage={retypePasswordWarningMessage}
        />
      </InputArea>
      {canSubmit && (
        <Button
          onClickButton={handleSubmitClick}
          text="기부 동참하러 가기"
          theme={ButtonTheme.DARK}
        />
      )}
      <AnnouncementArea>
        <AnnouncementText text="이미 가입했다면? " />
        <AnnouncementButton
          text="로그인 하러가기"
          onButtonClick={handleLoginClick}
        />
        <AnnouncementText text="를 클릭해주세요!" />
      </AnnouncementArea>
    </Container>
  );
};

export default JoinContainer;
