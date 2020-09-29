import { useState } from "react";

export const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const handleInputChange = (event) => {
    const{value, name} = event.target
    const newForm = { ...form, [name]: value };

    setForm(newForm);
  };

  const resetState = () => {
    setForm(initialState);
  };

  return { form, handleInputChange, resetState };
};
export default useForm
