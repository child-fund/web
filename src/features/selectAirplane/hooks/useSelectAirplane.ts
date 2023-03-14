import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AirplaneKey from "../constants/AirplaneKey";
import airplaneList from "../constants/airplaneList";

const useSelectAirplane = () => {
  const navigate = useNavigate();
  const [selectedAirplaneKey, setSelectedAirplaneKey] =
    useState<AirplaneKey>("green");

  const selectedAirplane =
    airplaneList.find((item) => item.key === selectedAirplaneKey) ||
    airplaneList[0];

  const handleAirplaneClick = (value: AirplaneKey) => {
    setSelectedAirplaneKey(value);
  };

  const handleMainClick = () => {
    navigate("/");
  };

  const handleWriteClick = () => {
    navigate("/writedream");
  };
  return {
    handleAirplaneClick,
    handleMainClick,
    handleWriteClick,
    selectedAirplane,
    selectedAirplaneKey,
  };
};

export default useSelectAirplane;
