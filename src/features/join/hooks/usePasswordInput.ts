import { ChangeEvent, useState } from "react";

const usePasswordInput = () => {
  const [password, setPassword] = useState("");
  const [passwordWrongInput, setPasswordWrongInput] = useState(false);
  const [passwordWarningMessage, setPasswordWarningMessage] = useState("");

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);

    const result = checkValidity(e.target.value);

    if (result) {
      setPasswordWrongInput(false);
    } else {
      setPasswordWrongInput(true);
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
    passwordWrongInput,
  };
};

export default usePasswordInput;
