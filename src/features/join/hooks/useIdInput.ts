import { ChangeEvent, useState } from "react";

const useIdInput = () => {
  const [id, setId] = useState("");
  const [idWrongInput, setIdWrongInput] = useState(false);
  const [idWarningMessage, setIdWarningMessage] = useState("");

  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);

    const result = checkValidity(e.target.value);

    if (result) {
      setIdWrongInput(false);
    } else {
      setIdWrongInput(true);
      setIdWarningMessage("띄어쓰기는 할 수 없어요 :(");
    }
  };

  const checkValidity = (value: string) => {
    const pattern = /^[a-zA-Z]{1,20}$/;
    return pattern.test(value);
  };

  return {
    handleIdChange,
    id,
    idWarningMessage,
    idWrongInput,
  };
};

export default useIdInput;
