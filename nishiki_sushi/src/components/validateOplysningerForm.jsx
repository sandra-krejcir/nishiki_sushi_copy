export default function validateInfoOplysninger(values) {
  console.log("Validating Oplysninger");
  let errors = {};
  if (!values.oplysninger_navn.trim()) {
    errors.oplysninger_navn = "Navn påkrævet";
  }

  if (!values.oplysninger_tid) {
    errors.oplysninger_tid = "Afhentningstidspunkt påkrævet";
  }

  if (!values.oplysninger_mobil) {
    errors.oplysninger_mobil = "Telefonnummer påkrævet";
  } else if (!/[0-9]{8}/.test(values.oplysninger_mobil)) {
    errors.oplysninger_mobil = "Telefonnummer ugyldigt";
  }

  return errors;
}
