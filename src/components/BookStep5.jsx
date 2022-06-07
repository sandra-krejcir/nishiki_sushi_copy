import { useEffect, useState } from "react";
import AnimatedPage from "./AnimatedPage";

export default function BookStep5() {
  const [date] = [new Date(localStorage.getItem("NishikiTableDate"))];
  const [dayNumber, setNumber] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());

  const guestAmount = localStorage.getItem("NishikiTableGuestAmount");
  const time = localStorage.getItem("NishikiTableTime");
  const phone = localStorage.getItem("NishikiTablePhone");
  const comment = localStorage.getItem("NishikiTableComment");
  const name = localStorage.getItem("NishikiTableName");

  useEffect(() => {
    if (!date.current) {
      findMonth();
      findDate();
    }
  }, [date]);

  function findDate() {
    if (date.getDay() == "1") {
      setNumber("mandag");
    } else if (date.getDay() == "2") {
      setNumber("tirsdag");
    } else if (date.getDay() == "3") {
      setNumber("onsdag");
    } else if (date.getDay() == "4") {
      setNumber("torsdag");
    } else if (date.getDay() == "5") {
      setNumber("fredag");
    } else if (date.getDay() == "6") {
      setNumber("lørdag");
    } else if (date.getDay() == "0") {
      setNumber("søndag");
    }
  }

  function findMonth() {
    if (date.getMonth() == "0") {
      setMonth("januar");
    } else if (date.getDay() == "1") {
      setMonth("februar");
    } else if (date.getDay() == "2") {
      setMonth("marts");
    } else if (date.getDay() == "3") {
      setMonth("april");
    } else if (date.getDay() == "4") {
      setMonth("maj");
    } else if (date.getDay() == "5") {
      setMonth("juni");
    } else if (date.getDay() == "6") {
      setMonth("juli");
    } else if (date.getDay() == "7") {
      setMonth("august");
    } else if (date.getDay() == "8") {
      setMonth("september");
    } else if (date.getDay() == "9") {
      setMonth("oktober");
    } else if (date.getDay() == "10") {
      setMonth("november");
    } else if (date.getDay() == "11") {
      setMonth("december");
    }
  }

  return (
    <AnimatedPage>
      <>
        <h4>Tak for din booking</h4>
        <div className="bookagainflex">
          <div className="book5flex">
            <p>
              Vi har sendt en sms-kvittering til tlf.nr.: <span>{phone}</span>
            </p>
            <p className="booking-summary">
              Booking af bord til <span>{guestAmount}</span> gæster{" "}
              <span>
                {dayNumber} d. {date.getDate()} {month}
              </span>{" "}
              kl. <span>{time}</span> under navnet <span>{name}</span>.
            </p>
            <div>
              <p className="underline">Kommentarer:</p>
              <p>{comment}</p>
            </div>
          </div>
        </div>
      </>
    </AnimatedPage>
  );
}
