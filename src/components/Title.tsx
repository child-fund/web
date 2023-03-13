import styled from "styled-components";

interface TitleProps {
  className?: string;
  text: string;
}

const Title = (props: TitleProps) => {
  return <Container className={props.className}>{props.text}</Container>;
};

const Container = styled.p`
  font-weight: bold;
  font-size: 2.4rem;
  line-height: 1.33;
  white-space: pre-line;
`;

export default Title;
