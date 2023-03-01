import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// TODO: 컴포넌트 명 이렇게 하는게 맞는지
// TODO: 컨테이너 시작이 대문자?
const HomeContainer = () => {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate("/join");
  };

  const handleHistoryClick = () => {
    navigate("/history");
  };

  const handleDonateClick = () => {
    navigate("/airplane");
  };

  return (
    <Container>
      <button onClick={handleJoinClick}>회원가입하고 동참하기</button>
      <button onClick={handleHistoryClick}>내 꿈 기부내역 보기</button>
      <button onClick={handleDonateClick}>내 꿈으로 기부하러 가기</button>
    </Container>
  );
};

const Container = styled.div``;

export default HomeContainer;
