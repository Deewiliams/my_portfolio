import React from 'react';
import Header from './Component/Header';
import Home from '../src/Pages/Home'
import Project from '../src/Pages/Project'
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
