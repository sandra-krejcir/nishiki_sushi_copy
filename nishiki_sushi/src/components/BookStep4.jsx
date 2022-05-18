import React, { useState } from "react";

export default function BookStep4() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  return (
    <>
      <h4>Bekræft din booking</h4>
      <p className="booking-summary">
        Booking af bord til <span>2</span> gæster <span>torsdag d. 11. november</span> kl. <span>15:00</span>
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
