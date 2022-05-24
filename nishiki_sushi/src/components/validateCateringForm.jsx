export default function validateInfo(values) {
  let errors = {};
  if (!values.enquiryName.trim()) {
    errors.enquiryName = "Name required";
  }

  if (!values.enquiryEmailAddress) {
    errors.enquiryEmailAddress = "Email requried";
  } else if (!/\S+@\S+\.\S+/.test(values.enquiryEmailAddress)) {
    errors.enquiryEmailAddress = "Email is invalid";
  }

  if (!values.enquiryComment.trim()) {
    errors.enquiryComment = "Description required";
  }
  return errors;
}
