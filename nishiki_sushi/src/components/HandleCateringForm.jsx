import { useState, useEffect } from "react";

const useForm = (callback, validateInfo) => {
  const [values, setValues] = useState({ enquiryName: "", enquiryEmailAddress: "", enquiryFestType: "", enquiryComment: "" });
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
    setErrors(validateInfo(values));
    setIsSubmitting(true);
    console.log("handleSubmit");
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      localStorage.setItem("henvendelse", JSON.stringify(values));
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
