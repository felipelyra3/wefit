import './App.css';
import "./Styles/ResetCss.css"
import React from 'react';
import UserContext from './Components/Contexts/UserContext.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Components/Homepage/homepage.js';
import Header from './Components/Header/header.js';
import MovieCatalog from './Components/Movie Catalog/movieCatalog.js';
import { Page } from './Styles/GlobalStyles.js';
import { useState } from 'react';

function App() {
  const [itens, setItens] = useState(0);
  return (
    <>
      <UserContext.Provider value={{ itens, setItens }}>
        <Page>
          <Header></Header>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/MovieCatalog" element={<MovieCatalog />} />
            </Routes>
          </BrowserRouter>
        </Page>
      </UserContext.Provider>
    </>
  );
}

export default App;
