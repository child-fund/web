import { ChangeEvent, useState } from "react";

const usePasswordInput = () => {
  const [password, setPassword] = useState("");
  const [passwordWarningMessage, setPasswordWarningMessage] = useState("");

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);

    const result = checkValidity(e.target.value);

    if (result) {
      setPasswordWarningMessage("");
    } else {
      setPasswordWarningMessage(
        "8자리 이상 20자리 이하 영문, 숫자를 조합해주세요 :("
      );
    }
  };

  const checkValidity = (value: string) => {
    const pattern =
      /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{8,19}$/;
    return pattern.test(value);
  };

  return {
    handlePasswordChange,
    password,
    passwordWarningMessage,
  };
};

export default usePasswordInput;
