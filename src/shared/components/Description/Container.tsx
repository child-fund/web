import { Container } from "./Container.style";

interface DescriptionProps {
  className?: string;
  text: string;
}

const Description = (props: DescriptionProps) => {
  return <Container className={props.className}>{props.text}</Container>;
};

export default Description;
