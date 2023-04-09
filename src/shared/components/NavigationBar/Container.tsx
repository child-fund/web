import useNavigationBar from "./hooks/useNavigationBar";

import { HomeButton, BackButton, Container, Title } from "./Container.style";
import caretLeft from "shared/assets/imgs/caretLeft.png";
import home from "shared/assets/imgs/home.png";

interface NavigationBarProps {
  className?: string;
  title: string;
}

const NavigationBar = (props: NavigationBarProps) => {
  const { handleGoBackClick, handleGoHomeClick } = useNavigationBar();

  return (
    <Container className={props.className}>
      <BackButton onClick={handleGoBackClick}>
        <img src={caretLeft} alt="caretLeft" />
      </BackButton>
      <Title>{props.title}</Title>
      <HomeButton onClick={handleGoHomeClick}>
        <img src={home} alt="home" />
      </HomeButton>
    </Container>
  );
};

export default NavigationBar;
