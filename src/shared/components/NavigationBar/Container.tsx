import useNavigationBar from "./hooks/useNavigationBar";

import { BackButton, Container, Title } from "./Container.style";
import caretLeft from "shared/assets/imgs/caretLeft.png";

interface NavigationBarProps {
  title: string;
}

const NavigationBar = (props: NavigationBarProps) => {
  const { handleGoBackClick } = useNavigationBar();

  return (
    <Container>
      <BackButton onClick={handleGoBackClick}>
        <img src={caretLeft} alt="caretLeft" />
      </BackButton>
      <Title>{props.title}</Title>
    </Container>
  );
};

export default NavigationBar;
