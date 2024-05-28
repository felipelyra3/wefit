import './App.css';
import "./Styles/ResetCss.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Components/Homepage/homepage.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
