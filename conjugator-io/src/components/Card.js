import React, { useState } from 'react';
import '../App.css';

import Streak from './Streak.js';
import Verb from './Verb.js';

function Card() {

  const [value, setValue] = useState("");

  const addAccent = event => {
    event.preventDefault();
    const accent = event.target.value;
    setValue(value + accent);
  }

  return (
    <div className="con-card">
      <Streak />
      <Verb addAccent={addAccent} value={value} setValue={setValue} />
    </div>
  )
}

export default Card;
