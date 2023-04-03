import axios, { AxiosError } from "axios";

interface PostSignUpProps {
  nickname: string;
  accountId: string;
  password: string;
}

const postSignUp = async (props: PostSignUpProps) => {
  try {
    const API_URI = process.env.REACT_APP_API_URI;
    await axios.post(`${API_URI}/signup`, {
      headers: { "Content-Type": "application/json" },
      ...props,
    });

    return { result: true };
  } catch (e) {
    const error = e as AxiosError;
    const statusCode = error.response?.status;

    return { result: false, statusCode };
  }
};

export default postSignUp;
