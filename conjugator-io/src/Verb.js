import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Verb() {

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
      console.log(makeArr);
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

  // function VerbCheck(e) {
  //
  //   const [entry, setEntry] = useState(''); //DONE
  //
  //   setEntry({value: e.target.value})
  //
  //   e.preventDefault();
  //
  //   if(entry == conj) {
  //     return (
  //       alert("Correct!")
  //     )
  //   } else {
  //     return (
  //       alert("Incorrect :(")
  //     )
  //   }
  // }

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
        />
        <input
          className="sub-button"
          type="submit"
          value="Submit"

        />
      </form>

    </div>
  )
}

export default Verb;

//onSubmit={VerbCheck()}
