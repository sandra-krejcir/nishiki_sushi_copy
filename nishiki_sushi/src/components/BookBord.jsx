import { useEffect, useMemo, useState } from "react";

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
  const [step1, setStep1State] = useState(true);
  const [step2, setStep2State] = useState(false);
  const [step3, setStep3State] = useState(false);
  const [step4, setStep4State] = useState(false);
  const [step5, setStep5State] = useState(false);

  const [stepChoice, setStepChoice] = useState("1");
  useEffect(() => {
    if (!stepChoice.current) {
      changeStep();
    }
  }, [stepChoice]);
  const [bookingStep, setBookingStep] = useState(<BookStep1 />);

  function changeStep() {
    if (stepChoice == "1") {
      console.log("step 1");
      setBookingStep(<BookStep1 />);
      setStep1State(true);
      setStep2State(false);
      setStep3State(false);
      setStep4State(false);
      setStep5State(false);
    } else if (stepChoice == "2") {
      console.log("step 2");
      setBookingStep(<BookStep2 />);
      setStep1State(false);
      setStep2State(true);
      setStep3State(false);
      setStep4State(false);
      setStep5State(false);
    } else if (stepChoice == "3") {
      console.log("step 3");
      setBookingStep(<BookStep3 />);
      setStep1State(false);
      setStep2State(false);
      setStep3State(true);
      setStep4State(false);
      setStep5State(false);
    } else if (stepChoice == "4") {
      console.log("step 4");
      setBookingStep(<BookStep4 />);
      setStep1State(false);
      setStep2State(false);
      setStep3State(false);
      setStep4State(true);
      setStep5State(false);
    } else if (stepChoice == "5") {
      console.log("step 5");
      setBookingStep(<BookStep5 />);
      setStep1State(false);
      setStep2State(false);
      setStep3State(false);
      setStep4State(false);
      setStep5State(true);
    }
  }

  return (
    <>
      <section id="book-app">
        <h2>Book Bord</h2>
        <div id="app-container">
          <div id="book-icon-container">
            <ul id="book-icon-flex">
              <li
                value={"1"}
                onClick={(e) => {
                  setStepChoice(e.target.value);
                  console.log(e.target.value);
                }}
              >
                <MdPerson className="book-icon" style={{ pointerEvents: "none", color: step1 ? "#462900" : "#C09E85" }} />
              </li>
              <li
                value={"2"}
                onClick={(e) => {
                  setStepChoice(e.target.value);
                  console.log(e.target.value);
                }}
              >
                <RiCalendarLine className="book-icon" style={{ pointerEvents: "none", color: step2 ? "#462900" : "#C09E85" }} />
              </li>
              <li
                value={"3"}
                onClick={(e) => {
                  setStepChoice(e.target.value);
                  console.log(e.target.value);
                }}
              >
                <AiOutlineClockCircle className="book-icon" style={{ pointerEvents: "none", color: step3 ? "#462900" : "#C09E85" }} />
              </li>
              <li
                value={"4"}
                onClick={(e) => {
                  setStepChoice(e.target.value);
                  console.log(e.target.value);
                }}
              >
                <RiCalendarCheckLine className="book-icon" style={{ pointerEvents: "none", color: step4 ? "#462900" : "#C09E85" }} />
              </li>
            </ul>
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
