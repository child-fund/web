import useLogin from "./hooks/useLogin";

import ScrollableContainer from "shared/components/ScrollableContainer/Container";
import Button, { ButtonTheme } from "shared/components/Button/Container";
import InputArea from "shared/components/InputArea/Container";
import Input from "shared/components/Input/Container";

import {
  ContentContainer,
  StyledTitle,
  StyledDescription,
  FindAccountAnnouncement,
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
    handlePasswordChange,
    password,
    passwordWarningMessage,
  } = useLogin();

  return (
    <ScrollableContainer
      bottomAnnouncement={{
        buttonText: "회원가입 하러가기",
        leftText: "처음이라면 ",
        onButtonClick: handleJoinClick,
        rightText: "를 클릭해주세요!",
      }}
    >
      <ContentContainer>
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
          />
          <Input
            onValueChange={handlePasswordChange}
            placeholder="비밀번호 잊진 않았죠?"
            title="비밀번호"
            type="password"
            value={password}
            warningMessage={passwordWarningMessage}
          />
        </InputArea>
        <FindAccountAnnouncement
          buttonText="여기"
          leftText="혹시나 아이디/비밀번호를 잊었다면? "
          onButtonClick={handleFindAccountClick}
          rightText="를 클릭해주세요!"
        />
        {canSubmit && (
          <Button
            onButtonClick={handleSubmitClick}
            text="로그인하고 내 꿈 확인하기"
            theme={ButtonTheme.DARK}
          />
        )}
      </ContentContainer>
    </ScrollableContainer>
  );
};

export default LoginContainer;
