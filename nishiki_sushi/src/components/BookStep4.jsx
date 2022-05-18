export default function BookStep4() {
  return (
    <>
      <h4>Bekræft din booking</h4>
      <p className="booking-summary">
        Booking af bord til <span>2</span> gæster <span>torsdag d. 11. november</span> kl. <span>15:00</span>
      </p>
      <form action="">
        <label for="">
          Navn
          <br />
          <input type="text" placeholder="Jens Jensen" />{" "}
        </label>
        <br />
        <label for="">
          Mobil nummer <br />
          <input type="tel" placeholder="12 34 56 78" />{" "}
        </label>
        <br />
        <label for="">
          Kommentarer <br />
          <textarea name="" id="" cols="30" rows="4"></textarea>
        </label>
      </form>
      <button className="primaryBtn">Fortsæt</button>
    </>
  );
}
