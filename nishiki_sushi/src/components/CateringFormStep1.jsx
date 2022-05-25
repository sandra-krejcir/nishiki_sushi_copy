import useForm from "./HandleCateringForm";
import validateInfo from "./validateCateringForm";

const CateringFormStep1 = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validateInfo);

  return (
    <div>
      <h3>Få et tilbud</h3>
      <p>
        Send os en beskrivelse af din drømmefest. Husk at skrive hvornår eventet skal afholdes, antal gæster og og andre specifikke ønsker til dit event. Vi kontakter dig via din email adresse med et tilbud på en samlet pris så hurtigt som muligt.
      </p>
      <form onSubmit={handleSubmit} className="cateringForm_container">
        <label htmlFor="enquiryName" className="form_input enquiryName column_formFlex">
          NAVN
          <input style={{ border: errors.enquiryName ? "2px solid red" : "" }} onChange={handleChange} value={values.enquiryName} type="text" id="enquiryName" name="enquiryName" placeholder="John Doe"></input>
          {errors.enquiryName && <p className="errorMessage">{errors.enquiryName}</p>}
        </label>

        <label htmlFor="enquiryEmailAddress" className="form_input enquiryEmailAddress column_formFlex">
          EMAIL ADRESSE
          <input style={{ border: errors.enquiryEmailAddress ? "2px solid red" : "" }} onChange={handleChange} value={values.enquiryEmailAddress} type="email" id="enquiryEmailAddress" name="enquiryEmailAddress" placeholder="Johndoe@mail.com"></input>
          {errors.enquiryEmailAddress && <p className="errorMessage">{errors.enquiryEmailAddress}</p>}
        </label>

        <label htmlFor="enquiryFestType" className="form_input enquiryFestType column_formFlex">
          FEST TYPE
          <select onChange={handleChange} value={values.enquiryFestType} type="text" id="enquiryFestType" name="enquiryFestType">
            <option value="In-restaurant event">In-restaurant event</option>
            <option value="Offsite catering">Offsite catering</option>
          </select>
        </label>

        <label htmlFor="enquiryComment" className="formTextarea_input enquiryComment column_formFlex">
          EVENT BESKRIVELSE
          <textarea style={{ border: errors.enquiryComment ? "2px solid red" : "" }} onChange={handleChange} value={values.enquiryComment} id="enquiryComment" name="enquiryComment"></textarea>
          {errors.enquiryComment && <p className="errorMessage">{errors.enquiryComment}</p>}
        </label>

        <div className="enquirySubmit_button">
          <a href="">
            <button type="submit" className="primaryBtn">
              Send forespørgsel
            </button>
          </a>
        </div>
      </form>
    </div>
  );
};
export default CateringFormStep1;
