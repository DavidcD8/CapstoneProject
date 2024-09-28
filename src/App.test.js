import { render, fireEvent, screen } from "@testing-library/react";
import BookingForm from "./Components/BookingForm";
import './api/api';
//import { initializeTimes } from './Components/Main'
//import { updateTimes } from './Components/Main'


/*

// Mocking initializeTimes and updateTimes functions
BookingForm.initializeTimes = () => ["10:00 AM", "11:00 AM", "12:00 PM"];
BookingForm.updateTimes = (state, action) => {
    switch(action.type) {
        case 'dateChange':
            return action.payload;
        default:
            return state;
    }
};

test('initializeTimes returns the correct initial state', () => {
    const initialState = BookingForm.initializeTimes();
    expect(initialState).toEqual(["10:00 AM", "11:00 AM", "12:00 PM"]);
});

test('updateTimes returns the same value that is provided in the state', () => {
    const state = ["10:00 AM", "11:00 AM", "12:00 PM"];
    const action = { type: 'dateChange', payload: ["1:00 PM", "2:00 PM"] };
    const updatedState = BookingForm.updateTimes(state, action);
    expect(updatedState).toEqual(["1:00 PM", "2:00 PM"]);
});




test('Renders static text in BookingForm component', () => {
    const availableTimes = ["10:00 AM", "11:00 AM", "12:00 PM"];
    render(<BookingForm availableTimes={availableTimes} />);
    // Adjust the static text based on your component
    const staticTextElement = screen.getByText("Reservation Form");
    expect(staticTextElement).toBeInTheDocument();
});


test('BookingForm can be submitted by the user', () => {
  const handleSubmitMock = jest.fn(); // Mock the submit handler
  const availableTimes = ["10:00 AM", "11:00 AM", "12:00 PM"]; // Mock available times
  const setOccasionMock = jest.fn();
  const setGuestsMock = jest.fn();
  const setTimeMock = jest.fn();
  const setDateMock = jest.fn();
  const dispatchMock = jest.fn();

  render(
      <BookingForm
          handleSubmit={handleSubmitMock}
          availableTimes={availableTimes}
          setOccasion={setOccasionMock}
          setGuests={setGuestsMock}
          setTime={setTimeMock}
          setDate={setDateMock}
          dispatch={dispatchMock}
      />
  );

  // Simulate user interactions (filling form inputs)
  fireEvent.change(screen.getByLabelText("Choose date"), { target: { value: '2024-05-30' } });
  fireEvent.change(screen.getByLabelText("Choose time"), { target: { value: '12:00 PM' } });
  fireEvent.change(screen.getByLabelText("Number of guests"), { target: { value: '4' } });
  fireEvent.change(screen.getByLabelText("Occasion"), { target: { value: 'Anniversary' } });

  // Simulate form submission
  fireEvent.submit(screen.getByRole("form"));

  // Verify that the submit handler is called
  expect(handleSubmitMock).toHaveBeenCalled();
});*/

/*
describe('initializeTimes', () => {
    test('should initialize times with non-empty array of available booking times', () => {
      // Mock fetchAPI to return a non-empty array of available booking times
      const mockFetchAPI = jest.fn(() => ['10:00 AM', '11:00 AM', '12:00 PM']);
      
      // Call initializeTimes with an initial array of available times
      const initialAvailableTimes = ['8:00 AM', '9:00 AM'];
      const times = initializeTimes(initialAvailableTimes, mockFetchAPI);
  
      // Assert that times is initialized with a non-empty array of available booking times
      expect(times).toEqual(expect.arrayContaining(['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM']));
    });
  });



describe('updateTimes', () => {
  test('should update times based on selected date', () => {
    // Mock fetchAPI to return a non-empty array of available booking times
    const mockFetchAPI = jest.fn(() => ['10:00 AM', '11:00 AM', '12:00 PM']);

    // Call updateTimes with the current available times and a pre-selected date
    const availableTimes = ['8:00 AM', '9:00 AM'];
    const date = '2024-06-01';
    const updatedTimes = updateTimes(availableTimes, date, mockFetchAPI);

    // Assert that times is updated based on the selected date
    expect(updatedTimes).toEqual(expect.arrayContaining(['10:00 AM', '11:00 AM', '12:00 PM']));
  });
});
*/

/*
// Function to write data to local storage
const writeToLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
  };

  // Function to read data from local storage
  const readFromLocalStorage = (key) => {
    return localStorage.getItem(key);
  };

// Test for writing to local storage
test('writing to local storage', () => {
    const key = 'testKey';
    const value = 'testValue';

    // Call a function that writes to local storage
    writeToLocalStorage(key, value);

    // Retrieve the value from local storage
    const storedValue = localStorage.getItem(key);

    // Assert that the retrieved value matches the expected value
    expect(storedValue).toBe(value);
  });

  // Test for reading from local storage
  test('reading from local storage', () => {
    const key = 'testKey';
    const value = 'testValue';
    // Set an item in local storage
    localStorage.setItem(key, value);
    // Call a function that reads from local storage
    const retrievedValue = readFromLocalStorage(key);
    // Assert that the retrieved value matches the expected value
    expect(retrievedValue).toBe(value);
  });
  */

 
  describe('BookingForm HTML5 Validation', () => {
    const defaultProps = {
      date: '',
      setDate: jest.fn(),
      time: '',
      setTime: jest.fn(),
      guests: '',
      setGuests: jest.fn(),
      occasion: '',
      setOccasion: jest.fn(),
      handleSubmit: jest.fn(),
      availableTimes: [],
      dispatch: jest.fn(),
      submitForm: jest.fn(),
    };
  
    test('date input has required attribute', () => {
      render(<BookingForm {...defaultProps} />);
      const dateInput = screen.getByLabelText(/choose date/i);
      expect(dateInput).toBeRequired();
    });
  
    test('time select has required attribute', () => {
      render(<BookingForm {...defaultProps} />);
      const timeSelect = screen.getByLabelText(/choose time/i);
      expect(timeSelect).toBeRequired();
    });
  
    test('guests input has required, min, and max attributes', () => {
      render(<BookingForm {...defaultProps} />);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      expect(guestsInput).toBeRequired();
      expect(guestsInput).toHaveAttribute('min', '1');
      expect(guestsInput).toHaveAttribute('max', '10');
    });
  
    test('occasion select has required attribute', () => {
      render(<BookingForm {...defaultProps} />);
      const occasionSelect = screen.getByLabelText(/occasion/i);
      expect(occasionSelect).toBeRequired();
    });
  });
  



  describe('BookingForm JavaScript Validation', () => {
    const defaultProps = {
      date: '',
      setDate: jest.fn(),
      time: '',
      setTime: jest.fn(),
      guests: '',
      setGuests: jest.fn(),
      occasion: '',
      setOccasion: jest.fn(),
      handleSubmit: jest.fn(),
      availableTimes: ['12:00', '13:00', '14:00'],
      dispatch: jest.fn(),
      submitForm: jest.fn(),
    };
  
    const setup = (props = {}) => {
      const utils = render(<BookingForm {...defaultProps} {...props} />);
      const dateInput = utils.getByLabelText(/choose date/i);
      const timeSelect = utils.getByLabelText(/choose time/i);
      const guestsInput = utils.getByLabelText(/number of guests/i);
      const occasionSelect = utils.getByLabelText(/occasion/i);
      const submitButton = utils.getByText(/make your reservation/i);
      return {
        ...utils,
        dateInput,
        timeSelect,
        guestsInput,
        occasionSelect,
        submitButton,
      };
    };
  
    test('submit button is disabled when form is incomplete', () => {
      const { submitButton } = setup();
      expect(submitButton).toBeDisabled();
    });
  
    test('submit button is enabled when form is complete', () => {
      const { dateInput, timeSelect, guestsInput, occasionSelect, submitButton } = setup({
        date: '2024-12-31',
        time: '12:00',
        guests: '4',
        occasion: 'Birthday',
      });
  
      fireEvent.change(dateInput, { target: { value: '2024-12-31' } });
      fireEvent.change(timeSelect, { target: { value: '12:00' } });
      fireEvent.change(guestsInput, { target: { value: '4' } });
      fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });
  
      expect(submitButton).toBeEnabled();
    });
  
    test('form submission calls handleSubmit when form is complete', () => {
      const handleSubmit = jest.fn((e) => e.preventDefault());
      const { dateInput, timeSelect, guestsInput, occasionSelect, submitButton } = setup({
        handleSubmit,
        date: '2024-12-31',
        time: '12:00',
        guests: '4',
        occasion: 'Birthday',
      });
  
      fireEvent.change(dateInput, { target: { value: '2024-12-31' } });
      fireEvent.change(timeSelect, { target: { value: '12:00' } });
      fireEvent.change(guestsInput, { target: { value: '4' } });
      fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });
  
      fireEvent.click(submitButton);
  
      expect(handleSubmit).toHaveBeenCalled();
    });
  
    test('form submission does not call handleSubmit when form is incomplete', () => {
      const handleSubmit = jest.fn((e) => e.preventDefault());
      const { submitButton } = setup({ handleSubmit });
  
      fireEvent.click(submitButton);
  
      expect(handleSubmit).not.toHaveBeenCalled();
    });
  });
 
 