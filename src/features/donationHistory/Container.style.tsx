import styled from "styled-components";

import Title from "shared/components/Title/Container";
import Description from "shared/components/Description/Container";
import Announcement from "shared/components/Announcement/Container";

import colors from "shared/assets/colors";

export const Container = styled.div`
  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  height: 100%;
`;

export const ContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 1.2rem;
`;

export const StyledDescription = styled(Description)`
  margin-bottom: 2.7rem;
`;

export const SubtitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const Subtitle = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 2.2rem;
  white-space: pre-line;

  > span {
    color: ${colors.green500};
    font-size: inherit;
    font-weight: inherit;
  }
`;

export const DonationTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;

  > p {
    color: ${colors.green500};
    font-size: 1.2rem;
    line-height: 1.6rem;
  }

  > span {
    font-size: 2.2rem;
    font-weight: 600;
    line-height: 1.6rem;
  }
`;

export const DonationList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.4rem;

  > div:first-of-type {
    border-top: 0.05rem solid #ededed;
  }
`;

export const LoadMoreButton = styled.button`
  padding: 1rem;
  border-radius: 0.6rem;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  background-color: ${colors.green500};
  color: ${colors.white};
`;

export const StyledAnnouncement = styled(Announcement)`
  position: absolute;
  left: 50%;
  bottom: 2rem;
  transform: translateX(-50%);
`;
