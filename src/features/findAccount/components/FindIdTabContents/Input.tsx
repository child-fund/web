import { ChangeEvent } from "react";

import { ButtonTheme } from "shared/components/Button/Container";
import InputArea from "shared/components/InputArea/Container";
import Input from "shared/components/Input/Container";

import { StyledButton } from "./Container.style";

interface FindIdContentsInputProps {
  onSearchIdClick: () => void;
  onNicknameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  nickname: string;
  nicknameWarningMessage?: string;
}

const FindIdInput = (props: FindIdContentsInputProps) => {
  return (
    <>
      <InputArea>
        <Input
          onValueChange={props.onNicknameChange}
          placeholder="가입 시 설정했던 닉네임을 입력해주세요!"
          title="닉네임"
          value={props.nickname}
          warningMessage={props.nicknameWarningMessage}
        />
      </InputArea>
      {props.nickname && !props.nicknameWarningMessage && (
        <StyledButton
          onButtonClick={props.onSearchIdClick}
          text="아이디 찾아보기"
          theme={ButtonTheme.DARK}
        />
      )}
    </>
  );
};

export default FindIdInput;
