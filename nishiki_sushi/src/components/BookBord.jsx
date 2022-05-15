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
      </div>
    </section>
  );
}
