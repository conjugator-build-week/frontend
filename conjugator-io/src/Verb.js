import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Verb(props) {

  function getRandom(max) {
    return Math.floor(Math.random()*Math.floor(max));
  }

  const [inf, setInf] = useState(''); //DONE
  const [conj, setConj] = useState('') //DONE
  const [def, setDef] = useState(''); //DONE
  const [tense, setTense] = useState(''); //DONE
  const [perf, setPerf] = useState(''); //DONE
  const [mood, setMood] = useState(''); //DONE

  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/ghidinelli/fred-jehle-spanish-verbs/master/jehle_verb_lookup.json")
    .then(res => {
      const vari = Object.entries(res.data);
      // console.log(vari[getRandom(1)]);
      const obj = vari[getRandom(1000)];
      setConj(obj[0]); //DONE
      const newArr = obj[1];
      const makeArr = newArr[0];
      // console.log(makeArr);
      setInf(makeArr.infinitive); //DONE
      setTense(makeArr.tense); //DONE
      setDef(makeArr.translation); //DONE
      setPerf(makeArr.performer); //DONE
      setMood(makeArr.mood); //DONE
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  console.log(conj);

  const [entry, setEntry] = useState(''); //DONE

  const changeHandler = event => {
    setEntry({ ...entry, [event.target.name]: event.target.value })
}

  const submitWord = event => {
    event.preventDefault();
    if (entry == conj) {
      alert('Correct!')
    } else {
      alert('Incorrect :(')
    }
}

  const reLoad = () => {
    window.location.reload();
  }

  return (
    <div className="verb">
      <p>Verb:</p>
      <div className="verb-def">
        <h3>{inf}</h3>
        <p className="definition">({def})</p>
      </div>
      <p>Tense:</p>
      <h3>{tense}/{mood}</h3>
      <form className="verb-entry">
        <p className="performer">{perf}</p>
        <input
          className="field"
          id="verb"
          type="text"
          placeholder="Enter conjugated verb..."
          onChange={changeHandler}
        />
        <input
          className="sub-button"
          type="submit"
          onClick={submitWord}
        />
        <button onClick={reLoad}>Next</button>
      </form>

    </div>
  )
}

export default Verb;
