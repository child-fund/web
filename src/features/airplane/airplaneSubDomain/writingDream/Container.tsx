import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const WritingDreamContainer = () => {
  const navigate = useNavigate();

  const handleSubmitClick = () => {
    navigate("/airplane/certificate");
  };

  return (
    <Container>
      꿈 작성하기
      <button onClick={handleSubmitClick}>저장</button>
    </Container>
  );
};

const Container = styled.div``;

export default WritingDreamContainer;
