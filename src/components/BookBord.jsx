import { useEffect, useState } from "react";

import BookStep1 from "./BookStep1";
import BookStep2 from "./BookStep2";
import BookStep3 from "./BookStep3";
import BookStep4 from "./BookStep4";
import BookStep5 from "./BookStep5";
import { FiMapPin } from "react-icons/fi";
import { MdPerson } from "react-icons/md";
import { RiCalendarLine, RiCalendarCheckLine } from "react-icons/ri";
import { AiOutlineClockCircle } from "react-icons/ai";

export default function BookBord() {
  const [step1, setStep1State] = useState(true);
  const [step2, setStep2State] = useState(false);
  const [step3, setStep3State] = useState(false);
  const [step4, setStep4State] = useState(false);
  const [step5, setStep5State] = useState(false);

  const NoClickIcon = {
    pointerEvents: "none",
    cursor: "none",
  };

  const ClickIcon = {
    pointerEvents: "all",
    cursor: "pointer",
  };

  const [icon1Style, seticon1Style] = useState(NoClickIcon);
  const [icon2Style, seticon2Style] = useState(NoClickIcon);
  const [icon3Style, seticon3Style] = useState(NoClickIcon);
  const [icon4Style, seticon4Style] = useState(NoClickIcon);

  const [stepChoice, setStepChoice] = useState("1");
  useEffect(() => {
    if (!stepChoice.current) {
      changeStep();
    }
  }, [stepChoice]);
  const [bookingStep, setBookingStep] = useState(<BookStep1 />);

  function changeStep() {
    if (stepChoice == "1") {
      setBookingStep(<BookStep1 />);
      setStep1State(true);
      setStep2State(false);
      setStep3State(false);
      setStep4State(false);
      setStep5State(false);
      seticon1Style(NoClickIcon);
      seticon2Style(NoClickIcon);
      seticon3Style(NoClickIcon);
      seticon4Style(NoClickIcon);
    } else if (stepChoice == "2") {
      setBookingStep(<BookStep2 />);
      setStep1State(false);
      setStep2State(true);
      setStep3State(false);
      setStep4State(false);
      setStep5State(false);
      seticon1Style(ClickIcon);
      seticon2Style(NoClickIcon);
      seticon3Style(NoClickIcon);
      seticon4Style(NoClickIcon);
    } else if (stepChoice == "3") {
      setBookingStep(<BookStep3 />);
      setStep1State(false);
      setStep2State(false);
      setStep3State(true);
      setStep4State(false);
      setStep5State(false);
      seticon1Style(ClickIcon);
      seticon2Style(ClickIcon);
      seticon3Style(NoClickIcon);
      seticon4Style(NoClickIcon);
    } else if (stepChoice == "4") {
      setBookingStep(<BookStep4 />);
      setStep1State(false);
      setStep2State(false);
      setStep3State(false);
      setStep4State(true);
      setStep5State(false);
      seticon1Style(ClickIcon);
      seticon2Style(ClickIcon);
      seticon3Style(ClickIcon);
      seticon4Style(NoClickIcon);
    } else if (stepChoice == "5") {
      setBookingStep(<BookStep5 />);
      setStep1State(false);
      setStep2State(false);
      setStep3State(false);
      setStep4State(false);
      setStep5State(true);
      seticon1Style(ClickIcon);
      seticon2Style(ClickIcon);
      seticon3Style(ClickIcon);
      seticon4Style(ClickIcon);
    }
  }

  function submitBooking() {
    let payload = {
      guest_number: localStorage.getItem("NishikiTableGuestAmount"),
      reservation_date: localStorage.getItem("NishikiTableDate"),
      reservation_time: localStorage.getItem("NishikiTableTime"),
      name: localStorage.getItem("NishikiTableName"),
      phone_number: localStorage.getItem("NishikiTablePhone"),
      comment: localStorage.getItem("NishikiTableComment"),
    };

    fetch("https://kea21s-6eb0.restdb.io/rest/nishiki-booking", {
      method: "POST",
      headers: {
        "x-apikey": "606d606af55350043100752e",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((response) => {})
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <section id="book-app">
        <h2>
          <b>Book</b> Bord
        </h2>
        <div id="app-container">
          <div id="book-icon-container">
            <ul id="book-icon-flex">
              <li
                value={"1"}
                style={icon1Style}
                onClick={(e) => {
                  setStepChoice(e.target.value);
                }}
              >
                <MdPerson
                  className="book-icon"
                  style={{
                    pointerEvents: "none",
                    color: step1 ? "#462900" : "#C09E85",
                  }}
                />
              </li>
              <li
                value={"2"}
                style={icon2Style}
                onClick={(e) => {
                  setStepChoice(e.target.value);
                }}
              >
                <RiCalendarLine
                  className="book-icon"
                  style={{
                    pointerEvents: "none",
                    color: step2 ? "#462900" : "#C09E85",
                  }}
                />
              </li>
              <li
                value={"3"}
                style={icon3Style}
                onClick={(e) => {
                  setStepChoice(e.target.value);
                }}
              >
                <AiOutlineClockCircle
                  className="book-icon"
                  style={{
                    pointerEvents: "none",
                    color: step3 ? "#462900" : "#C09E85",
                  }}
                />
              </li>
              <li
                value={"4"}
                style={icon4Style}
                onClick={(e) => {
                  setStepChoice(e.target.value);
                }}
              >
                <RiCalendarCheckLine
                  className="book-icon"
                  style={{
                    pointerEvents: "none",
                    color: step4 ? "#462900" : "#C09E85",
                  }}
                />
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
          <button
            class="secondaryBtn"
            style={{ display: step1 ? "block" : "none" }}
            value={"2"}
            onClick={(e) => {
              setStepChoice(e.target.value);
            }}
          >
            Fortsæt
          </button>
          <button
            style={{ marginTop: "2rem", display: step2 ? "block" : "none" }}
            className="secondaryBtn"
            value={"3"}
            onClick={(e) => {
              setStepChoice(e.target.value);
            }}
          >
            Fortsæt
          </button>
          <button
            className="secondaryBtn"
            style={{ marginTop: "1.5rem", display: step3 ? "block" : "none" }}
            value={"4"}
            onClick={(e) => {
              setStepChoice(e.target.value);
            }}
          >
            Fortsæt
          </button>
          <button
            className="primaryBtn"
            style={{ marginTop: "1.2rem", display: step4 ? "block" : "none" }}
            value={"5"}
            onClick={(e) => {
              setStepChoice(e.target.value);
              submitBooking();
            }}
          >
            Bekræft Booking
          </button>
          <button
            id="a-style-btn"
            style={{ display: step5 ? "block" : "none" }}
            value={"1"}
            onClick={(e) => {
              setStepChoice(e.target.value);
            }}
          >
            Foretag endnu en booking
          </button>
        </div>
      </section>
    </>
  );
}
