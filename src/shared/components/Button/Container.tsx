import { Container } from "./Container.style";

// TODO: 이 친구의 위치는 어디로 가는 것이 좋을까
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
