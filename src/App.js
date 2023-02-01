import './App.css';
import HomePage from './pages/HomePage';
import Header from './components/Header/Header';
import CharactersPage from './pages/CharactersPage';
import CronologyPage from './pages/CronologyPage';
import GotHomesPage from './pages/GotHomesPage';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Footer from './components/Footer/Footer';

// import { MyContext } from './context/MyContext'
// import { useState } from 'react';
// import { useTranslation } from 'react-i18next';


function App() {
  // const {t, i18n} = useTranslation(['translation']);
  // const changeLanguage = (code) => {
  //   i18n.changeLanguage(code);
  // }
  return (
    <Router>
      <div className="App">
      <h1>Holaaaa</h1>
        <Header></Header>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>}/>
            <Route path="/characters" element={<CharactersPage></CharactersPage>}/>
            <Route path="/gothomes" element={<GotHomesPage></GotHomesPage>}/>
            <Route path="/cronology" element={<CronologyPage></CronologyPage>}/>
          </Routes>

          <Footer></Footer>

      </div>
    </Router>
  );
}

export default App;
