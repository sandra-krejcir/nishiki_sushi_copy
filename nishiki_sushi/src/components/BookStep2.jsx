import React, { useState } from "react";
import Calendar from "react-calendar";

export default function BookStep2() {
  const [value, onChange] = useState(new Date());
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
