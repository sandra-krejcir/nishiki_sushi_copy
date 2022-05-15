export default function CateringForm() {
  return (
    <div className="side_flex side_column">
      <div className="catering_img"></div>
      <section className="catering_form">
        <div>
          <h3>Få et tilbud</h3>
          <p>
            Send os en beskrivelse af din drømmefest. Husk at skrive hvornår
            eventet skal afholdes, antal gæster og og andre specifikke ønsker
            til dit event. Vi kontakter dig via din email adresse med et tilbud
            på en samlet pris så hurtigt som muligt.
          </p>
          <form className="cateringForm_container">
            <label
              htmlFor="enquiryName"
              className="form_input enquiryName column_formFlex"
            >
              NAVN
              <input
                type="text"
                id="enquiryName"
                name="enquiryName"
                placeholder="John Doe"
              ></input>
            </label>
            <label
              htmlFor="enquiryEmailAddress"
              className="form_input enquiryEmailAddress column_formFlex"
            >
              EMAIL ADRESSE
              <input
                type="email"
                id="enquiryEmailAddress"
                name="enquiryEmailAddress"
                placeholder="Johndoe@mail.com"
              ></input>
            </label>

            <label
              htmlFor="enquiryFestType"
              className="form_input enquiryFestType column_formFlex"
            >
              FEST TYPE
              <select type="text" id="enquiryFestType" name="enquiryFestType">
                <option value="In-restaurant event">In-restaurant event</option>
                <option value="Offsite catering">Offsite catering</option>
              </select>
            </label>
            <label
              htmlFor="enquiryComment"
              className="formTextarea_input enquiryComment column_formFlex"
            >
              EVENT BESKRIVELSE
              <textarea id="enquiryComment" name="enquiryComment"></textarea>
            </label>

            <div className="enquirySubmit_button">
              <a href="">
                <button type="submit" className="primaryBtn">
                  Send enquiry
                </button>
              </a>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
