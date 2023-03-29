import axios, { AxiosError } from "axios";

interface LoginFetcherProps {
  accountId: string;
  password: string;
}

interface Data {
  accessToken: string;
  nickname: string;
}

const loginFetcher = async (props: LoginFetcherProps) => {
  try {
    const API_URI = process.env.REACT_APP_API_URI;
    const res = await axios.post(`${API_URI}/signin`, {
      headers: { "Content-Type": "application/json" },
      ...props,
    });

    return { result: true, data: res.data as Data };
  } catch (e) {
    const error = e as AxiosError;
    const statusCode = error.response?.status;

    return { result: false, statusCode };
  }
};

export default loginFetcher;
