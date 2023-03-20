import Button, { ButtonTheme } from "shared/components/Button/Container";
import { Container } from "./Container.style";

// TODO: 자체적으로 관리하는 데이터는 여기서 로직을 짜고, 그렇지 않고 페이지에 관련된것은 이렇게 props로 받아오고?
interface ButtonAreaContainerProps {
  loginStatus: boolean;
  onHistoryClick: () => void;
  onDonateClick: () => void;
  onShareClick: () => void;
  onJoinClick: () => void;
}

const ButtonAreaContainer = (props: ButtonAreaContainerProps) => {
  return (
    <Container>
      {props.loginStatus ? (
        <>
          <Button
            onButtonClick={props.onHistoryClick}
            text={"내 꿈 기부내역 보기"}
            theme={ButtonTheme.LIGHT}
          />
          <Button
            onButtonClick={props.onDonateClick}
            text={"내 꿈으로 기부하러 가기"}
            theme={ButtonTheme.DARK}
          />
        </>
      ) : (
        <>
          <Button
            onButtonClick={props.onShareClick}
            text={"친구랑 함께하기"}
            theme={ButtonTheme.LIGHT}
          />
          <Button
            onButtonClick={props.onJoinClick}
            text={"회원가입하고 동참하기"}
            theme={ButtonTheme.DARK}
          />
        </>
      )}
    </Container>
  );
};

export default ButtonAreaContainer;
