import React from 'react';
import '../App.css';

const BookingForm = ({
  date,
  setDate,
  time,
  setTime,
  guests,
  setGuests,
  occasion,
  setOccasion,
  handleSubmit,
  availableTimes,
  dispatch,
}) => {
  const isFormIncomplete = !date || !time || !guests || !occasion;

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatch({ type: 'dateChange', payload: e.target.value });
  };

  return (
    <form className="form-grid" onSubmit={handleSubmit} aria-labelledby="formHeading">
      <h2 id="formHeading">Reservation Form</h2>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        aria-required="true"
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        aria-required="true"
      >
        {Array.isArray(availableTimes) && availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        aria-required="true"
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        aria-required="true"
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <input
        disabled={isFormIncomplete}
        type="submit"
        value="Make Your reservation"
        aria-disabled={isFormIncomplete ? "true" : "false"}
      />
    </form>
  );
};

export default BookingForm;
