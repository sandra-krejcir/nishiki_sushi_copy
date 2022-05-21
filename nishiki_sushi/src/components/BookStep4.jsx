import React, { useEffect, useState } from "react";

export default function BookStep4() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [date, setDate] = [new Date(localStorage.getItem("NishikiTableDate"))];
  const [dayNumber, setNumber] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());

  const guestAmount = localStorage.getItem("NishikiTableGuestAmount");
  const time = localStorage.getItem("NishikiTableTime");

  useEffect(() => {
    if (!date.current) {
      findMonth();
      findDate();
    }
  }, [date]);

  useEffect(() => {
    if (!name.current) {
      changeName();
    }
  }, [name]);

  useEffect(() => {
    if (!phone.current) {
      changePhone();
    }
  }, [phone]);

  useEffect(() => {
    if (!comment.current) {
      changeComment();
    }
  }, [comment]);

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
    console.log("day: " + dayNumber);
    // console.log("month number: " + date.getMonth());
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
    console.log(month);
  }

  function changeName() {
    console.log("registrered name: " + name);
    localStorage.setItem("NishikiTableName", name);
  }

  function changePhone() {
    console.log("registrered phonenr: " + phone);
    localStorage.setItem("NishikiTablePhone", phone);
  }

  function changeComment() {
    console.log("registrered comment: " + comment);
    localStorage.setItem("NishikiTableComment", comment);
  }

  return (
    <>
      <h4>Bekræft din booking</h4>
      <p className="booking-summary">
        Booking af bord til <span>{guestAmount}</span> gæster{" "}
        <span>
          {dayNumber} d. {date.getDate()} {month}
        </span>{" "}
        kl. <span>{time}</span>
      </p>
      <form>
        <label>
          Navn
          <br />
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Jens Jensen" />{" "}
        </label>
        <br />
        <label>
          Mobil nummer <br />
          <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" placeholder="12 34 56 78" />{" "}
        </label>
        <br />
        <label>
          Kommentarer <br />
          <textarea value={comment} onChange={(e) => setComment(e.target.value)} cols="30" rows="4"></textarea>
        </label>
      </form>
      <button className="primaryBtn">Fortsæt</button>
    </>
  );
}
