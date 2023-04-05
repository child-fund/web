import AirplaneKey from "../types/airplaneKey";

import paperAirplaneGreen from "shared/assets/imgs/paperAirplaneGreen.png";
import paperAirplaneBeige from "shared/assets/imgs/paperAirplaneBeige.png";
import paperAirplaneSky from "shared/assets/imgs/paperAirplaneSky.png";
import paperAirplanePink from "shared/assets/imgs/paperAirplanePink.png";
import paperAirplanePurple from "shared/assets/imgs/paperAirplanePurple.png";
import paperAirplaneYellowGreen from "shared/assets/imgs/paperAirplaneYellowGreen.png";
import paperAirplaneRed from "shared/assets/imgs/paperAirplaneRed.png";
import paperAirplaneOrange from "shared/assets/imgs/paperAirplaneOrange.png";

export interface Airplane {
  key: AirplaneKey;
  containerBackground: string;
  previewBorder: string;
  image: string;
}

const airplaneList: Airplane[] = [
  {
    key: "green",
    containerBackground: `linear-gradient(to bottom, #fff 21%, #64cc7f 90%, #2caf45)`,
    previewBorder: `linear-gradient(225deg, #58d78d 99%, #41d359 53%, #62b14f 2%)`,
    image: paperAirplaneGreen,
  },
  {
    key: "beige",
    containerBackground: `linear-gradient(to bottom, #fff 21%, #c8cc64 90%, #ccc625)`,
    previewBorder: `linear-gradient(225deg, #cbd05d 99%, #e5e054 53%, #ccc625 2%)`,
    image: paperAirplaneBeige,
  },
  {
    key: "sky",
    containerBackground: `linear-gradient(to bottom, #fff 21%, #8ddbed 90%, #2bacc9)`,
    previewBorder: `linear-gradient(225deg, #6dd0e6 99%, #62c6dd 53%, #2bacc9 2%)`,
    image: paperAirplaneSky,
  },
  {
    key: "pink",
    containerBackground: `linear-gradient(to bottom, #fff 21%, #ffaaf1 90%, #db5dd4)`,
    previewBorder: `linear-gradient(225deg, #f47ee0 99%, #ff88f8 53%, #db5dd4 2%);`,
    image: paperAirplanePink,
  },
  {
    key: "purple",
    containerBackground: `linear-gradient(to bottom, #fff 21%, #d78ded 90%, #802bc9)`,
    previewBorder: `linear-gradient(225deg, #b467dd 99%, #b762dd 53%, #742bc9 2%)`,
    image: paperAirplanePurple,
  },
  {
    key: "yellowGreen",
    containerBackground: `linear-gradient(to bottom, #fff 21%, #a0ffa7 90%, #36e544)`,
    previewBorder: `linear-gradient(225deg, #77ef81 99%, #78fa82 53%, #68cb44 2%)`,
    image: paperAirplaneYellowGreen,
  },
  {
    key: "red",
    containerBackground: `linear-gradient(to bottom, #fff 21%, #ed8d8d 90%, #c92b2b)`,
    previewBorder: `linear-gradient(225deg, #e56b6b 99%, #dd6262 53%, #c92b2b 2%)`,
    image: paperAirplaneRed,
  },
  {
    key: "orange",
    containerBackground: `linear-gradient(to bottom, #fff 21%, #ffd8aa 90%, #db9c5d)`,
    previewBorder: `linear-gradient(225deg, #eacc6a 99%, #eabb54 53%, #dbaf5d 2%)`,
    image: paperAirplaneOrange,
  },
];

export default airplaneList;
