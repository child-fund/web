import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const DonationCertificateContainer = () => {
  const navigate = useNavigate();

  const handleHistoryClick = () => {
    navigate("/history");
  };

  return (
    <Container>
      인증서
      <button onClick={handleHistoryClick}>내 꿈 기부내역 보러가기</button>
    </Container>
  );
};

const Container = styled.div``;

export default DonationCertificateContainer;
