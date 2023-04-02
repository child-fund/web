import { ChangeEvent, useState, useEffect } from "react";

const useRetypedPasswordInput = (password: string) => {
  const [retypedPassword, setRetypedPassword] = useState("");
  const [retypePasswordWarningMessage, setRetypedPasswordWarningMessage] =
    useState("");

  useEffect(() => {
    if (retypedPassword.length > 0) {
      checkValidity();
    }
  }, [password, retypedPassword]);

  const checkValidity = () => {
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
