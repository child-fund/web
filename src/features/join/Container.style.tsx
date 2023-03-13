import Description from "components/Description";
import Title from "components/Title";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2rem;
  padding-top: 2.5rem;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 1.2rem;
`;

export const StyledDescription = styled(Description)`
  margin-bottom: 3.6rem;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-bottom: 2rem;
`;

export const AnnouncementArea = styled.div`
  position: absolute;
  left: 50%;
  bottom: 2rem;
  transform: translateX(-50%);
  display: flex;
`;
