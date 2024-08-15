import Navbar from "./components/navbar/navbar";
import Acceuil from "./pages/acceuil/acceuil";
import Projet from "./pages/projet/projet";
import Contact from "./pages/contact/contact";
import Mco from "./pages/mco/mco";
import Layout from "./components/shared/Layout";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Acceuil />} />
                    <Route path="projet" element={<Projet />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="mco" element={<Mco />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
