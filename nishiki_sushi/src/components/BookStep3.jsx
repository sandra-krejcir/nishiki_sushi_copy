import React, { useState } from "react";

export default function BookStep3() {
  const [state, setState] = useState("1500");

  return (
    <>
      <h4>Hvilket tidspunkt?</h4>
      <form id="time-form">
        <input type="radio" id="1500" name="time" value="1500" /> <label for="1500">15:00</label>
        <br />
        <input data-state="fullybooked" type="radio" id="1530" name="time" value="1530" /> <label for="1530">15:30</label>
        <br />
        <input type="radio" id="1600" name="time" value="1600" /> <label for="1600">16:00</label>
        <br />
        <input type="radio" id="1630" name="time" value="1630" /> <label for="1630">16:30</label>
        <br />
        <input type="radio" id="1700" name="time" value="1700" /> <label for="1700">17:00</label>
        <br />
        <input type="radio" id="1730" name="time" value="1730" /> <label for="1730">17:30</label>
        <br />
        <input type="radio" id="1800" name="time" value="1800" /> <label for="1800">18:00</label>
        <br />
        <input type="radio" id="1830" name="time" value="1830" /> <label for="1830">18:30</label>
        <br />
        <input type="radio" id="1900" name="time" value="1900" /> <label for="1900">19:00</label>
        <br />
        <input type="radio" id="1930" name="time" value="1930" /> <label for="1930">19:30</label>
        <br />
        <input type="radio" id="2000" name="time" value="2000" /> <label for="2000">20:00</label>
        <br />
        <input type="radio" id="2030" name="time" value="2030" /> <label for="2030">20:30</label>
        <br />
        <input type="radio" id="2100" name="time" value="2100" /> <label for="2100">21:00</label>
        <br />
      </form>
      <button className="secondaryBtn">Fortsæt</button>
    </>
  );
}
