import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('default');

  // console.log('I run with EVERY render');

  // useEffect(() => {
  //   console.log('i run after EVERY render and at initial render');
  // });
  // useEffect(() => {
  //   console.log('i only run once')
  // }, []);
  // useEffect(() => {
  //   console.log('i run after EVERY render and at initial render');
  // });
  useEffect(() => {
    const search = async () => {   // RECOMMENDED WAY BY REACT
      axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: {term}
        }
      });
    };
    search()

    // (async () => {  // alternative
    //   axios.get('adsfasdfasdf');
    // })();
  }, [term]);

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
