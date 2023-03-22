import styled from "styled-components";

import Title from "shared/components/Title/Container";
import Description from "shared/components/Description/Container";

import colors from "shared/assets/colors";

export const Container = styled.div`
  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 2.5rem 2rem 0rem 2rem;
`;

export const ContentAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 1.2rem;
`;

export const StyledDescription = styled(Description)`
  margin-bottom: 3.6rem;
`;

export const AnnouncementAreaContainer = styled.div`
  position: sticky;
  bottom: 0rem;
  width: calc(100% + 4rem);
  padding: 2.4rem 0rem 2rem 0rem;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 9.5%,
    ${colors.white} 25%
  );

  > div {
    flex-grow: 1;
  }
`;
