import colors from "shared/assets/colors";
import styled from "styled-components";

export const Container = styled.div`
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
