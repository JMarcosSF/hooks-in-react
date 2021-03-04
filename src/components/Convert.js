import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GOOGLE_TRANSLATE_API_URL = 'https://translation.googleapis.com/language/translate/v2';
const GOOGLE_TRANSLATE_API_KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

const Convert = ({ language, text }) => {
  const [translation, setTranslation] = useState();
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    }
  }, [text]);

  useEffect(() => {
    const translate = async () => {
      const { data } = await axios.post(
        GOOGLE_TRANSLATE_API_URL,
        {},
        {
          params: {
            q: debouncedText,
            target: language,
            key: GOOGLE_TRANSLATE_API_KEY,
          },
        });
      setTranslation(data.data.translations[0].translatedText);
    }
    const resp = translate();
  }, [language, debouncedText]);
  return (
    <div>
      <h1>{translation ? translation : ''}</h1>
    </div>
  );
}

export default Convert;
