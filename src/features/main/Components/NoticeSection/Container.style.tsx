import styled from "styled-components";
import colors from "shared/assets/colors";

export const Container = styled.ul`
  width: 100%;

  > li {
    color: ${colors.gray500};
    font-size: 1rem;
    line-height: 1.8rem;

    > span {
      color: ${colors.gray800};
      font-size: 1rem;
      font-weight: 600;
    }

    > button {
      font-size: 1rem;
      color: ${colors.green500};
      font-weight: 600;
      text-decoration: underline;
    }
  }
`;
