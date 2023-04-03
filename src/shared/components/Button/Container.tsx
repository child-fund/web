import { Container } from "./Container.style";

export enum ButtonTheme {
  DARK = "dark",
  LIGHT = "light",
  WHITE = "white",
}

interface ButtonProps {
  className?: string;
  onButtonClick: () => void;
  text: string;
  theme: ButtonTheme;
}

const Button = (props: ButtonProps) => {
  return (
    <Container
      className={props.className}
      onClick={props.onButtonClick}
      theme={props.theme}
    >
      {props.text}
    </Container>
  );
};

export default Button;
