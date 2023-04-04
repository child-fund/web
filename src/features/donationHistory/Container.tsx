import { useAtom } from "jotai";

import useDonationHistory from "./hooks/useDonationHistory";
import nicknameAtom from "shared/atoms/nicknameAtom";

import DonationItem from "features/donationHistory/components/DonationItem/Container";
import Announcement from "shared/components/Announcement/Container";

import {
  AnnouncementContainer,
  Container,
  ContentContainer,
  DonationList,
  DonationTotal,
  LoadMoreButton,
  StyledDescription,
  StyledNavigationBar,
  StyledTitle,
  Subtitle,
  SubtitleArea,
} from "./Container.style";
import dummyData from "./dummyData";

const DonationHistoryContainer = () => {
  const [nickname] = useAtom(nicknameAtom);
  const { handleLoadMoreClick, handleNoticeClick } = useDonationHistory();

  return (
    <Container>
      <ContentContainer>
        <StyledNavigationBar title="나의 꿈 기부내역" />
        <StyledTitle
          text={
            nickname.length > 0
              ? `영원한 꿈 기부천사!
        ${nickname}님 반가워요 :)`
              : `영원한 꿈 기부천사!
        반가워요 :)`
          }
        />
        <StyledDescription text="내 “꿈”으로 만드는 “따뜻한 세상”에 동참해주셔서 감사해요!" />
        <SubtitleArea>
          <Subtitle>
            <span>{nickname}</span>
            {nickname.length > 0
              ? `님의
            꿈 기부내역`
              : `꿈 기부내역`}
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
      <AnnouncementContainer>
        <Announcement
          buttonText="여기"
          leftText="각종 공지사항은 "
          onButtonClick={handleNoticeClick}
          rightText="에서 확인하실 수 있어요!"
        />
      </AnnouncementContainer>
    </Container>
  );
};

export default DonationHistoryContainer;
