import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const JoinContainer = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleMainClick = () => {
    navigate("/");
  };

  return (
    <Container>
      회원가입
      <button onClick={handleLoginClick}>로그인</button>
      <button onClick={handleMainClick}>기부 동참하러가기</button>
    </Container>
  );
};

const Container = styled.div``;

export default JoinContainer;
