import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import BookingPage from './BookingPage';
import AboutSection from './AboutSection';
import HeroSection from './HeroSection';
import Testimonials from './Testimonials';
import Highlights from './Highlights';
import ConfirmedBooking from './ConfirmedBooking';
import { fetchAPI, submitAPI } from '../api/api';

export const initializeTimes = (initialAvailableTimes) => [
  ...initialAvailableTimes,
  ...fetchAPI(new Date()),
];

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return response.length !== 0 ? response : availableTimes;
};



function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = async (formData) => {
    
    const success = await submitAPI(formData);
    
    if (success) {
      navigate('/confirmation');
    } else {
      console.error('Booking submission failed');
    }
  };



  return (
    <main>
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <Highlights />
            <Testimonials />
            <AboutSection />
          </>
        } />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
        <Route path="/herosection" element={<HeroSection />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/confirmation" element={<ConfirmedBooking />} />
        <Route path="/highlight" element={<Highlights />} />
        <Route path="/about" element={<AboutSection />} />
      </Routes>
    </main>
  );
}

export default Main;
