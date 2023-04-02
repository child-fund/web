import NumberCards from "features/main/Components/CountingSection/NumberCards/Container";

import { Container, CountTitle, EscalPrintLogo } from "./Container.style";

import escalPrintLogo from "shared/assets/imgs/escalPrintLogo.png";

interface CountingAreaContainerProps {
  numberOfDonations: number;
  donationAmount: number;
}

const CountingSectionContainer = (props: CountingAreaContainerProps) => {
  return (
    <Container>
      <div>
        <CountTitle>
          {`지금까지 모인 `}
          <span>종이비행기 개수</span>
        </CountTitle>
        <NumberCards
          minNumberOfDigits={6}
          number={props.numberOfDonations}
          upperColor={"#55ad1e"}
        />
      </div>
      <div>
        <CountTitle>
          {`지금까지 모인 `}
          <span>누적 후원금</span>
        </CountTitle>
        <NumberCards
          minNumberOfDigits={7}
          number={props.donationAmount}
          upperColor={"#23b000"}
        />
      </div>
      <EscalPrintLogo src={escalPrintLogo} alt="escalPrintLogo" />
    </Container>
  );
};

export default CountingSectionContainer;
