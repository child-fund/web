import styled from "styled-components";

export enum ButtonTheme {
  DARK = "dark",
  LIGHT = "light",
}

interface ButtonProps {
  className?: string;
  onClickButton: () => void;
  text: string;
  theme: ButtonTheme;
}

const Button = (props: ButtonProps) => {
  return (
    <Container
      className={props.className}
      onClick={props.onClickButton}
      theme={props.theme}
    >
      {props.text}
    </Container>
  );
};

const Container = styled.button<{ theme: ButtonTheme }>`
  padding: 1.4rem;
  border-radius: 1rem;
  font-size: 1.2rem;

  ${({ theme }) =>
    theme === ButtonTheme.DARK
      ? `background-color: rgb(23 204 16);
         color: rgb(255 255 255);`
      : `background-color: rgb(247 253 242);
         color: rgb(23 204 16);`}
`;

export default Button;
