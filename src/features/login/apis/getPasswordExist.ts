import axios, { AxiosError } from "axios";

interface GetPasswordExistProps {
  password: string;
}

const getPasswordExist = async (props: GetPasswordExistProps) => {
  try {
    const API_URI = process.env.REACT_APP_API_URI;
    const res = await axios.get(
      `${API_URI}/account/password/${props.password}`,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    return { result: true, data: res.data as { isExist: boolean } };
  } catch (e) {
    const error = e as AxiosError;
    const statusCode = error.response?.status;

    return { result: false, statusCode };
  }
};

export default getPasswordExist;
