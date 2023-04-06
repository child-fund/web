import { useAtom } from "jotai";

import nicknameAtom from "shared/atoms/nicknameAtom";
import useMain from "./hooks/useMain";

import ScrollableContainer from "shared/components/ScrollableContainer/Container";
import CountingSectionContainer from "./Components/CountingSection/Container";
import NoticeSectionContainer from "./Components/NoticeSection/Container";

import {
  ContentContainer,
  StyledTitle,
  StyledDescription,
  Period,
  HoldPaperAirplaneImage,
} from "./Container.style";
import holdPaperAirplane from "shared/assets/imgs/holdPaperAirplane.png";

const MainContainer = () => {
  const [nickname] = useAtom(nicknameAtom);
  const {
    handleNoticeClick,
    handleShareClick,
    handleJoinClick,
    handleHistoryClick,
    handleDonateClick,
    totalAirplaneCount,
    totalDonation,
  } = useMain();

  return (
    <ScrollableContainer
      bottomButtons={
        nickname
          ? {
              leftButtonText: "내 꿈 기부내역 보기",
              onLeftButtonClick: handleHistoryClick,
              rightButtonText: "내 꿈으로 기부하러 가기",
              onRightButtonClick: handleDonateClick,
            }
          : {
              leftButtonText: "친구랑 함께하기",
              onLeftButtonClick: handleShareClick,
              rightButtonText: "회원가입하고 동참하기",
              onRightButtonClick: handleJoinClick,
            }
      }
    >
      <ContentContainer>
        <StyledTitle
          text={`여러분의 소중한 꿈으로
        따뜻한 기부에 동참하시겠어요?`}
        />
        <StyledDescription text="꿈이 적힌 종이비행기 1개당 100원씩 에스칼프린트가 기부해요." />
        <Period>참여 기간 - 2023.04.10 ~ 2023.04.30</Period>
        <HoldPaperAirplaneImage
          src={holdPaperAirplane}
          alt="holdPaperAirplane"
        />
        <CountingSectionContainer
          numberOfDonations={totalAirplaneCount}
          donationAmount={totalDonation}
        />
        <NoticeSectionContainer onNoticeClick={handleNoticeClick} />
      </ContentContainer>
    </ScrollableContainer>
  );
};

export default MainContainer;
