import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import LoginModal from './LoginModal';
import './App.css';

import HomePage from './HomePage.js';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Navbar />
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginModal} />
=======
      <HomePage />
>>>>>>> origin/Maxwell-Webb
    </div>
  );
}

export default App;
