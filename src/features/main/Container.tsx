import useMain from "./hooks/useMain";

import {
  Container,
  StyledTitle,
  StyledDescription,
  Period,
  HoldPaperAirplaneImage,
} from "./Container.style";
import holdPaperAirplane from "shared/assets/imgs/holdPaperAirplane.png";
import NoticeAreaContainer from "./Components/NoticeArea/Container";
import ButtonAreaContainer from "./Components/ButtonArea/Container";
import CountingAreaContainer from "./Components/CountingArea/Container";

const MainContainer = () => {
  const {
    loginStatus,
    handleNoticeClick,
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
      <Period>참여 기간 - 2023.04.10 ~ 2023.04.30</Period>
      <HoldPaperAirplaneImage src={holdPaperAirplane} alt="holdPaperAirplane" />
      <CountingAreaContainer
        numberOfDonations={12201}
        donationAmount={122010}
      />
      <NoticeAreaContainer onNoticeClick={handleNoticeClick} />
      <ButtonAreaContainer
        loginStatus={loginStatus}
        onDonateClick={handleDonateClick}
        onHistoryClick={handleHistoryClick}
        onJoinClick={handleJoinClick}
        onShareClick={handleShareClick}
      />
    </Container>
  );
};

export default MainContainer;
