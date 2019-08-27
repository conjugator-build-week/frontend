import React, { useState } from 'react';

function Submit() {

  const [person, setPerson] = useState('Nosotros');

  return (
    <div className="submit">
      <form className="verb-entry">
        <p>{person}</p>
        <input type="text" placeholder="Enter conjugated verb..." />
      </form>
    </div>
  )
}

export default Submit;
