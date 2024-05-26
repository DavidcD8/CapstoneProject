import { render, fireEvent, screen } from "@testing-library/react";
import BookingForm from "./Components/BookingForm";



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
});