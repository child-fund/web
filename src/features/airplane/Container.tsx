import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// TODO: 여기 작명을 이렇게 하는게 맞을까? "airplane"
const AirplaneContainer = () => {
  const navigate = useNavigate();

  const handleMainClick = () => {
    navigate("/");
  };

  const handleWriteClick = () => {
    navigate("/airplane/write");
    // TODO: 왜 이동을 안하지?
  };

  return (
    <Container>
      종이비행기 선택
      <button onClick={handleMainClick}>홈으로 이동하기</button>
      <button onClick={handleWriteClick}>꿈 작성하기</button>
    </Container>
  );
};

const Container = styled.div``;

export default AirplaneContainer;
