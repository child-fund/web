import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// TODO: 이렇게 한뎁스 들어오는게 하나여도 SubDomain을 만드는건가
const CertificateContainer = () => {
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

export default CertificateContainer;
