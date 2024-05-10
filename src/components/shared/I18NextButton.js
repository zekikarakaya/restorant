import React from 'react';
import trflag from "../../img/turkiye.webp"
import enflag from "../../img/unitedkingdom.png"
import ruflag from "../../img/rusya.jpg"

const I18NextButton = ({ clickHandle }) => {
  const languages = [
    { code: "tr", flag: trflag },
    { code: "en", flag: enflag },
    { code: "ru", flag: ruflag }
  ];
  return (
    <div className='space-y-2'>
      {languages.map((language, index) => (
        <div key={index}>
          <button onClick={() => clickHandle(language.code)}>
            <img src={language.flag} alt='' />
          </button>
        </div>
      ))}
    </div>
  );
}

export default I18NextButton;
