import { useState } from "react";

export default function BookStep1() {
  const [guestAmount, setGuestAmout] = useState(2);
  // console.log(guestAmount);

  const options = [
    {
      label: "1",
      value: 1,
    },
    {
      label: "2",
      value: 2,
    },
    {
      label: "3",
      value: 3,
    },
    {
      label: "4",
      value: 4,
    },
    {
      label: "5",
      value: 5,
    },
    {
      label: "6",
      value: 6,
    },
    {
      label: "7",
      value: 7,
    },
    {
      label: "8",
      value: 8,
    },
    {
      label: "9",
      value: 9,
    },
    {
      label: "10",
      value: 10,
    },
    {
      label: "11",
      value: 11,
    },
    {
      label: "12",
      value: 12,
    },
    {
      label: "13",
      value: 13,
    },
    {
      label: "14",
      value: 14,
    },
    {
      label: "15",
      value: 15,
    },
  ];

  return (
    <>
      <h4>Hvor mange bliver I?</h4>
      <label for="guest-count">
        <select
          value={guestAmount}
          onChange={(e) => {
            setGuestAmout(e.target.value);
          }}
          name="guest-count"
          id="guest-count"
        >
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
        Gæster
      </label>
      <br />
      <button type="submit" class="secondaryBtn">
        Fortsæt
      </button>
    </>
  );
}
