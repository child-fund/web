import useDonationHistory from "./hooks/useDonationHistory";

import {
  AnnouncementArea,
  Container,
  ContentContainer,
  DonationList,
  DonationTotal,
  LoadMoreButton,
  NavigationBar,
  StyledDescription,
  StyledTitle,
  Subtitle,
  SubtitleArea,
} from "./Container.style";
import AnnouncementText from "components/Announcement/Text";
import AnnouncementButton from "components/Announcement/Button";
import caretLeft from "assets/imgs/caretLeft.png";
import DonationItem from "./components/DonationItem";
import dummyData from "./dummyData";

const DonationHistoryContainer = () => {
  const { handleGoBackClick, handleLoadMoreClick, handleNoticeClick } =
    useDonationHistory();

  return (
    <Container>
      <NavigationBar>
        <button onClick={handleGoBackClick}>
          <img src={caretLeft} alt="caretLeft" />
        </button>
        <span>나의 꿈 기부내역</span>
      </NavigationBar>
      <ContentContainer>
        <StyledTitle
          text={`영원한 꿈 기부천사!
        ${"물에젖은꼬지모"}님 반가워요 :)`}
        />
        <StyledDescription text="내 “꿈”으로 만드는 “따뜻한 세상”에 동참해주셔서 감사해요!" />
        <SubtitleArea>
          <Subtitle>
            <span>{"물에젖은꼬지모"}</span>
            {`님의
            꿈 기부내역`}
          </Subtitle>
          <DonationTotal>
            <p>꿈으로 기부한 금액</p>
            <span>{`${"600"}원`}</span>
          </DonationTotal>
        </SubtitleArea>
        <DonationList>
          {dummyData.map((item, index) => (
            <DonationItem key={index} item={item} />
          ))}
        </DonationList>
        <LoadMoreButton onClick={handleLoadMoreClick}>더보기</LoadMoreButton>
      </ContentContainer>
      <AnnouncementArea>
        <AnnouncementText text="각종 공지사항은 " />
        <AnnouncementButton onButtonClick={handleNoticeClick} text="여기" />
        <AnnouncementText text="에서 확인하실 수 있어요!" />
      </AnnouncementArea>
    </Container>
  );
};

export default DonationHistoryContainer;
