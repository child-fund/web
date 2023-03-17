import { Container } from "./Container.style";

interface TitleProps {
  className?: string;
  text: string;
}

const Title = (props: TitleProps) => {
  return <Container className={props.className}>{props.text}</Container>;
};

export default Title;
