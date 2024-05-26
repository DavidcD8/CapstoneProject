import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import BookingPage from './BookingPage';
import AboutSection from './AboutSection';
import HeroSection from './HeroSection';
import Testimonials from './Testimonials';
import Highlights from './Highlights';
import { fetchAPI } from "../api/api";

const initializeTimes = (initialAvailableTimes) => [
  ...initialAvailableTimes,
  ...fetchAPI(new Date()),
];

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return response.length !== 0 ? response : availableTimes;
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

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
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
        <Route path="/herosection" element={<HeroSection />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/highlight" element={<Highlights />} />
        <Route path="/about" element={<AboutSection />} />
      </Routes>
    </main>
  );
}

export default Main;
