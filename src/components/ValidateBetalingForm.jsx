export default function validateInfoBetaling(values) {
  let errors = {};
  if (!values.betaling_kortnummer.trim()) {
    errors.betaling_kortnummer = "kortnummer påkrævet";
  } else if (!/^[0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}/.test(values.betaling_kortnummer.trim())) {
    if (!/^[0-9]{16}/.test(values.betaling_kortnummer.trim())) {
      errors.betaling_kortnummer = "Fejl i kortnummer";
    }
  }

  if (!values.betaling_cvc) {
    errors.betaling_cvc = "cvc påkrævet";
  } else if (values.betaling_cvc.trim().length !== 3) {
    errors.betaling_cvc = "cvc skal være 3 tal";
  }
  if (!values.betaling_navn.trim()) {
    errors.betaling_navn = "Navn påkrævet";
  } else if (!/^[a-zA-Z]+(([',. -][a-zA-Z])?[a-zA-Z0-9ÆØÅæøå]*)*$/.test(values.betaling_navn.trim())) {
    errors.betaling_navn = "Tjek for tastefejl";
  }

  return errors;
}
