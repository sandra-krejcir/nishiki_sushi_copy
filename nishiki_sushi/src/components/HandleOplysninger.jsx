import { useState, useEffect } from "react";
// import validateInfo from "./validateOplysninger";

const useFormOplysninger = (callback, validateInfoOplysninger) => {
  const [values, setValues] = useState({ oplysninger_navn: "", oplysninger_tid: "", oplysninger_mobil: "", oplysninger_kommentarer: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateInfoOplysninger(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      localStorage.setItem("Oplysninger", JSON.stringify(values));
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};

export default useFormOplysninger;
