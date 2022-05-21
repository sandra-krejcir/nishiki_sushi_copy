import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";

export default function BookStep2() {
  const [value, setValue] = useState(new Date());

  function onChange() {
    console.log(value.getDate() + "/" + (value.getMonth() + 1) + "/" + value.getFullYear());
    localStorage.setItem("NishikiTableDate", value);
  }

  useEffect(() => {
    if (!value.current) {
      onChange();
    }
  }, [value]);

  return (
    <>
      <h4>Hvilken dato?</h4>
      <div>
        <Calendar
          onChange={(e) => {
            console.log(e);
            setValue(e);
          }}
          value={value}
        />
      </div>
      <button style={{ marginTop: "1.5rem" }} className="secondaryBtn">
        Fortsæt
      </button>
    </>
  );
}
