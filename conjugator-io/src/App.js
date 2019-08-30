import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import LoginModal from './LoginModal';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginModal} />
    </div>
  );
}

export default App;
