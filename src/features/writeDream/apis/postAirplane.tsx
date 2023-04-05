import axios, { AxiosError } from "axios";
import AirplaneColor from "features/selectAirplane/constants/airplaneColor";

interface PostAirplaneProps {
  imageUrl: string;
  content: string;
  color: AirplaneColor;
}

const postAirplane = async (props: PostAirplaneProps) => {
  try {
    const API_URI = process.env.REACT_APP_API_URI;
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      return { result: false };
    }

    await axios.post(
      `${API_URI}/airplane`,
      { ...props },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return { result: true };
  } catch (e) {
    const error = e as AxiosError;
    const statusCode = error.response?.status;

    return { result: false, statusCode };
  }
};

export default postAirplane;
