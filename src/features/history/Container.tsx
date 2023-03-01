import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const id = 123;

const HistoryContainer = () => {
  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate(`/history/${id}`);
  };

  return (
    <Container>
      기부내역
      <button onClick={handleDetailClick}>내 꿈 보러가기</button>
    </Container>
  );
};

const Container = styled.div``;

export default HistoryContainer;
