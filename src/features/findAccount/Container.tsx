import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FindAccountContainer = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleJoinClick = () => {
    navigate("/join");
  };

  return (
    <Container>
      아이디/비밀번호 찾기
      <button onClick={handleLoginClick}>로그인하러 가기</button>
      <button onClick={handleJoinClick}>회원가입하러 가기</button>
    </Container>
  );
};

const Container = styled.div``;

export default FindAccountContainer;
