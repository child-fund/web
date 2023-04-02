import { ChangeEvent, useState, useEffect } from "react";

const useRetypedPasswordInput = (password: string) => {
  const [retypedPassword, setRetypedPassword] = useState("");
  const [retypePasswordWarningMessage, setRetypedPasswordWarningMessage] =
    useState("");

  useEffect(() => {
    checkValidityAndSetResult();
  }, [password, retypedPassword]);

  const checkValidityAndSetResult = () => {
    const result = password === retypedPassword;

    if (result) {
      setRetypedPasswordWarningMessage("");
    } else {
      setRetypedPasswordWarningMessage("설정한 비밀번호랑 달라요 :(");
    }
  };

  const handleRetypedPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRetypedPassword(e.target.value);
  };

  return {
    handleRetypedPasswordChange,
    retypedPassword,
    retypePasswordWarningMessage,
  };
};

export default useRetypedPasswordInput;
