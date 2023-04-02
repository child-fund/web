import { ChangeEvent, useState } from "react";

const usePasswordInput = () => {
  const [password, setPassword] = useState("");
  const [passwordWarningMessage, setPasswordWarningMessage] = useState("");

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setPassword(inputValue);

    const isValidateInput = checkValidity(inputValue);

    if (!isValidateInput) {
      setPasswordWarningMessage(
        "띄어쓰기 없이, 8자리 이상 20자리 이하 영문과 숫자를 조합해주세요 :("
      );
      return;
    }

    setPasswordWarningMessage("");
  };

  const checkValidity = (value: string) => {
    const pattern =
      /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{8,20}$/;
    return pattern.test(value);
  };

  return {
    handlePasswordChange,
    password,
    passwordWarningMessage,
  };
};

export default usePasswordInput;
