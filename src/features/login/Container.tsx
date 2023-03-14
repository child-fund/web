import useLogin from "./hooks/useLogin";

import AnnouncementButton from "components/Announcement/Button";
import AnnouncementText from "components/Announcement/Text";
import Button, { ButtonTheme } from "components/Button";
import InputArea from "components/InputArea";
import Input from "components/Input";

import {
  Container,
  StyledTitle,
  StyledDescription,
  FindAccountAnnouncementArea,
  JoinAnnouncementArea,
} from "./Container.style";

const LoginContainer = () => {
  const {
    canSubmit,
    handleJoinClick,
    handleFindAccountClick,
    handleSubmitClick,
    handleIdChange,
    id,
    idWarningMessage,
    idWrongInput,
    handlePasswordChange,
    password,
    passwordWarningMessage,
    passwordWrongInput,
  } = useLogin();

  return (
    <Container>
      <StyledTitle
        text={`다시 만나서 반가워요 :)
        로그인 후에 이용할 수 있어요!`}
      />
      <StyledDescription text="로그인하고 내 꿈들을 확인할 수 있어요" />
      <InputArea>
        <Input
          onValueChange={handleIdChange}
          placeholder="아이디 기억하고 계시죠?"
          title="아이디"
          value={id}
          warningMessage={idWarningMessage}
          wrongInput={idWrongInput}
        />
        <Input
          onValueChange={handlePasswordChange}
          placeholder="비밀번호 잊진 않았죠?"
          title="비밀번호"
          type="password"
          value={password}
          warningMessage={passwordWarningMessage}
          wrongInput={passwordWrongInput}
        />
      </InputArea>
      <FindAccountAnnouncementArea>
        <AnnouncementText text="혹시나 아이디/비밀번호를 잊었다면? " />
        <AnnouncementButton
          text="여기"
          onButtonClick={handleFindAccountClick}
        />
        <AnnouncementText text="를 클릭해주세요!" />
      </FindAccountAnnouncementArea>
      {canSubmit && (
        <Button
          onClickButton={handleSubmitClick}
          text="로그인하고 내 꿈 확인하기"
          theme={ButtonTheme.DARK}
        />
      )}
      <JoinAnnouncementArea>
        <AnnouncementText text="처음이라면 " />
        <AnnouncementButton
          text="회원가입 하러가기"
          onButtonClick={handleJoinClick}
        />
        <AnnouncementText text="를 클릭해주세요!" />
      </JoinAnnouncementArea>
    </Container>
  );
};

export default LoginContainer;
