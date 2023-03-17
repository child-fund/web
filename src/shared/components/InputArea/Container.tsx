import { ReactNode } from "react";
import { Container } from "./Container.style";

interface InputAreaProps {
  className?: string;
  children: ReactNode;
}

// TODO: Input이라는 하나의 디렉토리 안에 ListContainer, ItemContainer 이렇게 관리하는 것이 좋을까?
const InputArea = (props: InputAreaProps) => {
  return <Container className={props.className}>{props.children}</Container>;
};

export default InputArea;
