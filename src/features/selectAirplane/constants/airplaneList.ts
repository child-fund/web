import AirplaneColor from "./airplaneColor";

import selectPaperAirplaneGreen from "shared/assets/imgs/selectPaperAirplaneGreen.png";
import selectPaperAirplaneBeige from "shared/assets/imgs/selectPaperAirplaneBeige.png";
import selectPaperAirplaneSky from "shared/assets/imgs/selectPaperAirplaneSky.png";
import selectPaperAirplanePink from "shared/assets/imgs/selectPaperAirplanePink.png";
import selectPaperAirplanePurple from "shared/assets/imgs/selectPaperAirplanePurple.png";
import selectPaperAirplaneYellowGreen from "shared/assets/imgs/selectPaperAirplaneYellowGreen.png";
import selectPaperAirplaneRed from "shared/assets/imgs/selectPaperAirplaneRed.png";
import selectPaperAirplaneOrange from "shared/assets/imgs/selectPaperAirplaneOrange.png";

import certificatePaperAirplaneGreen from "shared/assets/imgs/certificatePaperAirplaneGreen.png";
import certificatePaperAirplaneBeige from "shared/assets/imgs/certificatePaperAirplaneBeige.png";
import certificatePaperAirplaneSky from "shared/assets/imgs/certificatePaperAirplaneSky.png";
import certificatePaperAirplanePink from "shared/assets/imgs/certificatePaperAirplanePink.png";
import certificatePaperAirplanePurple from "shared/assets/imgs/certificatePaperAirplanePurple.png";
import certificatePaperAirplaneYellowGreen from "shared/assets/imgs/certificatePaperAirplaneYellowGreen.png";
import certificatePaperAirplaneRed from "shared/assets/imgs/certificatePaperAirplaneRed.png";
import certificatePaperAirplaneOrange from "shared/assets/imgs/certificatePaperAirplaneOrange.png";

export interface Airplane {
  key: AirplaneColor;
  containerBackground: string;
  previewBorder: string;
  image: string;
  certificate: string;
}

const airplaneList: Airplane[] = [
  {
    key: AirplaneColor.GREEN,
    containerBackground: `linear-gradient(to bottom, #fff 21%, #64cc7f 90%, #2caf45)`,
    previewBorder: `linear-gradient(225deg, #58d78d 99%, #41d359 53%, #62b14f 2%)`,
    image: selectPaperAirplaneGreen,
    certificate: certificatePaperAirplaneGreen,
  },
  {
    key: AirplaneColor.BEIGE,
    containerBackground: `linear-gradient(to bottom, #fff 21%, #c8cc64 90%, #ccc625)`,
    previewBorder: `linear-gradient(225deg, #cbd05d 99%, #e5e054 53%, #ccc625 2%)`,
    image: selectPaperAirplaneBeige,
    certificate: certificatePaperAirplaneBeige,
  },
  {
    key: AirplaneColor.SKY,
    containerBackground: `linear-gradient(to bottom, #fff 21%, #8ddbed 90%, #2bacc9)`,
    previewBorder: `linear-gradient(225deg, #6dd0e6 99%, #62c6dd 53%, #2bacc9 2%)`,
    image: selectPaperAirplaneSky,
    certificate: certificatePaperAirplaneSky,
  },
  {
    key: AirplaneColor.PINK,
    containerBackground: `linear-gradient(to bottom, #fff 21%, #ffaaf1 90%, #db5dd4)`,
    previewBorder: `linear-gradient(225deg, #f47ee0 99%, #ff88f8 53%, #db5dd4 2%);`,
    image: selectPaperAirplanePink,
    certificate: certificatePaperAirplanePink,
  },
  {
    key: AirplaneColor.PURPLE,
    containerBackground: `linear-gradient(to bottom, #fff 21%, #d78ded 90%, #802bc9)`,
    previewBorder: `linear-gradient(225deg, #b467dd 99%, #b762dd 53%, #742bc9 2%)`,
    image: selectPaperAirplanePurple,
    certificate: certificatePaperAirplanePurple,
  },
  {
    key: AirplaneColor.YELLOWGREEN,
    containerBackground: `linear-gradient(to bottom, #fff 21%, #a0ffa7 90%, #36e544)`,
    previewBorder: `linear-gradient(225deg, #77ef81 99%, #78fa82 53%, #68cb44 2%)`,
    image: selectPaperAirplaneYellowGreen,
    certificate: certificatePaperAirplaneYellowGreen,
  },
  {
    key: AirplaneColor.RED,
    containerBackground: `linear-gradient(to bottom, #fff 21%, #ed8d8d 90%, #c92b2b)`,
    previewBorder: `linear-gradient(225deg, #e56b6b 99%, #dd6262 53%, #c92b2b 2%)`,
    image: selectPaperAirplaneRed,
    certificate: certificatePaperAirplaneRed,
  },
  {
    key: AirplaneColor.ORANGE,
    containerBackground: `linear-gradient(to bottom, #fff 21%, #ffd8aa 90%, #db9c5d)`,
    previewBorder: `linear-gradient(225deg, #eacc6a 99%, #eabb54 53%, #dbaf5d 2%)`,
    image: selectPaperAirplaneOrange,
    certificate: certificatePaperAirplaneOrange,
  },
];

export default airplaneList;
