import styled from "styled-components";
import colors from "shared/assets/colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  > span {
    display: inline;
    color: ${colors.gray500};
    font-size: 1.2rem;
    white-space: pre;
  }

  > button {
    display: inline;
    color: ${colors.green500};
    font-size: 1.2rem;
    font-weight: 600;
    white-space: pre;
    text-decoration: underline;
  }
`;
