import { useAtom } from "jotai";

import nicknameAtom from "shared/atoms/nicknameAtom";
import useDonationCertificate from "./hooks/useDonationCertificate";

import Button, { ButtonTheme } from "shared/components/Button/Container";

import {
  Container,
  ContentContainer,
  ShareButton,
  Title,
  Description,
  CertificateArea,
  AirplaneImage,
  Phrase,
  CorporationLogos,
  Signature,
  ButtonContainer,
  ButtonArea,
  BackToMainButton,
} from "./Container.style";
import escalPrintSeal from "shared/assets/imgs/escalPrintSeal.png";
import escalPrintLogo from "shared/assets/imgs/escalPrintLogo.png";
import childFundLogo from "shared/assets/imgs/childFundLogo.png";

const DonationCertificateContainer = () => {
  const [nickname] = useAtom(nicknameAtom);
  const {
    airplaneImage,
    certificateAreaRef,
    handleBackToMainClick,
    handleSaveImageClick,
    handleHistoryClick,
    handleShareClick,
  } = useDonationCertificate();

  return (
    <Container>
      <ContentContainer>
        <ShareButton onClick={handleShareClick}>공유하기</ShareButton>
        <CertificateArea ref={certificateAreaRef}>
          <Title>
            {nickname.length > 0
              ? `${nickname}님! 기부에 동참해주셔서 감사해요 :)`
              : `기부에 동참해주셔서 감사해요 :)`}
          </Title>
          <Description>{`꿈이 이루어질 수 있도록 에스칼프린트가 함께할게요!
        저소득층 기부에 함께 동참해주셔서 너무 고마워요!`}</Description>
          <AirplaneImage src={airplaneImage} alt="PaperAirplane" />
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
      </ContentContainer>
      <ButtonContainer>
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
      </ButtonContainer>
    </Container>
  );
};

export default DonationCertificateContainer;
