import { ChangeEvent, useState } from "react";

const useAccountIdInput = () => {
  const [accountId, setAccountId] = useState("");
  const [accountIdWarningMessage, setAccountIdWarningMessage] = useState("");

  const handleAccountIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAccountId(e.target.value);

    const result = checkValidity(e.target.value);

    if (result) {
      setAccountIdWarningMessage("");
    } else {
      setAccountIdWarningMessage("이 아이디가 아닌거 같아요 :(");
    }
  };

  const checkValidity = (value: string) => {
    const pattern = /^[a-zA-Z]{1,20}$/;
    return pattern.test(value);
  };

  return {
    handleAccountIdChange,
    accountId,
    accountIdWarningMessage,
  };
};

export default useAccountIdInput;
