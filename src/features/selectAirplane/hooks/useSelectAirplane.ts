import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AirplaneColor from "../constants/airplaneColor";
import airplaneList from "../constants/airplaneList";

const useSelectAirplane = () => {
  const navigate = useNavigate();
  const [airplaneColor, setAirplaneColor] = useState<AirplaneColor>(
    AirplaneColor.GREEN
  );

  const selectedAirplane =
    airplaneList.find((item) => item.key === airplaneColor) || airplaneList[0];

  const handleAirplaneClick = (value: AirplaneColor) => {
    setAirplaneColor(value);
  };

  const handleMainClick = () => {
    navigate("/");
  };

  const handleWriteClick = () => {
    navigate("/writedream", { state: { airplaneColor } });
  };

  return {
    handleAirplaneClick,
    handleMainClick,
    handleWriteClick,
    selectedAirplane,
  };
};

export default useSelectAirplane;
