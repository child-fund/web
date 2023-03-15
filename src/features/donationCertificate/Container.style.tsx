import colors from "assets/colors";
import styled from "styled-components";

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
  background-image: linear-gradient(205deg, #38cc5f, #27e24b);
`;

export const ShareButton = styled.button`
  align-self: flex-end;
  margin-bottom: 5rem;
  color: ${colors.white};
  font-size: 1.6rem;
  font-weight: bold;
`;

export const CertificateArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15rem;
  padding: 3.6rem 3.4rem 1.6rem 3.4rem;
  border: 0.2rem solid #36e017;
  border-radius: 2rem;
  background-image: linear-gradient(to bottom, #d8fee8, #b2feca); ;
`;

export const Title = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  line-height: 2.8rem;
  white-space: pre-line;
`;

export const Description = styled.p`
  margin-bottom: 1.6rem;
  color: ${colors.gray500};
  font-size: 1.2rem;
  text-align: center;
  line-height: 1.5rem;
  white-space: pre-line;
`;

export const AirplaneImage = styled.img`
  width: 16rem;
  margin-bottom: 1.6rem;
`;

export const Phrase = styled.p`
  margin-bottom: 0.8rem;
  color: ${colors.gray500};
`;

export const Signature = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 3.4rem;
  margin-bottom: 3rem;

  > span {
    font-size: 1.4rem;
    font-weight: 600;
  }

  > img {
    position: absolute;
    right: -2rem;
    width: 3.4rem;
  }
`;

export const CorporationLogos = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.8rem;

  > img {
    width: 5rem;
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  margin-bottom: 1.4rem;

  > button {
    flex-grow: 1;
  }
`;

export const BackToMainButton = styled.button`
  color: ${colors.white};
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: underline;
`;
