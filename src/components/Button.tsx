import styled from "styled-components";
import colors from "assets/colors";

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

const Container = styled.button<{ theme: ButtonTheme }>`
  padding: 1.4rem;
  border-radius: 1rem;
  font-size: 1.4rem;
  font-weight: bold;
  text-align: center;

  ${({ theme }) => {
    switch (theme) {
      case ButtonTheme.DARK:
        return `background-color: ${colors.green500};
         color: ${colors.white};`;
      default:
        return `background-color: ${colors.green100};
         color: ${colors.green500};`;
    }
  }}
`;

export default Button;
