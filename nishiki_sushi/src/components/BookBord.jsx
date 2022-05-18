import { useState } from "react";

import BookStep1 from "./BookStep1";
import BookStep2 from "./BookStep2";
import BookStep3 from "./BookStep3";
import BookStep4 from "./BookStep4";
import BookStep5 from "./BookStep5";
import { FiMapPin, FiUnderline } from "react-icons/fi";
import { MdPerson } from "react-icons/md";
import { RiCalendarLine, RiCalendarCheckLine } from "react-icons/ri";
import { AiOutlineClockCircle } from "react-icons/ai";

export default function BookBord() {
  const [stepChoice, setStepChoice] = useState(1);
  const [bookingStep, setBookingStep] = useState(<BookStep1 />);

  function handleChange(value) {
    setStepChoice(value);
    changeStep();

    function changeStep() {
      if (stepChoice === "1") {
        console.log("step 1");
        setBookingStep(<BookStep1 />);
      } else if (stepChoice === "2") {
        console.log("step 2");
        setBookingStep(<BookStep2 />);
      } else if (stepChoice === "3") {
        console.log("step 3");
        setBookingStep(<BookStep3 />);
      } else if (stepChoice === "4") {
        console.log("step 4");
        setBookingStep(<BookStep4 />);
      } else if (stepChoice === "5") {
        console.log("step 5");
        setBookingStep(<BookStep5 />);
      }
    }
  }

  return (
    <>
      <select
        value={stepChoice}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>

      <section id="book-app">
        <h2>Book Bord</h2>
        <div id="app-container">
          <div id="book-icon-container">
            <div id="book-icon-flex">
              <MdPerson className="book-icon" />
              <RiCalendarLine className="book-icon" />
              <AiOutlineClockCircle className="book-icon" />
              <RiCalendarCheckLine className="book-icon" />
            </div>
          </div>
          <div className="seperating-line-book"></div>
          <div className="flex-book-adress">
            <FiMapPin className="book-icon" />
            <p>
              Jernbanegade 9D
              <br />
              3600 Frederikssund
            </p>
          </div>
          <div className="seperating-line-book"></div>
          {bookingStep}
        </div>
      </section>
    </>
  );
}
