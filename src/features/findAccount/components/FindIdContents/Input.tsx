import Input from "components/Input";
import Button, { ButtonTheme } from "components/Button";

import { InputArea } from "./index.style";
import { ChangeEvent } from "react";

interface FindIdContentsInputProps {
  onSearchIdClick: () => void;
  onNicknameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  nickname: string;
  nicknameWrongInput: boolean;
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
          wrongInput={props.nicknameWrongInput}
        />
      </InputArea>
      {props.nickname && !props.nicknameWrongInput && (
        <Button
          onClickButton={props.onSearchIdClick}
          text="아이디 찾아보기"
          theme={ButtonTheme.DARK}
        />
      )}
    </>
  );
};

export default FindIdInput;
