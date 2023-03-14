import { ChangeEvent } from "react";

import { ButtonTheme } from "components/Button";
import InputArea from "components/InputArea";
import Input from "components/Input";

import { StyledButton } from "features/findAccount/components/FindPasswordTabContents/index.style";

interface FindPasswordInputProps {
  onSearchPasswordClick: () => void;
  onNicknameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  nickname: string;
  nicknameWrongInput: boolean;
  nicknameWarningMessage?: string;
  onIdChange: (e: ChangeEvent<HTMLInputElement>) => void;
  id: string;
  idWrongInput: boolean;
  idWarningMessage?: string;
}

const FindPasswordInput = (props: FindPasswordInputProps) => {
  return (
    <>
      <InputArea>
        <Input
          onValueChange={props.onNicknameChange}
          placeholder="가입 시 설정했던 닉네임을 입력해주세요!"
          title="닉네임"
          value={props.nickname}
          warningMessage={props.nicknameWarningMessage}
          wrongInput={props.nicknameWrongInput}
        />
        <Input
          onValueChange={props.onIdChange}
          placeholder="가입 시 설명했던 아이디를 입력해주세요!"
          title="아이디"
          value={props.id}
          warningMessage={props.idWarningMessage}
          wrongInput={props.idWrongInput}
        />
      </InputArea>
      {props.nickname && !props.nicknameWrongInput && (
        <StyledButton
          onClickButton={props.onSearchPasswordClick}
          text="비밀번호 찾아보기"
          theme={ButtonTheme.DARK}
        />
      )}
    </>
  );
};

export default FindPasswordInput;
