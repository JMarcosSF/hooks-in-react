import React, { useState } from 'react';

const Search = () => {
  const [term, setTerm] = useState('default');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="">Enter Seerch Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            type="text" className="input"
          />
          <p>{term}</p>
        </div>
      </div>
    </div>
  );
}

export default Search;
