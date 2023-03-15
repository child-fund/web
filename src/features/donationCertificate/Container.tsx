import useDonationCertificate from "./hooks/useDonationCertificate";

import Button, { ButtonTheme } from "components/Button";

import {
  AirplaneImage,
  BackToMainButton,
  ButtonArea,
  CertificateArea,
  Container,
  CorporationLogos,
  Description,
  Phrase,
  ShareButton,
  Signature,
  Title,
} from "./Container.style";
import escalPrintSeal from "assets/imgs/escalPrintSeal.png";
import escalPrintLogo from "assets/imgs/escalPrintLogo.svg";
import childFundLogo from "assets/imgs/childFundLogo.png";
import paperAirplaneGreen from "assets/imgs/paperAirplaneGreen.png";

const DonationCertificateContainer = () => {
  const {
    handleBackToMainClick,
    handleSaveImageClick,
    handleHistoryClick,
    handleShareClick,
    nickname,
  } = useDonationCertificate();

  return (
    <Container>
      <ShareButton onClick={handleShareClick}>공유하기</ShareButton>
      <CertificateArea>
        <Title>{`${nickname}님!
        기부에 동참해주셔서 감사해요 :)`}</Title>
        <Description>{`꿈이 이루어질 수 있도록 에스칼프린트가 함께할게요!
        저소득층 기부에 함께 동참해주셔서 너무 고마워요!`}</Description>
        <AirplaneImage src={paperAirplaneGreen} alt="paperAirplaneGreen" />
        <Phrase>위 자는 저소득층 기부에 동참하였음을 인증합니다.</Phrase>
        <Signature>
          <span>에스칼디렉션 대표인</span>
          <img src={escalPrintSeal} alt="escalPrintSeal" />
        </Signature>
        <CorporationLogos>
          <img src={escalPrintLogo} alt="escalPrintLogo" />
          <img src={childFundLogo} alt="childFundLogo" />
        </CorporationLogos>
      </CertificateArea>
      <ButtonArea>
        <Button
          onButtonClick={handleSaveImageClick}
          text="이미지 저장"
          theme={ButtonTheme.LIGHT}
        />
        <Button
          onButtonClick={handleHistoryClick}
          text="내 꿈 기부내역 보러가기"
          theme={ButtonTheme.DARK}
        />
      </ButtonArea>
      <BackToMainButton onClick={handleBackToMainClick}>
        홈으로 이동하기
      </BackToMainButton>
    </Container>
  );
};

export default DonationCertificateContainer;
