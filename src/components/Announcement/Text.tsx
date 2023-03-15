import styled from "styled-components";
import colors from "assets/colors";

interface AnnouncementTextProps {
  className?: string;
  text: string;
}

// TODO: props 네이밍과 interface의 위치
// TODO: 파일 길이가 짧은 것은 보통 어떻게 하는지 궁금
const AnnouncementText = (props: AnnouncementTextProps) => {
  return <Container className={props.className}>{props.text}</Container>;
};

const Container = styled.p`
  display: inline;
  color: ${colors.gray500};
  font-size: 1.2rem;
  white-space: pre;
`;

export default AnnouncementText;
