import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from 'react';

const Gallery = lazy(() => import('./pages/Gallery.jsx'))
const Blog = lazy(() => import('./pages/Blog.jsx'))
const Explore = lazy(() => import('./pages/Explore.jsx'))
const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const CardDetails = lazy(() => import('./pages/CardDetails.jsx'))

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

