import Navbar from './components/navbar/navbar';
import Acceuil from './pages/acceuil/acceuil';
import Projet from './pages/projet/projet';
import Contact from './pages/contact/contact';
import Mco from './pages/mco/mco';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/projet" element={<Projet />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mco" element={<Mco />} />
        {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
        <Route path="*" element={<Acceuil />} />
      </Routes>
    </BrowserRouter>
  );
}
