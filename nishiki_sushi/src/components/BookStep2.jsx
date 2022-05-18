import React, { useState } from "react";
import Calendar from "react-calendar";

export default function BookStep2() {
  const [value, setValue] = useState(new Date());

  async function onChange(nextValue) {
    await setValue(nextValue);
    let date = new Date(value);
    let day = date.getDate();
    let month = date.getMonth();
    console.log(day + "/" + (month + 1));
  }

  return (
    <>
      <h4>Hvilken dato?</h4>
      <div>
        <Calendar onChange={onChange} value={value} />
      </div>
      <button className="secondaryBtn">Fortsæt</button>
    </>
  );
}
