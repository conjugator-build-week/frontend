import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Verb() {

  function getRandom(max) {
    return Math.floor(Math.random()*Math.floor(max));
  }

  const [verb, setVerb] = useState('Infinitive Verb');
  const [def, setDef] = useState('definition');
  const [tense, setTense] = useState('Tense');

  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/ghidinelli/fred-jehle-spanish-verbs/master/jehle_verb_lookup.json")
    .then(res => {
      const verbs = Object.entries(res.data);
      console.log(verbs);
      setVerb(verb)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div className="verb">
      <p>Verb:</p>
      <div className="verb-def">
        <h3>{verb}</h3>
        <p className="definition">({def})</p>
      </div>
      <p>Tense:</p>
      <h3>{tense}</h3>
    </div>
  )
}

export default Verb;
