export default function CateringForm() {
  return (
    <>
      <section className="catering_form">
        <h3>Få et tilbud</h3>
        <p>
          Send os en beskrivelse af din drømmefest. Husk at skrive hvornår
          eventet skal afholdes, antal gæster og og andre specifikke ønsker til
          dit event. Vi kontakter dig via din email adresse med et tilbud på en
          samlet pris så hurtigt som muligt.
        </p>
        <form className="cateringForm_container">
          <label htmlFor="enquiryName" className="form_input">
            NAVN
          </label>
          <input
            type="text"
            id="enquiryName"
            name="enquiryName"
            placeholder="John Doe"
          ></input>
          <label htmlFor="enquiryEmailAddress" className="form_input">
            EMAIL ADRESSE
          </label>
          <input
            type="email"
            id="enquiryEmailAddress"
            name="enquiryEmailAddress"
            placeholder="Johndoe@mail.com"
          ></input>
          <label htmlFor="enquiryFestType" className="form_input">
            FEST TYPE
          </label>
          <select type="text" id="enquiryFestType" name="enquiryFestType">
            <option value="In-restaurant event">In-restaurant event</option>
            <option value="Offsite catering">Offsite catering</option>
          </select>
          <label htmlFor="enquiryComment" className="formTextarea_input">
            EVENT BESKRIVELSE
          </label>
          <textarea id="enquiryComment" name="enquiryComment"></textarea>
        </form>
        <div className="enquirySubmit_button">
          <a href="">Send enquiry</a>
        </div>
      </section>
    </>
  );
}
