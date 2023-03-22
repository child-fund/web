import styled from "styled-components";
import colors from "shared/assets/colors";
import { ToastTheme } from "./Container";

export const Container = styled.div<{ theme: ToastTheme }>`
  position: absolute;
  bottom: -100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  width: 90%;
  padding: 1.6rem;
  border-radius: 1rem;
  background-color: ${({ theme }) =>
    theme === ToastTheme.GRAY ? colors.gray700 : "#00b300"};
  opacity: 1;
  color: ${colors.white};
  font-size: 1.4rem;
  font-weight: bold;
  line-height: 1.8rem;
  text-align: center;
  white-space: pre-line;
  transition: bottom 0.5s, opacity 0.8s ease-in-out;
`;
