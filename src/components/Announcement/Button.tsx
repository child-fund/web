import styled from "styled-components";
import colors from "assets/colors";

// TODO: 이것만 디렉토리가 생겼는데, 다른 컴포넌트도 형태를 맞춰야 하나

interface AnnouncementButtonProps {
  className?: string;
  onButtonClick: () => void;
  text: string;
}

const AnnouncementButton = (props: AnnouncementButtonProps) => {
  return (
    <Container className={props.className} onClick={props.onButtonClick}>
      {props.text}
    </Container>
  );
};

const Container = styled.button`
  display: inline;
  color: ${colors.green500};
  font-size: 1.2rem;
  white-space: pre;
  text-decoration: underline;
`;

export default AnnouncementButton;
