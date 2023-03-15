import styled from "styled-components";

import Title from "components/Title";
import Description from "components/Description";
import colors from "assets/colors";

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

export const SubtitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% + 4rem);
  margin-left: -2rem;
  margin-bottom: 2rem;
  padding: 1.6rem 2rem;
  box-shadow: 0 0.3rem 0.6rem 0 rgba(83, 214, 138, 0.12);
`;

export const Subtitle = styled.span`
  color: #191919;
  font-size: 1.4rem;
  font-weight: 600;
`;

export const SubmitButton = styled.button`
  color: ${colors.green500};
  font-size: 1.4rem;
  font-weight: 600;
`;

export const WritingArea = styled.div`
  flex-grow: 1;
  position: relative;
`;

export const WritingText = styled.textarea`
  width: 100%;
  height: 100%;
  caret-color: #55ad1e;
  color: ${colors.gray700};
  font-size: 1.8rem;
  font-weight: 600;
  overflow-wrap: break-word;

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
