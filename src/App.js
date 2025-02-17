import './App.css';
import CardDetails from './CardDetails.jsx';
import Explore from './Explore.jsx';
import HomePage from './HomePage.jsx';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<HomePage/>}/>
        <Route path='details' element={<CardDetails/>}/>
        <Route path='explore' element={<Explore/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

