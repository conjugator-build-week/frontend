import React from 'react';
import '../App.css';

import Streak from './Streak.js';
import Verb from './Verb.js';

function Card() {
  return (
    <div className="con-card">
      <Streak />
      <Verb />
    </div>
  )
}

export default Card;
