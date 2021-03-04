import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
// Google Translate API Key
// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
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
  {
    label: 'Japanese',
    value: 'ja'
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
      <Convert language={lang.value} text={inputText} />
    </div>
  );
};

export default Translate;
