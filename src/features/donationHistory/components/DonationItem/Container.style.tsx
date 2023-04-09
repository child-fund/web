import styled from "styled-components";

import colors from "shared/assets/colors";

export const Container = styled.div`
  padding: 1.4rem 0rem 1.6rem 0rem;
  border-bottom: 0.05rem solid #ededed;
`;

export const TextSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.2rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  > img {
    width: 5rem;
    height: 5rem;
  }
`;

export const Quarter = styled.span`
  color: #767676;
  font-size: 1.2rem;
  line-height: 2.2rem;
`;

export const Purpose = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.8rem;
`;

export const Date = styled.span`
  color: #8b95a1;
  line-height: 2.2rem;
`;

export const ButtonSection = styled.div`
  display: flex;
  gap: 0.5rem;

  > button {
    flex-grow: 1;
  }
`;

export const DetailButton = styled.button`
  padding: 0.8rem;
  border-radius: 0.6rem;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  border: 0.1rem solid ${colors.green500};
  background-color: ${colors.white};
  color: ${colors.green500};
`;

export const CertificateButton = styled(DetailButton)`
  background-color: ${colors.green500};
  color: ${colors.white};
`;
