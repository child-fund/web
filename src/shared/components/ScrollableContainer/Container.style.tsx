import styled from "styled-components";
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

export const ButtonAreaContainer = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  gap: 0.5rem;
  width: calc(100% + 4rem);
  padding: 2.4rem 2rem 2rem 2rem;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 6%,
    ${colors.white} 20%
  );
  > button {
    flex-grow: 1;
  }
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
