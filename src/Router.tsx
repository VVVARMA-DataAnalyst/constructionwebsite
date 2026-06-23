import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { Process } from './pages/Process';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import type { Project } from './types';

interface AppRouterProps {
  projects: Project[];
}

export const AppRouter: React.FC<AppRouterProps> = ({ projects }) => {
  return (
    <Routes>
      <Route path="/" element={<Home projects={projects} />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects projects={projects} />} />
      <Route path="/projects/:projectId" element={<ProjectDetail projects={projects} />} />
      <Route path="/process" element={<Process />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
