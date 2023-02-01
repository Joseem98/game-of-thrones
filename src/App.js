import './App.css';
import { useTranslation } from 'react';
import { MyContext } from './context/MyContext'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  // const {t, i18n} = useTranslation(['translation']);
  // const changeLanguage = (code) => {
  //   i18n.changeLanguage(code);
  // }


  return (
    <div className="App">
      <HomePage></HomePage>
    </div>
  );
}

export default App;
