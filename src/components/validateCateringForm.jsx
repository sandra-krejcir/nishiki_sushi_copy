export default function validateInfo(values) {
  let errors = {};
  if (!values.enquiryName.trim()) {
    errors.enquiryName = "Navn påkrævet";
  }

  if (!values.enquiryEmailAddress) {
    errors.enquiryEmailAddress = "Email påkrævet";
  } else if (!/\S+@\S+\.\S+/.test(values.enquiryEmailAddress)) {
    errors.enquiryEmailAddress = "Email ikke fundet";
  }

  if (!values.enquiryComment.trim()) {
    errors.enquiryComment = "Beskrivelse påkrævet";
  }
  return errors;
}
