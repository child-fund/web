import { Container, Button, Subtitle } from "./Container.style";

interface SubtitleBarProps {
  buttonText?: string;
  className?: string;
  onButtonClick?: () => void;
  subtitle: string;
}

const SubtitleBar = (props: SubtitleBarProps) => {
  return (
    <Container className={props.className}>
      <Subtitle>{props.subtitle}</Subtitle>
      {props.onButtonClick && (
        <Button onClick={props.onButtonClick}>{props.buttonText}</Button>
      )}
    </Container>
  );
};

export default SubtitleBar;
