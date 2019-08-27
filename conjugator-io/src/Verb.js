import React, { useState } from 'react';

function Verb() {

  const [verb, setVerb] = useState('Infinitive Verb');
  const [def, setDef] = useState('definition');
  const [tense, setTense] = useState('Tense');

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
