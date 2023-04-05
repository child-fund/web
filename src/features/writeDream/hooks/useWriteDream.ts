import { ChangeEvent, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ToastContext } from "shared/components/Toast/ToastProvider";
import postAirplane from "../apis/postAirplane";
import postImage from "../apis/postImage";
import AirplaneColor from "features/selectAirplane/constants/airplaneColor";

import airplaneList from "features/selectAirplane/constants/airplaneList";

const useWriteDream = () => {
  const location = useLocation();
  const state = location.state as { airplaneColor: AirplaneColor } | undefined;

  const navigate = useNavigate();
  const { showToast } = useContext(ToastContext);
  const [dream, setDream] = useState("");

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDream(e.target.value);
  };

  const handleSubmitClick = async () => {
    if (!state) {
      return;
    }

    if (dream.length === 0) {
      showToast(`이루고 싶은 꿈이나 소원을 적어주세요!
      작성 완료 후에 다음 단계로 넘어갈 수 있어요 :)`);
      return;
    }

    if (dream.length > 300) {
      showToast(`내용이 너무 길어요
      조금만 줄여서 작성해주세요 :)`);
      return;
    }

    const airplaneColor = state?.airplaneColor || AirplaneColor.GREEN;

    const imageUrl = await getImageUrl(airplaneColor);

    if (!imageUrl) {
      showToast(`이용량 급증으로 인해 기부하기가 지연되고 있어요.
      이 메시지가 반복된다면 1688-4272 고객센터로 연락주세요.`);
      return;
    }

    const { result } = await postAirplane({
      // airplaneColor,
      imageUrl,
      content: dream,
    });

    if (result) {
      navigate("/certificate", {
        state: {
          airplaneColor,
          airplaneImage: imageUrl,
        },
      });
    } else {
      showToast(`이용량 급증으로 인해 기부하기가 지연되고 있어요.
      이 메시지가 반복된다면 1688-4272 고객센터로 연락주세요.`);
    }
  };

  const getImageUrl = async (airplaneColor: AirplaneColor) => {
    const airplaneImage =
      airplaneList.find((airplane) => airplane.key === airplaneColor)
        ?.certificate || airplaneList[0].certificate;

    const { result, data } = await postImage({ imageUrl: airplaneImage });

    if (result && data?.imageUrl) {
      return data.imageUrl;
    } else {
      return undefined;
    }
  };

  return { dream, handleTextChange, handleSubmitClick };
};

export default useWriteDream;
