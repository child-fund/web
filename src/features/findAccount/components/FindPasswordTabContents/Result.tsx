import { ButtonTheme } from "components/Button";

import {
  ResultSentence,
  Nickname,
  ResultValue,
  PsNote,
  StyledButton,
} from "./index.style";

interface FindPasswordResultProps {
  nickname: string;
  password: string;
  onLoginClick: () => void;
}

const FindPasswordResult = (props: FindPasswordResultProps) => {
  return (
    <>
      <ResultSentence>
        <p>
          <Nickname>{props.nickname}</Nickname> 의 비밀번호는
        </p>
        <p>
          <ResultValue>{props.password}</ResultValue> 이에요!
        </p>
      </ResultSentence>
      <PsNote>{`Ps. 다음엔 잊지 않기로 해요! 우린 또 하나의 가족이니까 >.<`}</PsNote>
      <StyledButton
        onClickButton={props.onLoginClick}
        text="로그인하러 가기"
        theme={ButtonTheme.DARK}
      />
    </>
  );
};

export default FindPasswordResult;
