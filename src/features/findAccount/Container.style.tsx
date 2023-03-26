import styled from "styled-components";

import Title from "shared/components/Title/Container";
import Description from "shared/components/Description/Container";

import colors from "shared/assets/colors";

export const ContentContainer = styled.div`
  width: 100%;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 1.2rem;
`;

export const StyledDescription = styled(Description)`
  margin-bottom: 3.6rem;
`;

export const TabArea = styled.div`
  position: relative;
`;

export const TabList = styled.div`
  display: flex;
  justify-content: space-between;

  > button {
    flex-grow: 1;
  }
`;

export const TabItem = styled.button<{ selected: boolean }>`
  padding-top: 0.9rem;
  padding-bottom: 3.3rem;
  border-radius: 1rem;
  font-size: 1.4rem;
  font-weight: bold;
  text-align: center;

  ${({ selected }) =>
    selected
      ? `background-color: ${colors.green500};
         color: ${colors.white};`
      : `background-color: ${colors.green100};
         color: ${colors.green500};`}
`;

export const TabContentsPaper = styled.div`
  position: absolute;
  top: 3.5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2.8rem 1.8rem 0rem 1.8rem;
  border-radius: 2rem;
  background-color: ${colors.white};
`;
