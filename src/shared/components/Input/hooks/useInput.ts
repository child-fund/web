import { useState } from "react";

const useInput = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFieldBlur = () => {
    setIsFocused(false);
  };

  const handleInputFieldFocus = () => {
    setIsFocused(true);
  };

  return {
    isFocused,
    handleInputFieldBlur,
    handleInputFieldFocus,
  };
};

export default useInput;
