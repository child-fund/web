import { ChangeEvent, useState } from "react";

import getIsAccountIdDuplicate from "shared/apis/getIsAccountIdDuplicate";
import useDebouncedCallback from "shared/utils/useDebouncedCallback";

const useAccountIdInput = () => {
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
