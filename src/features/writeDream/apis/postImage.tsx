import axios, { AxiosError } from "axios";

interface PostImageProps {
  imageUrl: string;
}

const postImage = async (props: PostImageProps) => {
  try {
    const API_URI = process.env.REACT_APP_API_URI;
    const accessToken = localStorage.getItem("escalAccessToken");

    if (!accessToken) {
      return { result: false };
    }

    const file = await changeImageUrlToFile(props.imageUrl);

    if (!file) {
      return { result: false };
    }

    const res = await axios.post(
      `${API_URI}/images`,
      { file },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return { result: true, data: res.data as { imageUrl: string } };
  } catch (e) {
    const error = e as AxiosError;
    const statusCode = error.response?.status;

    return { result: false, statusCode };
  }
};

const changeImageUrlToFile = async (
  imageUrl: string
): Promise<File | undefined> => {
  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const file = new File([blob], "your-image-name.png", { type: "image/png" });
    return file;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default postImage;
