import React, { useState, useEffect } from 'react';
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
  submitForm,
}) => {
  const [bookedTimes, setBookedTimes] = useState([]);

  const isFormIncomplete = !date || !time || !guests || !occasion;

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatch({ type: 'dateChange', payload: e.target.value });
  };

  const handleBooking = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };

    // Call the submitForm function with formData
    submitForm(formData);
    // Add the booked time to the list of booked times
    setBookedTimes([...bookedTimes, time]);

    // Find the next available time after the booked time
    const nextAvailableTimeIndex = availableTimes.findIndex(availableTime => availableTime > time);
    const nextAvailableTime = nextAvailableTimeIndex !== -1 ? availableTimes[nextAvailableTimeIndex] : availableTimes[0];

    // Set the new time and reset the date
    setTime(nextAvailableTime);
    setDate('');
  };

  const isTimeBooked = (time) => {
    return bookedTimes.includes(time);
  };


  useEffect(() => {
    localStorage.setItem('date', JSON.stringify(date));
    localStorage.setItem('time', JSON.stringify(time));
    localStorage.setItem('guests', JSON.stringify(guests));
    localStorage.setItem('occasion', JSON.stringify(occasion));
  }, [date, time, guests, occasion]);
  



  return (
    <form className="form-grid" onSubmit={handleSubmit} aria-labelledby="formHeading">
      <h2 id="formHeading">Reservation Form</h2>
      <label htmlFor="res-date" className="form-label">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        aria-required="true"
        className="form-input"
      />
      <label htmlFor="res-time" className="form-label">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        aria-required="true"
        className="form-select"
      >
        {Array.isArray(availableTimes) && availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime} disabled={isTimeBooked(availableTime)}>
            {isTimeBooked(availableTime) ? `${availableTime} (Booked)` : availableTime}
          </option>
        ))}
      </select>
      <label htmlFor="guests" className="form-label">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        aria-required="true"
        className="form-input"
      />
      <label htmlFor="occasion" className="form-label">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        aria-required="true"
        className="form-select"
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
       <input
               onClick={handleBooking}

        disabled={isFormIncomplete}
        type="submit"
        value="Make Your reservation"
        aria-disabled={isFormIncomplete ? "true" : "false"}
      />
    </form>
  );
};

export default BookingForm;
