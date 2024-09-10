import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css';
import Header from './components/Header.tsx';
import Orcamento from './pages/Orcamento.tsx';
import Home from './pages/Home.tsx';
import Footer from './components/Footer.tsx';

const rootElement = document.getElementById('root') as HTMLElement;

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orcamento" element={<Orcamento />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);
