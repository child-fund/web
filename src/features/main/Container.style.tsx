import styled from "styled-components";

import Description from "components/Description";
import Title from "components/Title";

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
  align-items: center;
  height: 100%;
  padding: 2rem;
  padding-top: 2.5rem;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 1.2rem;
  text-align: center;
`;

export const StyledDescription = styled(Description)`
  margin-bottom: 1.4rem;
`;

export const Period = styled.div`
  margin-bottom: 2.6rem;
  padding: 0.3rem 0.6rem;
  border-radius: 0.2rem;
  background-color: #f3faf0;
  color: #55ad1e;
  font-size: 1.2rem;
  line-height: 1.33;
`;

export const HoldPaperAirplaneImage = styled.img`
  width: 18rem;
  margin-bottom: 3rem;
`;

export const CountingArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
  padding-top: 2.6rem;
  padding-bottom: 0.8rem;
  background-color: #fcfdfd;
`;

export const CountTitle = styled.p`
  margin-bottom: 1rem;
  color: ${colors.gray800};
  font-size: 1.2rem;

  > span {
    color: inherit;
    font-size: inherit;
    font-weight: bold;
  }
`;

export const FlippingArea1 = styled.div`
  width: 10rem;
  height: 5rem;
  margin-bottom: 3rem;
  background-color: #55ad1e;
`;

export const FlippingArea2 = styled(FlippingArea1)`
  margin-bottom: 2.4rem;
`;

export const EscalPrintLogo = styled.img`
  width: 5.5rem;
`;

export const NoticeArea = styled.ul`
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

export const ButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;

  > button {
    flex-grow: 1;
  }
`;
