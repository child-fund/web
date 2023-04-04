import { Airplane } from "features/selectAirplane/constants/airplaneList";
import AirplaneColor from "features/selectAirplane/constants/airplaneColor";

import useAirplaneSlider from "features/selectAirplane/hooks/useAirplaneSlider";

import {
  Container,
  ScrollableList,
  Item,
  CustomScrollbar,
  CustomScrollbarThumb,
} from "./Container.style";

interface AirplaneSliderProps {
  list: Airplane[];
  onAirplaneClick: (value: AirplaneColor) => void;
  selectedAirplaneColor: AirplaneColor;
}

const AirplaneSlider = (props: AirplaneSliderProps) => {
  const { scrollableContentRef, customScrollbarThumbRef } = useAirplaneSlider();

  return (
    <Container>
      <ScrollableList ref={scrollableContentRef}>
        {props.list.map((item) => (
          <Item
            key={item.key}
            onClick={() => props.onAirplaneClick(item.key)}
            selected={item.key === props.selectedAirplaneColor}
          >
            <img src={item.image} alt={`${item.key} airplane`} />
          </Item>
        ))}
      </ScrollableList>
      <CustomScrollbar>
        <CustomScrollbarThumb ref={customScrollbarThumbRef} />
      </CustomScrollbar>
    </Container>
  );
};

export default AirplaneSlider;
