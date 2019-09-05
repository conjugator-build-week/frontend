import React, { useState } from 'react';
import '../App.css';

import Streak from './Streak.js';
import Verb from './Verb';

function Card() {

  const [value, setValue] = useState("");
  const [best, setBest] = useState(0);
  const [totalAnswers, setTotalAnswers] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [correct, setCorrect] = useState(false);
  const [current, setCurrent] = useState(0);

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
        current={current}
        percentage={percentage}
      />
      <Verb
        correct={correct} 
        addAccent={addAccent} 
        value={value}
        // handleSubmit={handleSubmit}
        setValue={setValue} 
      />
    </div>
  )
}

export default Card;
