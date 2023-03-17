import styled from "styled-components";

import { ButtonTheme } from "./Container";

import colors from "shared/assets/colors";

export const Container = styled.button<{ theme: ButtonTheme }>`
  padding: 1.4rem;
  border-radius: 1rem;
  font-size: 1.4rem;
  font-weight: bold;
  text-align: center;

  ${({ theme }) => {
    switch (theme) {
      case ButtonTheme.DARK:
        return `background-color: ${colors.green500};
         color: ${colors.white};`;
      default:
        return `background-color: ${colors.green100};
         color: ${colors.green500};`;
    }
  }}
`;
