import styled from "styled-components";

import Title from "shared/components/Title/Container";
import Description from "shared/components/Description/Container";
import SubtitleBar from "shared/components/SubtitleBar/Container";

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

export const StyledSubtitleBar = styled(SubtitleBar)`
  width: calc(100% + 4rem);
  margin-left: -2rem;
  margin-bottom: 2rem;
`;

export const WritingArea = styled.div`
  flex-grow: 1;
  position: relative;
`;

export const WritingText = styled.textarea`
  overflow-x: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  width: 100%;
  height: 100%;
  caret-color: #55ad1e;
  color: ${colors.gray700};
  font-size: 1.8rem;
  font-weight: 600;
  word-break: break-all;

  ::placeholder {
    color: #c7c7c7;
  }
`;

export const LetterCounter = styled.p<{ overwritten: boolean }>`
  position: absolute;
  right: 0;
  bottom: 0;
  color: #c7c7c7;
  font-size: 1.4rem;

  > span {
    color: ${({ overwritten }) => (overwritten ? colors.red : "inherit")};
    font-size: inherit;
  }
`;
