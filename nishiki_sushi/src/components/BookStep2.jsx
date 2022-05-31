import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import AnimatedPage from "./AnimatedPage";

export default function BookStep2() {
  const [value, setValue] = useState(new Date());

  function onChange() {
    localStorage.setItem("NishikiTableDate", value);
  }

  useEffect(() => {
    if (!value.current) {
      onChange();
    }
  }, [value]);

  return (
    <AnimatedPage>
      <>
        <h4>Hvilken dato?</h4>
        <div>
          <Calendar
            onChange={(e) => {
              setValue(e);
            }}
            value={value}
          />
        </div>
      </>
    </AnimatedPage>
  );
}
