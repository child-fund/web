import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HistoryDetailContainer = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <Container>
      기부상세
      <button onClick={handleBackClick}>확인완료</button>
    </Container>
  );
};

const Container = styled.div``;

export default HistoryDetailContainer;
