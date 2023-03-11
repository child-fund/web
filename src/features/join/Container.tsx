import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import AnnouncementButton from "components/Announcement/Button";
import AnnouncementText from "components/Announcement/Text";
import Input from "components/Input";

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
      <Input
        placeholder="닉네임을 하나 만들어볼까요?"
        title="닉네임"
        wrongInput={false}
        warningMessage="warning"
      />
      <AnnouncementButton text="여기" />
      <AnnouncementText text="확인" />
      회원가입
      <button onClick={handleLoginClick}>로그인</button>
      <button onClick={handleMainClick}>기부 동참하러가기</button>
    </Container>
  );
};

const Container = styled.div``;

export default JoinContainer;
