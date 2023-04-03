import { useContext, useEffect } from "react";
import { useAtom } from "jotai";

import participatedAtom from "shared/atoms/participatedAtom";
import { ToastContext } from "shared/components/Toast/ToastProvider";
import getParticipation from "shared/apis/getParticipation";

const useApp = () => {
  const { showToast } = useContext(ToastContext);
  const [, setParticipated] = useAtom(participatedAtom);

  useEffect(() => {
    checkParticipated();
  }, []);

  const checkParticipated = async () => {
    const { result, data } = await getParticipation();

    if (result && data) {
      setParticipated(data.isParticipate);
      return;
    }

    showToast(`에러가 발생했어요.
    이 메시지가 반복된다면 1688-4272 고객센터로 연락주세요.`);
  };

  return {};
};

export default useApp;
