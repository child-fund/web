import styled from "styled-components";

import useMain from "./hooks/useMain";

import Button, { ButtonTheme } from "components/Button";
import Description from "components/Description";
import Title, { Align } from "components/Title";

const MainContainer = () => {
  const { handleJoinClick, handleHistoryClick, handleDonateClick } = useMain();

  return (
    <Container>
      <Title
        text={`여러분의 소중한 꿈과 소원으로
        따뜻한 기부에 동참하시겠어요?`}
        align={Align.CENTER}
      />
      <Description text="꿈이 적힌 종이비행기 1개당 100원씩 에스칼프린트가 기부해요." />
      <Button
        onClickButton={handleJoinClick}
        text={"회원가입하고 동참하기"}
        theme={ButtonTheme.DARK}
      />
      <Button
        onClickButton={handleHistoryClick}
        text={"내 꿈 기부내역 보기"}
        theme={ButtonTheme.DARK}
      />
      <Button
        onClickButton={handleDonateClick}
        text={"내 꿈으로 기부하러 가기"}
        theme={ButtonTheme.DARK}
      />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export default MainContainer;
