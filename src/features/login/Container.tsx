import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginContainer = () => {
  const navigate = useNavigate();

  const handleMainClick = () => {
    navigate("/");
  };

  const handleFindAccountClick = () => {
    navigate("/findaccount");
  };

  return (
    <Container>
      로그인
      <button onClick={handleFindAccountClick}>아이디/비밀번호 찾기</button>
      <button onClick={handleMainClick}>기부 동참하러 가기</button>
    </Container>
  );
};

const Container = styled.div``;

export default LoginContainer;
