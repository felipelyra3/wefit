import './App.css';
import "./Styles/ResetCss.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Components/Homepage/homepage.js';
import Header from './Components/Header/header.js';

function App() {
  return (
    <>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
