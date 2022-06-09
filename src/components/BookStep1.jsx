import { useEffect, useState } from "react";

export default function BookStep1() {
  const [guestAmount, setGuestAmout] = useState(2);

  useEffect(() => {
    if (!guestAmount.current) {
      changeGuestAmount();
    }
  }, [guestAmount]);

  async function changeGuestAmount() {
    localStorage.setItem("NishikiTableGuestAmount", guestAmount);
  }

  const options = [
    {
      label: "1",
      value: 1,
      key: "1",
    },
    {
      label: "2",
      value: 2,
      key: "2",
    },
    {
      label: "3",
      value: 3,
      key: "3",
    },
    {
      label: "4",
      value: 4,
      key: "4",
    },
    {
      label: "5",
      value: 5,
      key: "5",
    },
    {
      label: "6",
      value: 6,
      key: "6",
    },
    {
      label: "7",
      value: 7,
      key: "7",
    },
    {
      label: "8",
      value: 8,
      key: "8",
    },
    {
      label: "9",
      value: 9,
      key: "9",
    },
    {
      label: "10",
      value: 10,
      key: "10",
    },
    {
      label: "11",
      value: 11,
      key: "11",
    },
    {
      label: "12",
      value: 12,
      key: "12",
    },
    {
      label: "13",
      value: 13,
      key: "13",
    },
    {
      label: "14",
      value: 14,
      key: "14",
    },
    {
      label: "15",
      value: 15,
      key: "15",
    },
  ];

  return (
    <>
      <h4>Hvor mange bliver I?</h4>
      <label
        htmlFor="guest-count"
        style={{
          display: "flex",
          alignItems: "baseline",
          width: "max-content",
          marginTop: "1.5rem",
        }}
      >
        <select
          value={guestAmount}
          onChange={(e) => {
            setGuestAmout(e.target.value);
          }}
          name="guest-count"
          id="guest-count"
          required
        >
          {options.map((option) => (
            <option key={option.key} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        Gæster
      </label>
      <br />
    </>
  );
}
