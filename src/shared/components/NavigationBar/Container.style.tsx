import styled from "styled-components";

import colors from "shared/assets/colors";

export const Container = styled.div`
  position: sticky; //TODO: 스크롤 생겼을때 동작확인 필요
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: ${colors.white};
`;

export const Title = styled.span`
  color: #454545;
  font-size: 1.4rem;
  font-weight: 600;
`;

export const BackButton = styled.button`
  position: absolute;
  left: 0rem;
  padding: 1rem 2rem;
  line-height: 0;

  > img {
    width: 1.6rem;
  }
`;

export const HomeButton = styled.button`
  position: absolute;
  right: 0rem;
  padding: 1rem 2rem;
  line-height: 0;

  > img {
    width: 2.4rem;
  }
`;
