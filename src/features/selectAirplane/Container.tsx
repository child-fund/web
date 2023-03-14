import useSelectAirplane from "./hooks/useSelectAirplane";

import Button, { ButtonTheme } from "components/Button";

import airplaneList from "./constants/airplaneList";

import {
  Container,
  StyledTitle,
  StyledDescription,
  AirplanePreview,
  WhiteBoard,
  BoardTitle,
  Division,
  AirplaneSlider,
  AirplaneOption,
  ButtonArea,
} from "./Container.style";

const SelectAirplaneContainer = () => {
  const {
    handleAirplaneClick,
    handleMainClick,
    handleWriteClick,
    selectedAirplane,
    selectedAirplaneKey,
  } = useSelectAirplane();

  return (
    <Container backgroundColor={selectedAirplane.containerBackground}>
      <StyledTitle text="종이비행기를 선택해주세요!" />
      <StyledDescription text="내가 선택한 종이비행기에 꿈을 적을 수 있어요 :)" />
      <AirplanePreview
        backgroundColor={selectedAirplane.previewBackground}
        borderColor={selectedAirplane.previewBorder}
      >
        <img
          src={selectedAirplane.image}
          alt={`${selectedAirplane.key} airplane`}
        />
      </AirplanePreview>
      <WhiteBoard>
        <BoardTitle>종이비행기 고르기</BoardTitle>
        <Division />
        <AirplaneSlider>
          {airplaneList.map((item) => (
            <AirplaneOption
              key={item.key}
              onClick={() => handleAirplaneClick(item.key)}
              selected={item.key === selectedAirplaneKey}
            >
              <img src={item.image} alt={`${item.key} airplane`} />
            </AirplaneOption>
          ))}
        </AirplaneSlider>
        <ButtonArea>
          <Button
            onButtonClick={handleMainClick}
            text="홈으로 이동하기"
            theme={ButtonTheme.LIGHT}
          />
          <Button
            onButtonClick={handleWriteClick}
            text="꿈 작성하기"
            theme={ButtonTheme.DARK}
          />
        </ButtonArea>
      </WhiteBoard>
    </Container>
  );
};

export default SelectAirplaneContainer;
