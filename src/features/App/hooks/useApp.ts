import { useContext, useEffect } from "react";
import { useAtom } from "jotai";

import nicknameAtom from "shared/atoms/nicknameAtom";
import { ToastContext } from "shared/components/Toast/ToastProvider";
import getAutoLoginAvailable from "../apis/getAutoLoginAvailable";

const useApp = () => {
  const { showToast } = useContext(ToastContext);
  const [, setNickname] = useAtom(nicknameAtom);

  useEffect(() => {
    checkAutoLoginAvailable();
  }, []);

  const checkAutoLoginAvailable = async () => {
    const accessToken = localStorage.getItem("escalAccessToken");

    if (!accessToken) {
      return;
    }

    const { result, data, statusCode } = await getAutoLoginAvailable();

    if (statusCode === 401) {
      localStorage.removeItem("escalAccessToken");
      return;
    }

    if (!result || !data) {
      showToast(`에러가 발생했어요.
      이 메시지가 반복된다면 1688-4272 고객센터로 연락주세요.`);
      return;
    }

    if (data.nickname) {
      setNickname(data.nickname);
      return;
    } else {
      localStorage.removeItem("escalAccessToken");
      return;
    }
  };

  return {};
};

export default useApp;
