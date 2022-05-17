import BookStep1 from "./BookStep1";
import BookStep2 from "./BookStep2";
import BookStep3 from "./BookStep3";
import BookStep4 from "./BookStep4";
import BookStep5 from "./BookStep5";
import { FiMapPin } from "react-icons/fi";
import { MdPerson } from "react-icons/md";
import { RiCalendarLine, RiCalendarCheckLine } from "react-icons/ri";
import { AiOutlineClockCircle } from "react-icons/ai";

export default function BookBord() {
  let stepNumber = 1;
  let stepName = "<BookStep" + stepNumber + " />";
  console.log(stepName);

  return (
    <section id="book-app">
      <h2>Book Bord</h2>
      <div id="app-container">
        <div id="book-icon-container">
          <div id="book-icon-flex">
            <MdPerson className="book-icon" />
            <RiCalendarLine className="book-icon" />
            <AiOutlineClockCircle className="book-icon" />
            <RiCalendarCheckLine className="book-icon" />
          </div>
        </div>
        <div className="seperating-line-book"></div>
        <div className="flex-book-adress">
          <FiMapPin className="book-icon" />
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
