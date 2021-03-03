import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  console.log('results:', results);
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
      const { data } = (await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: {term}
        }
      }));
      setResults(data.query.search);
    };
    if (term) {
      search();
    }

    // (async () => {  // alternative
    //   axios.get('adsfasdfasdf');
    // })();
  }, [term]);

  const renderedResults = results.map((result, index) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button">Go</a>
        </div>
        <div className="content">
          <div
            className="header">
            {result.title}
          </div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    )
  });

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
        </div>
      </div>
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  );
}

export default Search;
