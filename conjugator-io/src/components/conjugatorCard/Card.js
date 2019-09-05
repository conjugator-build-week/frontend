import React, { useState } from 'react';
import '../../App.css';

import Streak from './Streak.js';
import Verb from './Verb';

function Card() {

  const [value, setValue] = useState("");
  const [totalAnswers, setTotalAnswers] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  // const [correct, setCorrect] = useState(false);

  const percentage = 
    totalAnswers < 1 ? 0 : ((correctAnswers / totalAnswers) * 100).toFixed(0);

  const addAccent = event => {
    event.preventDefault();
    const accent = event.target.value;
    setValue(value + accent);
  }

  return (
    <div className="con-card">
      <Streak 
        percentage={percentage}
      />
      <Verb
        addAccent={addAccent} 
        value={value}
        // handleSubmit={handleSubmit}
        setValue={setValue} 
      />
    </div>
  )
}

export default Card;
