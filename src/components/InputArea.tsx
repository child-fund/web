import { ReactNode } from "react";
import styled from "styled-components";

interface InputAreaProps {
  className?: string;
  children: ReactNode;
}

const InputArea = (props: InputAreaProps) => {
  return <Container className={props.className}>{props.children}</Container>;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-bottom: 2rem;
`;

export default InputArea;
