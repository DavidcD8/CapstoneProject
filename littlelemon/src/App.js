import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  return (
     <Router>
      <NavigationBar />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
