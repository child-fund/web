import { useEffect } from "react";
import NavigationBar from "shared/components/NavigationBar/Container";
import SubtitleBar from "shared/components/SubtitleBar/Container";

import { Container, ContentContainer, DreamText } from "./Container.style";
import useDonationHistoryDetail from "../hooks/useDonationHistoryDetail";

const DonationHistoryDetailContainer = () => {
  const { data } = useDonationHistoryDetail();

  if (!data) {
    return null;
  }

  return (
    <Container>
      <NavigationBar title="나의 꿈 기부내역" />
      <ContentContainer>
        <SubtitleBar subtitle={`${data.date} 나의 꿈`} />
        <DreamText>{data.text}</DreamText>
      </ContentContainer>
    </Container>
  );
};

export default DonationHistoryDetailContainer;
