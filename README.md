
# Little Lemon Restaurant Website

## Description
Little Lemon is a family-owned Mediterranean restaurant focused on traditional recipes served with a modern twist. This React application allows users to browse the restaurant's specials, make reservations, and interact with the online menu.

## Features
- **Home Page**: Displays a hero section with restaurant details and a "Reserve a Table" button.
- **Specials**: Displays a list of the restaurant's weekly specials, including images, descriptions, and prices.
- **Reservation**: Users can reserve a table by selecting a date, time, number of guests, and occasion (Birthday/Anniversary).
- **Form Validation**: The reservation form validates user input and disables submission if the form is incomplete.
- **State Management**: Utilizes React `useState` for managing form data and `useEffect` for persisting state.

## Demo

![Hero Section](./src/assets/image/restauranfood.jpg)
*Hero section of the Little Lemon Restaurant website.*

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/little-lemon.git
   cd little-lemon
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open the app in your browser:
   Navigate to `http://localhost:3000` to see the application in action.

## Project Structure

```
/src
  /assets
    /image
      - greeksalad.jpg
      - lemondessert.jpg
      - bruschetta.svg
      - restauranfood.jpg
  /Components
    - NavigationBar.js
    - Main.js
    - Footer.js
    - Cards.js
    - Highlight.js
    - HeroSection.js
    - BookingPage.js
    - BookingForm.js
  App.js
  App.css
```

## Usage

- **Navigation Bar**: The navigation bar provides links to different sections of the website, including "Home," "Specials," and "Booking."
- **Specials**: The `Highlight` component dynamically displays the specials of the week with images and descriptions.
- **Booking Page**: The user can make a reservation by selecting the date, time, guests, and occasion. The form validates inputs and allows for submitting reservation details.

### Special Offer Images
Here are the images of the specials for this week:

![Greek Salad](./src/assets/image/greeksalad.jpg)
*Greek Salad - $12.99*

![Bruschetta](./src/assets/image/bruschetta.svg)
*Bruschetta - $5.99*

![Lemon Dessert](./src/assets/image/lemondessert.jpg)

*Lemon Dessert - $5.00*

## Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript**
- **React.js**
- **React Router**
- **Figma** (for design)

## Acknowledgements
This project was created as part of the Meta Front-End Developer Specialization via Coursera.


