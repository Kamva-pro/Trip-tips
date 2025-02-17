import './App.css';
import CardDetails from './pages/CardDetails.jsx';
import HomePage from './pages/HomePage.jsx';
import Explore from './pages/Explore.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from './pages/Blog.jsx';
import Gallery from './pages/Gallery.jsx';

function App() {
  return (
    <BrowserRouter basename="/Trip-tips">
      <Routes >
        <Route path='/' element={<HomePage/>}/>
        <Route path='details' element={<CardDetails/>}/>
        <Route path='explore' element={<Explore/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path='gallery' element={<Gallery/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

