import BookStep1 from "./BookStep1";
import BookStep2 from "./BookStep2";
import BookStep3 from "./BookStep3";
import BookStep4 from "./BookStep4";
import BookStep5 from "./BookStep5";

export default function BookBord() {
  return (
    <section id="book-app">
      <h2>Book Bord</h2>
      <div id="app-container">
        <div id="book-icon-container">
          <div id="book-icon-flex">
            <div className="book-icon"></div>
            <div className="book-icon"></div>
            <div className="book-icon"></div>
            <div className="book-icon"></div>
          </div>
        </div>
        <div className="seperating-line-book"></div>
        <div className="flex-book-adress">
          <div className="book-icon"></div>
          <p>
            Jernbanegade 9D
            <br />
            3600 Frederikssund
          </p>
        </div>
        <div className="seperating-line-book"></div>
        <div id="booking-step">
          <BookStep1 />
        </div>
      </div>
    </section>
  );
}
