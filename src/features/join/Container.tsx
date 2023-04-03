import useJoin from "./hooks/useJoin";

import ScrollableContainer from "shared/components/ScrollableContainer/Container";
import Button, { ButtonTheme } from "shared/components/Button/Container";
import InputArea from "shared/components/InputArea/Container";
import Input from "shared/components/Input/Container";

import {
  StyledTitle,
  StyledDescription,
  ContentContainer,
} from "./Container.style";

const JoinContainer = () => {
  const {
    canSubmit,
    handleLoginClick,
    handleSubmitClick,
    handleNicknameChange,
    nickname,
    nicknameWarningMessage,
    handleAccountIdChange,
    accountId,
    accountIdWarningMessage,
    handlePasswordChange,
    password,
    passwordWarningMessage,
    handleRetypedPasswordChange,
    retypedPassword,
    retypePasswordWarningMessage,
  } = useJoin();

  return (
    <ScrollableContainer
      bottomAnnouncement={{
        buttonText: "로그인 하러가기",
        leftText: "이미 가입했다면? ",
        onButtonClick: handleLoginClick,
        rightText: "를 클릭해주세요!",
      }}
    >
      <ContentContainer>
        <StyledTitle
          text={`1분만 시간내어서
        회원가입을 부탁드려요`}
        />
        <StyledDescription text="회원가입 후에 바로 기부참여가 가능해요" />
        <InputArea>
          <Input
            placeholder="닉네임을 하나 만들어볼까요?"
            onValueChange={handleNicknameChange}
            title="닉네임"
            value={nickname}
            warningMessage={nicknameWarningMessage}
          />
          <Input
            placeholder="사용할 아이디를 만들어주세요!"
            onValueChange={handleAccountIdChange}
            title="아이디"
            value={accountId}
            warningMessage={accountIdWarningMessage}
          />
          <Input
            placeholder="8자 이상 20자 이하로 영문, 숫자를 조합해야해요!"
            onValueChange={handlePasswordChange}
            title="비밀번호"
            type="password"
            value={password}
            warningMessage={passwordWarningMessage}
          />
          <Input
            placeholder="만든 비밀번호를 확인해볼까요?"
            onValueChange={handleRetypedPasswordChange}
            title="비밀번호 확인"
            type="password"
            value={retypedPassword}
            warningMessage={retypePasswordWarningMessage}
          />
        </InputArea>
        {canSubmit && (
          <Button
            onButtonClick={handleSubmitClick}
            text="기부 동참하러 가기"
            theme={ButtonTheme.DARK}
          />
        )}
      </ContentContainer>
    </ScrollableContainer>
  );
};

export default JoinContainer;
