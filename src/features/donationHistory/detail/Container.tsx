import NavigationBar from "shared/components/NavigationBar/Container";
import SubtitleBar from "shared/components/SubtitleBar/Container";

import { Container, ContentContainer, DreamText } from "./Container.style";

const DonationHistoryDetailContainer = () => {
  return (
    <Container>
      <NavigationBar title="나의 꿈 기부내역" />
      <ContentContainer>
        <SubtitleBar subtitle={"2023.04.25 나의 꿈"} />
        <DreamText>{}</DreamText>
      </ContentContainer>
    </Container>
  );
};

export default DonationHistoryDetailContainer;
