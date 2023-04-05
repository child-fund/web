import AirplaneColor from "features/selectAirplane/constants/airplaneColor";

interface CertificateColor {
  key: AirplaneColor;
  pageBackgroundImage: string;
  borderColor: string;
  certificateBackgroundImage: string;
}

const certificateColorList: CertificateColor[] = [
  {
    key: AirplaneColor.GREEN,
    pageBackgroundImage: "linear-gradient(205deg, #38cc5f, #27e24b)",
    borderColor: "#36e017",
    certificateBackgroundImage: "linear-gradient(to bottom, #d8fee8, #b2feca)",
  },
  {
    key: AirplaneColor.BEIGE,
    pageBackgroundImage: "linear-gradient(205deg, #c8cc64, #ccc625)",
    borderColor: "#e6de07",
    certificateBackgroundImage: "linear-gradient(to bottom, #ffffe6, #fffdc4)",
  },
  {
    key: AirplaneColor.SKY,
    pageBackgroundImage: "linear-gradient(205deg, #77d6eb, #2bacc9)",
    borderColor: "#31d8ff",
    certificateBackgroundImage: "linear-gradient(to bottom, ##f1ffff, #d3fbfe)",
  },
  {
    key: AirplaneColor.PINK,
    pageBackgroundImage: "linear-gradient(205deg, #ff7eea, #ea30df)",
    borderColor: "#ff40e3",
    certificateBackgroundImage: "linear-gradient(to bottom, #fff0ff, #ffd1fb)",
  },
  {
    key: AirplaneColor.PURPLE,
    pageBackgroundImage: "linear-gradient(205deg, #cc5eed, #8d2fde)",
    borderColor: "#d546ff",
    certificateBackgroundImage: "linear-gradient(to bottom, #fdeaff, #fbd6fe)",
  },
  {
    key: AirplaneColor.YELLOWGREEN,
    pageBackgroundImage: "linear-gradient(205deg, #72d646, #25de33)",
    borderColor: "#14e324",
    certificateBackgroundImage: "linear-gradient(to bottom, #f0feda, #e2febf)",
  },
  {
    key: AirplaneColor.RED,
    pageBackgroundImage: "linear-gradient(205deg, #fc7171, #dd2f2f)",
    borderColor: "#eb2626",
    certificateBackgroundImage: "linear-gradient(to bottom, #feedea, #ffdad7)",
  },
  {
    key: AirplaneColor.ORANGE,
    pageBackgroundImage: "linear-gradient(205deg, #efad60, #e38517)",
    borderColor: "#f79726",
    certificateBackgroundImage: "linear-gradient(to bottom, #fffee4, #fff6c7)",
  },
];

export default certificateColorList;
