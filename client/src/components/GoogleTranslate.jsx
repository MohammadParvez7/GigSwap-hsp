// src/components/GoogleTranslate.jsx

import React, { useEffect } from 'react';
import './GoogleTranslate.css';

export const GoogleTranslate = () => {

  // This function is still necessary to load the Google Translate script,
  // even if we hide the element it creates.
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement({
      pageLanguage: 'en'
    }, 'google_translate_element');
  };

  const changeLanguage = (lang) => {
    // The logic to find the select element remains the same.
    // It's a hidden element we're now just using for functionality.
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
      
      {/* These are the new buttons that replace the dropdown. */}
      <div>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('mr')}>Marathi</button>
        <button onClick={() => changeLanguage('hi')}>Hindi</button>
      </div>
    </div>
  );
};