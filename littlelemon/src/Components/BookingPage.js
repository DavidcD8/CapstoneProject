import React, { useState } from 'react';
import BookingForm from './BookingForm';
import '../App.css';

const BookingPage = ({ availableTimes, dispatch }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({ date, time, guests, occasion });
    setDate('');
    setTime('17:00');
    setGuests(1);
    setOccasion('Birthday');
  };

  return (
    <div>
      <h1>Book Your Reservation</h1>
      <BookingForm
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        guests={guests}
        setGuests={setGuests}
        occasion={occasion}
        setOccasion={setOccasion}
        handleSubmit={handleSubmit}
        availableTimes={availableTimes}
        dispatch={dispatch}
      />
    </div>
  );
};

export default BookingPage;
