import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AirplaneColor from "../constants/airplaneColor";
import airplaneList from "../constants/airplaneList";

const useSelectAirplane = () => {
  const navigate = useNavigate();
  const [selectedAirplaneColor, setSelectedAirplaneKey] =
    useState<AirplaneColor>(AirplaneColor.GREEN);

  const selectedAirplane =
    airplaneList.find((item) => item.key === selectedAirplaneColor) ||
    airplaneList[0];

  const handleAirplaneClick = (value: AirplaneColor) => {
    setSelectedAirplaneKey(value);
  };

  const handleMainClick = () => {
    navigate("/");
  };

  const handleWriteClick = () => {
    navigate("/writedream", { state: { selectedAirplaneColor } });
  };

  return {
    handleAirplaneClick,
    handleMainClick,
    handleWriteClick,
    selectedAirplane,
  };
};

export default useSelectAirplane;
