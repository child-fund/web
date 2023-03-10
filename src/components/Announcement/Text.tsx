import styled from "styled-components";

interface AnnouncementTextProps {
  className?: string;
  text: string;
}

// TODO: props 네이밍과 interface의 위치
const AnnouncementText = (props: AnnouncementTextProps) => {
  return <Container className={props.className}>{props.text}</Container>;
};

const Container = styled.p`
  display: inline;
  color: rgb(139 149 161);
  font-size: 1.2rem;
`;

export default AnnouncementText;
