interface UseNumberCardsProps {
  number: number;
  minNumberOfDigits: number;
}

const useNumberCards = (props: UseNumberCardsProps) => {
  let zeroArray: string[] = [];

  const reversedNumberArray = Array.from(String(props.number)).reverse();

  if (props.minNumberOfDigits > reversedNumberArray.length) {
    const numberOfZero = props.minNumberOfDigits - reversedNumberArray.length;
    zeroArray = Array.from({ length: numberOfZero }, (_) => "0");
  }

  const numberArrayWithComma = [...reversedNumberArray, ...zeroArray].reduce(
    (acc, cur, index) => {
      if (index > 0 && index % 3 === 0) {
        return [cur, ",", ...acc];
      } else {
        return [cur, ...acc];
      }
    },
    [] as string[]
  );

  return {
    numberArrayWithComma,
  };
};

export default useNumberCards;
