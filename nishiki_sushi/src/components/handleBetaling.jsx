import { useState, useEffect } from "react";

const useFormBetaling = (callback, validateInfoBetaling) => {
  const [values, setValues] = useState({ betaling_kortnummer: "", betaling_navn: "", betaling_cvc: "", enquiryComment: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateInfoBetaling(values));
    setIsSubmitting(true);
    console.log("handleSubmit");
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      localStorage.setItem("Betaling", JSON.stringify(values));
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};

export default useFormBetaling;
