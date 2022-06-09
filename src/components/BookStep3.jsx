import React, { useEffect, useState } from "react";
import AnimatedPage from "./AnimatedPage";

export default function BookStep3() {
  const [state, setState] = useState("15:00");

  useEffect(() => {
    if (!state.current) {
      changeTime();
    }
  }, [state]);

  function changeTime() {
    localStorage.setItem("NishikiTableTime", state);
  }

  return (
    <AnimatedPage>
      <>
        <h4 style={{ marginBottom: "1.5rem" }}>Hvilket tidspunkt?</h4>
        <form id="time-form" style={{ marginBottom: "1.5rem" }}>
          <input
            onChange={(e) => {
              setState(e.target.value);
            }}
            type="radio"
            id="1500"
            name="time"
            value="15:00"
          />{" "}
          <label htmlFor="1500">15:00</label>
          <br />
          <input
            onChange={(e) => {
              setState(e.target.value);
            }}
            data-state="fullybooked"
            type="radio"
            id="1530"
            name="time"
            value="15:30"
          />{" "}
          <label htmlFor="1530">15:30</label>
          <br />
          <input
            onChange={(e) => {
              setState(e.target.value);
            }}
            type="radio"
            id="1600"
            name="time"
            value="16:00"
          />{" "}
          <label htmlFor="1600">16:00</label>
          <br />
          <input
            onChange={(e) => {
              setState(e.target.value);
            }}
            type="radio"
            id="1630"
            name="time"
            value="16:30"
          />{" "}
          <label htmlFor="1630">16:30</label>
          <br />
          <input
            onChange={(e) => {
              setState(e.target.value);
            }}
            type="radio"
            id="1700"
            name="time"
            value="17:00"
          />{" "}
          <label htmlFor="1700">17:00</label>
          <br />
          <input
            onChange={(e) => {
              setState(e.target.value);
            }}
            type="radio"
            id="1730"
            name="time"
            value="17:30"
          />{" "}
          <label htmlFor="1730">17:30</label>
          <br />
          <input
            onChange={(e) => {
              setState(e.target.value);
            }}
            type="radio"
            id="1800"
            name="time"
            value="18:00"
          />{" "}
          <label htmlFor="1800">18:00</label>
          <br />
          <input
            onChange={(e) => {
              setState(e.target.value);
            }}
            type="radio"
            id="1830"
            name="time"
            value="18:30"
          />{" "}
          <label htmlFor="1830">18:30</label>
          <br />
          <input
            onChange={(e) => {
              setState(e.target.value);
            }}
            type="radio"
            id="1900"
            name="time"
            value="19:00"
          />{" "}
          <label htmlFor="1900">19:00</label>
          <br />
          <input
            onChange={(e) => {
              setState(e.target.value);
            }}
            type="radio"
            id="1930"
            name="time"
            value="19:30"
          />{" "}
          <label htmlFor="1930">19:30</label>
          <br />
          <input
            onChange={(e) => {
              setState(e.target.value);
            }}
            type="radio"
            id="2000"
            name="time"
            value="20:00"
          />
          <label htmlFor="2000">20:00</label>
          <br />
          <input
            onChange={(e) => {
              setState(e.target.value);
            }}
            type="radio"
            id="2030"
            name="time"
            value="20:30"
          />{" "}
          <label htmlFor="2030">20:30</label>
          <br />
          <input
            onChange={(e) => {
              setState(e.target.value);
            }}
            type="radio"
            id="2100"
            name="time"
            value="21:00"
          />{" "}
          <label htmlFor="2100">21:00</label>
          <br />
        </form>
      </>
    </AnimatedPage>
  );
}
