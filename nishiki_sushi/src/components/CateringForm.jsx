import { useState } from "react";
import CateringFormStep1 from "./CateringFormStep1";
import CateringFormStep2 from "./CateringFormStep2";

export default function CateringForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div className="side_flex side_column">
      <div className="catering_img"></div>
      <section className="catering_form">{!isSubmitted ? <CateringFormStep1 submitForm={submitForm} /> : <CateringFormStep2 />}</section>
    </div>
  );
}
