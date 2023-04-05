import useDonationItem from "features/donationHistory/hooks/useDonationItem";
import { Donation } from "features/donationHistory/apis/useDonationHistoryData";

import {
  DetailButton,
  CertificateButton,
  ButtonSection,
  Container,
  Date,
  Purpose,
  Quarter,
  TextSection,
} from "./Container.style";

const DonationItem = (props: { item: Donation }) => {
  const { handleDetailClick, handleCertificateClick } = useDonationItem(
    props.item
  );

  return (
    <Container>
      <TextSection>
        <div>
          <Quarter>{props.item.season}</Quarter>
          <Purpose>{props.item.donationSubject}</Purpose>
          <Date>{props.item.date}</Date>
        </div>
        <img src={props.item.imageUrl} alt="paperAirplane" />
      </TextSection>
      <ButtonSection>
        <DetailButton onClick={handleDetailClick}>내 꿈 보러가기</DetailButton>
        <CertificateButton onClick={handleCertificateClick}>
          내 후원증서 확인하기
        </CertificateButton>
      </ButtonSection>
    </Container>
  );
};

export default DonationItem;
