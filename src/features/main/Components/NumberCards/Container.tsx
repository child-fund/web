import useNumberCards from "features/main/hooks/useNumberCards";
import { Card, Comma, Container } from "./Container.style";

interface NumberCardsProps {
  minNumberOfDigits: number;
  number: number;
  upperColor: string;
}

// TODO: CountingArea 컴포넌트 디렉토리 안으로 들어가야 할까요?
const NumberCards = (props: NumberCardsProps) => {
  const { numberArrayWithComma } = useNumberCards({
    number: props.number,
    minNumberOfDigits: props.minNumberOfDigits,
  });

  return (
    <Container>
      {numberArrayWithComma.map((value) =>
        value === "," ? (
          <Comma>,</Comma>
        ) : (
          <Card upperColor={props.upperColor}>{value}</Card>
        )
      )}
    </Container>
  );
};

export default NumberCards;
