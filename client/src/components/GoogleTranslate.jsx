import React, { useEffect } from 'react';
import './GoogleTranslate.css';

export const GoogleTranslate = () => {


  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement({
      pageLanguage: 'en'
    }, 'google_translate_element');
  };

  const changeLanguage = (lang) => {
    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event('change'));
    }
  };

  useEffect(() => {
    const addScript = document.createElement('script');
    addScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    addScript.async = true;
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = googleTranslateElementInit;

    return () => {
      document.body.removeChild(addScript);
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <div id="google_translate_element_container">
      {/* This div is now hidden via CSS, but it must remain in the code
        for the Google Translate script to function correctly. 
      */}
      <div id="google_translate_element"></div>
      
  
      <div>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('mr')}>मराठी</button>
        <button onClick={() => changeLanguage('hi')}>हिंदी </button>
        <button onClick={() => changeLanguage('ur')}>اردو</button>
      </div>
    </div>
  );
};