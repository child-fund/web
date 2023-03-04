import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SelectAirplaneContainer = () => {
  const navigate = useNavigate();

  const handleMainClick = () => {
    navigate("/");
  };

  const handleWriteClick = () => {
    navigate("/writedream");
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

export default SelectAirplaneContainer;
