import useSelectAirplane from "./hooks/useSelectAirplane";

import airplaneList from "./constants/airplaneList";

import Title from "shared/components/Title/Container";
import Description from "shared/components/Description/Container";
import AirplaneSlider from "./components/AirplaneSlider/Container";
import Button, { ButtonTheme } from "shared/components/Button/Container";

import {
  AirplanePreview,
  ButtonContainer,
  BoardTitle,
  Container,
  ContentContainer,
  Division,
  TitleArea,
  WhiteBoard,
} from "./Container.style";

const SelectAirplaneContainer = () => {
  const {
    handleAirplaneClick,
    handleMainClick,
    handleWriteClick,
    selectedAirplane,
  } = useSelectAirplane();

  return (
    <Container>
      <ContentContainer backgroundColor={selectedAirplane.containerBackground}>
        <TitleArea>
          <Title text="종이비행기를 선택해주세요!" />
          <Description text="내가 선택한 종이비행기에 꿈을 적을 수 있어요 :)" />
        </TitleArea>
        <AirplanePreview borderColor={selectedAirplane.previewBorder}>
          <img
            src={selectedAirplane.image}
            alt={`${selectedAirplane.key} airplane`}
          />
        </AirplanePreview>
        <WhiteBoard>
          <BoardTitle>종이비행기 고르기</BoardTitle>
          <Division />
          <AirplaneSlider
            list={airplaneList}
            onAirplaneClick={handleAirplaneClick}
            airplaneColor={selectedAirplane.key}
          />
        </WhiteBoard>
      </ContentContainer>
      <ButtonContainer>
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
      </ButtonContainer>
    </Container>
  );
};

export default SelectAirplaneContainer;
