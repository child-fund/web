import axios, { AxiosError } from "axios";

interface GetIdByNicknameProps {
  nickname: string;
}

const getIdByNickname = async (props: GetIdByNicknameProps) => {
  try {
    const API_URI = process.env.REACT_APP_API_URI;
    const res = await axios.get(`${API_URI}/account/${props.nickname}`, {
      headers: { "Content-Type": "application/json" },
    });

    return { result: true, data: res.data as { accountId: string } };
  } catch (e) {
    const error = e as AxiosError;
    const statusCode = error.response?.status;

    return { result: false, statusCode };
  }
};

export default getIdByNickname;
