import Button, { ButtonTheme } from "components/Button";
import { Id, IdResult, Nickname, PsNote } from "./index.style";

interface FindIdResultProps {
  onLoginClick: () => void;
  nickname: string;
  id: string;
}

const FindIdResult = (props: FindIdResultProps) => {
  return (
    <>
      <IdResult>
        <p>
          <Nickname>{props.nickname}</Nickname> 의 아이디는
        </p>
        <p>
          <Id>{props.id}</Id> 이에요!
        </p>
      </IdResult>
      <PsNote>{`Ps. 다음엔 잊지 않기로 해요! 우린 하나니까 >.<`}</PsNote>
      <Button
        onClickButton={props.onLoginClick}
        text="로그인하러 가기"
        theme={ButtonTheme.DARK}
      />
    </>
  );
};

export default FindIdResult;
