import NavigationBar from "shared/components/NavigationBar/Container";
import SubtitleBar from "shared/components/SubtitleBar/Container";

import { Container, ContentContainer, DreamText } from "./Container.style";
import useDonationHistoryDetail from "./hooks/useDonationHistoryDetail";

const DonationHistoryDetailContainer = () => {
  const { donationDetail } = useDonationHistoryDetail();

  return (
    <Container>
      <NavigationBar title="나의 꿈 기부내역" />
      <ContentContainer>
        {donationDetail && (
          <>
            <SubtitleBar subtitle={`${donationDetail.date} 나의 꿈`} />
            <DreamText>{donationDetail.content}</DreamText>
          </>
        )}
      </ContentContainer>
    </Container>
  );
};

export default DonationHistoryDetailContainer;
