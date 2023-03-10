import styled from "styled-components";
import colors from "colors";

interface DescriptionProps {
  className?: string;
  text: string;
}

const Description = (props: DescriptionProps) => {
  return <Container className={props.className}>{props.text}</Container>;
};

const Container = styled.p`
  color: ${colors.gray500};
  font-size: 1.2rem;
  line-height: 1.6rem;
`;

export default Description;
