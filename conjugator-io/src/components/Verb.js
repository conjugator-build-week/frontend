import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import AccentLetters from './AccentLetters';
import { Button } from './Buttons';

function Verb(props) {

  function getRandom(max) {
    return Math.floor(Math.random()*Math.floor(max));
  }

  const [inf, setInf] = useState(""); //DONE
  const [conj, setConj] = useState({conj: ""}) //DONE
  const [def, setDef] = useState(""); //DONE
  const [tense, setTense] = useState(""); //DONE
  const [perf, setPerf] = useState(""); //DONE
  const [mood, setMood] = useState(""); //DONE

  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/ghidinelli/fred-jehle-spanish-verbs/master/jehle_verb_lookup.json")
    .then(res => {
      const vari = Object.entries(res.data);
      console.log(res.data);
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

  const [entry, setEntry] = useState({entry: ""}); //DONE
  console.log(entry);

  const {
    value,
    addAccent,
    setValue
  } = props;

  const changeHandler = event => {
    setEntry({ ...entry, entry: event.target.value })
  }

  const submitWord = event => {
    event.preventDefault();
    if (entry === conj) {
      alert('Correct!')
    } else {
      alert('Incorrect :(')
    }
  }

  const reLoad = () => {
    window.location.reload();
  }

  return (
    <Container className="verb">
      {/* Verb, Tense, & Definition */}
      <div className="verb-tense">
        <p style={{lineHeight: "0"}}>Verb:</p>
        <div className="verb-def">
          <h3>{inf}</h3>
          <p className="definition" style={{boxSizing: "border-box", paddingLeft: "2%"}}>({def})</p>
        </div>
        <p style={{lineHeight: "0"}}>Tense:</p>
        <h3>{tense}/{mood}</h3>
      </div>

      {/* Verb Entry */}
      <form className="verb-entry">
        <div className="entry-accent">
          <div className="perf-entry">
            <p className="performer">{perf}</p>
            <input
              className="field"
              id="verb"
              type="text"
              placeholder="Enter conjugated verb..."
              value={value}
              onChange={e => setValue(e.target.value)}
            />
          </div>

          {/* Accent Letters */}
          <AccentLetters  addAccent={addAccent} />
        </div>

        {/* Submit Button */}
        <Button>
          <button
            className="sub-button"
            type="submit"
            value={entry}
            onClick={submitWord}
          >
            Submit
          </button>
          <button 
            onClick={reLoad}
          >
            Next
          </button>
        </Button>
      </form>
    </Container>
  )
}

export default Verb;
