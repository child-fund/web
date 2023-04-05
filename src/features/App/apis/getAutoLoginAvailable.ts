import axios, { AxiosError } from "axios";

const getAutoLoginAvailable = async () => {
  try {
    const API_URI = process.env.REACT_APP_API_URI;
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      return { result: false };
    }

    const res = await axios.get(`${API_URI}/account`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return {
      result: true,
      data: res.data as { isLogin: boolean; nickname: string },
    };
  } catch (e) {
    const error = e as AxiosError;
    const statusCode = error.response?.status;

    return { result: false, statusCode };
  }
};

export default getAutoLoginAvailable;
