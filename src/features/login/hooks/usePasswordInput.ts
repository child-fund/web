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
      setPasswordWarningMessage("이 비밀번호가 아닌거 같아요 :(");
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
