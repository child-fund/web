import { ButtonTheme } from "components/Button";

import {
  Nickname,
  ResultSentence,
  ResultValue,
  PsNote,
  StyledButton,
} from "./index.style";

interface FindIdResultProps {
  onLoginClick: () => void;
  nickname: string;
  id: string;
}

const FindIdResult = (props: FindIdResultProps) => {
  return (
    <>
      <ResultSentence>
        <p>
          <Nickname>{props.nickname}</Nickname> 의 아이디는
        </p>
        <p>
          <ResultValue>{props.id}</ResultValue> 이에요!
        </p>
      </ResultSentence>
      <PsNote>{`Ps. 다음엔 잊지 않기로 해요! 우린 하나니까 >.<`}</PsNote>
      <StyledButton
        onClickButton={props.onLoginClick}
        text="로그인하러 가기"
        theme={ButtonTheme.DARK}
      />
    </>
  );
};

export default FindIdResult;
