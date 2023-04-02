import { ChangeEvent, useContext, useState } from "react";

import getIsAccountIdDuplicate from "shared/apis/getIsAccountIdDuplicate";
import { ToastContext } from "shared/components/Toast/ToastProvider";
import useDebouncedCallback from "shared/utils/useDebouncedCallback";

const useAccountIdInput = () => {
  const { showToast } = useContext(ToastContext);
  const [accountId, setAccountId] = useState("");
  const [accountIdWarningMessage, setAccountIdWarningMessage] = useState("");

  const handleAccountIdChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setAccountId(inputValue);

    debouncedCheckDuplication(inputValue);
  };

  const checkIsDuplicate = async (inputValue: string) => {
    const { result, data } = await getIsAccountIdDuplicate({
      accountId: inputValue,
    });

    if (!result || !data) {
      showToast(`이용량 급증으로 인해 아이디 확인이 지연되고 있어요.
      이 메시지가 반복된다면 1688-4272 고객센터로 연락주세요.`);
      return;
    }

    if (data.isDuplicate) {
      setAccountIdWarningMessage("");
    } else {
      setAccountIdWarningMessage("이 아이디가 아닌거 같아요 :(");
    }
  };

  const debouncedCheckDuplication = useDebouncedCallback(checkIsDuplicate, 225);

  return {
    handleAccountIdChange,
    accountId,
    accountIdWarningMessage,
  };
};

export default useAccountIdInput;
