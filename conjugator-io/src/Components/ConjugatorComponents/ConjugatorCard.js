import React from 'react';
import { Card } from 'semantic-ui-react';

import Streak from './Streak.js';
import Verb from './Verb.js';
import Submit from './Submit.js';

function ConjugatorCard() {
  return (
    <div>
      <Streak />
      <Verb />
      <Submit />
    </div>
  )
}

export default ConjugatorCard;
