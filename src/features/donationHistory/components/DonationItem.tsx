import { DummyData } from "../dummyData";
import useDonationItem from "../hooks/useDonationItem";
import {
  DetailButton,
  CertificateButton,
  ButtonSection,
  Container,
  Date,
  Purpose,
  Quarter,
  TextSection,
} from "./DonationItem.style";

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
        <DetailButton onClick={handleDetailClick}>내 꿈 보러가기</DetailButton>
        <CertificateButton onClick={handleCertificateClick}>
          내 후원증서 확인하기
        </CertificateButton>
      </ButtonSection>
    </Container>
  );
};

export default DonationItem;
