// 한문장에 버튼이 여러개 생기는 경우 : HOC를 공부하기 좋은 예시

import { Container } from "./Container.style";

interface AnnouncementProps {
  buttonText: string;
  className?: string;
  leftText: string;
  onButtonClick: () => void;
  rightText: string;
}

const Announcement = (props: AnnouncementProps) => {
  return (
    <Container className={props.className} onClick={props.onButtonClick}>
      <span>{props.leftText}</span>
      <button>{props.buttonText}</button>
      <span>{props.rightText}</span>
    </Container>
  );
};

export default Announcement;
