import { ReactNode } from "react";
import { Container } from "./Container.style";

interface InputAreaProps {
  className?: string;
  children: ReactNode;
}

const InputArea = (props: InputAreaProps) => {
  return <Container className={props.className}>{props.children}</Container>;
};

export default InputArea;
