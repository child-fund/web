import styled from "styled-components";

export enum Align {
  CENTER = "center",
  LEFT = "left",
}

interface TitleProps {
  align: Align;
  className?: string;
  text: string;
}

const Title = (props: TitleProps) => {
  return (
    <Container align={props.align} className={props.className}>
      {props.text}
    </Container>
  );
};

const Container = styled.p<{ align: Align }>`
  font-weight: bold;
  font-size: 2.4rem;
  line-height: 3.2rem;
  white-space: pre-line;
`;

export default Title;
