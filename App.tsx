
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Trajectory from './components/Trajectory';
import Lab from './components/Lab';
import Journal from './components/Journal';
import Projects from './components/Projects';
import Studio from './components/Studio';
import ProjectPrimeirosPassinhos from './components/ProjectPrimeirosPassinhos';
import ProjectBotiPlus from './components/ProjectBotiPlus';
import ProjectArcaneHub from './components/ProjectArcaneHub';
import Footer from './components/Footer';
import BackgroundAnimation from './components/BackgroundAnimation';

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative min-h-screen text-white font-sans selection:bg-purple-500/30">
        <BackgroundAnimation />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trajetoria" element={<Trajectory />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/lab" element={<Lab />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/projetos" element={<Projects />} />
            <Route path="/projetos/primeiros-passinhos" element={<ProjectPrimeirosPassinhos />} />
            <Route path="/projetos/boti-plus" element={<ProjectBotiPlus />} />
            <Route path="/projetos/arcane-hub" element={<ProjectArcaneHub />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
