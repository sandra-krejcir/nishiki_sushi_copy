export default function BookStep5() {
  return (
    <>
      <h4>Tak for din booking</h4>
      <div className="bookagainflex">
        <div className="book5flex">
          <p>
            Vi har sendt en sms-kvittering til tlf.nr.: <span>12345678</span>
          </p>
          <p className="booking-summary">
            Booking af bord til <span>2</span> gæster <span>torsdag d. 11. november</span> kl. <span>15:00</span> under navnet <span>Jens Jensen</span>
          </p>
          <div>
            <p className="underline">Kommentarer:</p>
            <p>Det er min fødselsdag, sæt flag på bordet.</p>
          </div>
        </div>
        <a href="">Foretag endnu en booking</a>
      </div>
    </>
  );
}
