import styled from "styled-components";

import Title from "shared/components/Title/Container";
import Description from "shared/components/Description/Container";
import Announcement from "shared/components/Announcement/Container";

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

export const StyledAnnouncement = styled(Announcement)`
  position: absolute;
  left: 50%;
  bottom: 2rem;
  transform: translateX(-50%);
`;
