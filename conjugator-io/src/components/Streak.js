import React from 'react';
import '../App.css';

function Streak(props) {

  const {
    current,
    best,
    percentage
  } = props;

  // const [current, setCurrent] = useState(0);
  // const [best, setBest] = useState(0);
  // const [percentage, setPercentage] = useState(0);

  return (
    <div className="streak">
      <div className="counter">
        <p>Current Streak</p>
        <h3>{current}</h3>
      </div>
      <div className="counter">
        <p>Best Streak</p>
        <h3>{best}</h3>
      </div>
      <div className="counter">
        <p>Percentage</p>
        <h3>{percentage}%</h3>
      </div>
    </div>
  )
}

export default Streak;
