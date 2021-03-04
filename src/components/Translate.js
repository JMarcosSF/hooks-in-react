import React, { useState } from 'react';
import Dropdown from './Dropdown';

const options = [
  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Hindi',
    value: 'hi'
  },
]

const Translate = () => {
  const [lang, setLang] = useState(options[0]);
  const [inputText, setInputText] = useState('');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)}/>
        </div>
      </div>
      <Dropdown
        labelText="Select A Language"
        selectedOption={lang}
        onSelectedChange={setLang}
        options={options}/>
    </div>
  );
}

export default Translate;
