import React from 'react';
import Header from './Component/Header';
import Home from '../src/Pages/Home'
import Project from '../src/Pages/Project'
import ProjectDetails from './Component/ProjectDetails';
import { Routes, Route} from "react-router-dom";
import { Container } from '@material-ui/core';

function App() {
  return (
    <div>
      <Header />
      <Container>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/project/detail:id" element={<ProjectDetails />} />
      </Routes>
      </Container>
    </div>
  );
}

export default App;
