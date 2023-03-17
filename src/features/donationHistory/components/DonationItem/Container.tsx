import { DummyData } from "features/donationHistory/dummyData";
import useDonationItem from "features/donationHistory/hooks/useDonationItem";
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

const DonationItem = (props: { item: DummyData }) => {
  const { handleDetailClick, handleCertificateClick } = useDonationItem();

  return (
    <Container>
      <TextSection>
        <div>
          <Quarter>{props.item.quarter}</Quarter>
          <Purpose>{props.item.purpose}</Purpose>
          <Date>{props.item.date}</Date>
        </div>
        <img src={props.item.image} alt="paperAirplane" />
      </TextSection>
      <ButtonSection>
        <DetailButton onClick={() => handleDetailClick(props.item)}>
          내 꿈 보러가기
        </DetailButton>
        <CertificateButton onClick={handleCertificateClick}>
          내 후원증서 확인하기
        </CertificateButton>
      </ButtonSection>
    </Container>
  );
};

export default DonationItem;
