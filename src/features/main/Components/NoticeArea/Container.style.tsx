import styled from "styled-components";
import colors from "shared/assets/colors";

export const Container = styled.ul`
  width: 100%;
  margin-bottom: 2.4rem;

  > li {
    line-height: 1.8rem;

    > span {
      font-weight: 600;
    }

    > button {
      color: ${colors.green500};
      font-weight: 600;
      text-decoration: underline;
    }
  }
`;
