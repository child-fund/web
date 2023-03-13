import useMain from "./hooks/useMain";

import Button, { ButtonTheme } from "components/Button";

// TODO: 이걸 줄일 수 있는 방법은?
import {
  Container,
  StyledTitle,
  StyledDescription,
  Period,
  HoldPaperAirplaneImage,
  CountingArea,
  CountTitle,
  FlippingArea1,
  FlippingArea2,
  EscalPrintLogo,
  NoticeArea,
  ButtonArea,
} from "./Container.style";
import holdPaperAirplane from "assets/imgs/hold-paper-airplane-3-d@3x.png";
import escalPrintLogo from "assets/imgs/escalPrintLogo.svg";

const MainContainer = () => {
  const {
    loginStatus,
    handleShareClick,
    handleJoinClick,
    handleHistoryClick,
    handleDonateClick,
  } = useMain();

  return (
    <Container>
      <StyledTitle
        text={`여러분의 소중한 꿈으로
        따뜻한 기부에 동참하시겠어요?`}
      />
      <StyledDescription text="꿈이 적힌 종이비행기 1개당 100원씩 에스칼프린트가 기부해요." />
      <Period>참여 기간 - 2023.04.01 ~ 2023.04.30</Period>
      <HoldPaperAirplaneImage src={holdPaperAirplane} alt="holdPaperAirplane" />
      <CountingArea>
        <CountTitle>
          {`지금까지 모인 `}
          <span>종이비행기 개수</span>
        </CountTitle>
        <FlippingArea1></FlippingArea1>
        <CountTitle>
          {`지금까지 모인 `}
          <span>누적 후원금</span>
        </CountTitle>
        <FlippingArea2></FlippingArea2>
        <EscalPrintLogo src={escalPrintLogo} alt="escalPrintLogo" />
      </CountingArea>
      <NoticeArea>
        <li>
          1️⃣ 행사기간 동안
          <span> 1개 계정 당 1회에 한하여 참여 가능</span>해요.
        </li>
        <li>
          💚 누적 후원금은
          <span> 행사 종료 후 전액 초록우산 어린이재단에 기부</span>돼요.
        </li>
        <li>
          {`👀 후원 기부내역은 `}
          <button>공지사항 확인하기</button>를 클릭하여 확인 가능해요.
        </li>
        <li>
          🔐 여러분의 꿈은
          <span> 구름 속에서 안전하게 보관</span>되니 걱정하지 마세요
        </li>
      </NoticeArea>
      <ButtonArea>
        {loginStatus ? (
          <>
            <Button
              onClickButton={handleHistoryClick}
              text={"내 꿈 기부내역 보기"}
              theme={ButtonTheme.LIGHT}
            />
            <Button
              onClickButton={handleDonateClick}
              text={"내 꿈으로 기부하러 가기"}
              theme={ButtonTheme.DARK}
            />
          </>
        ) : (
          <>
            <Button
              onClickButton={handleShareClick}
              text={"친구랑 함께하기"}
              theme={ButtonTheme.LIGHT}
            />
            <Button
              onClickButton={handleJoinClick}
              text={"회원가입하고 동참하기"}
              theme={ButtonTheme.DARK}
            />
          </>
        )}
      </ButtonArea>
    </Container>
  );
};

export default MainContainer;
