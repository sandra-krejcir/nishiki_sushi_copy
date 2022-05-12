import React from "react";
import { FaTruck } from "react-icons/fa";
import { MdOutlineKeyboardBackspace, MdRestaurant } from "react-icons/md";
/* import useForm from "react-hook-form"; */

function Oplysninger() {
  /* const { register, handleSubmit, errors } = useForm(); */
  return (
    <>
      <div>
        <div>
          <h1>Oplysninger</h1>
          <div>
            <p>Ingen Levering</p>
            <FaTruck />
          </div>
        </div>
        <div>
          <button>
            <MdOutlineKeyboardBackspace />
            Kurv
          </button>
          <p>
            Afhenting <MdRestaurant />
          </p>
        </div>
      </div>

      <div>
        <p>
          For vi bedst kan servere dig mad, får vi brug for nogen oplysninger om
          dig. Efter bestillingen er bekræftet vil du modtage en SMS
        </p>
        <form id="oplysninger_form">
          <label htmlFor="oplysninger_navn">Navn</label>
          <input
            type="text"
            name="oplysninger_navn"
            id="oplysninger_navn"
            minLength="2"
            placeholder="John Doe"
            required
          />
          <label htmlFor="oplysninger_tid">Afhentnings tidspunkt</label>
          <input
            type="time"
            id="oplysninger_tid"
            name="oplysninger_tid"
            min="15:00"
            max="21:00"
            required
          />
          <label htmlFor="oplysninger_mobil">Mobil Nummer</label>
          <input
            type="tel"
            id="oplysninger_mobil"
            name="oplysninger_mobil"
            pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}"
            placeholder="00 00 00 00"
            required
          />
          <label htmlFor="oplysninger_kommentarer">Kommentarer</label>
          <input
            type="text"
            name="oplysninger_kommentarer"
            id="oplysninger_kommentarer"
            pattern="^[A-Z][a-z]*(\s([A-Z]|\([A-Z])[a-z\'\(\)]*)?((\s|\-)([A-Z]|\([A-Z])[a-z\'\(\)]*)?((\s|\-)([A-Z]|\([A-Z])[a-z\'\(\)]*)?((\s|\-)([A-Z]|\([A-Z])[a-z\'\(\)]*)?$"
            placeholder="Jeg vil gerne tilføje..."
          />
          <button>Til Betaling</button>
        </form>
      </div>
    </>
  );
}

export default Oplysninger;
