import styled from "styled-components";
import colors from "colors";

// TODO: 이것만 디렉토리가 생겼는데, 다른 컴포넌트도 형태를 맞춰야 하나

interface AnnouncementButtonProps {
  className?: string;
  text: string;
}

const AnnouncementButton = (props: AnnouncementButtonProps) => {
  return <Container className={props.className}>{props.text}</Container>;
};

const Container = styled.button`
  display: inline;
  color: ${colors.green500};
  font-size: 1.2rem;
  text-decoration: underline;
`;

export default AnnouncementButton;
