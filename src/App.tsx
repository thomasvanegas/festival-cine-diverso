import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Festival2024 from './components/Festival2024';
import Festival2023 from './components/Festival2023';
import AboutUs from './components/AboutUs';
import Filmmakers from './components/Filmmakers';
import BasesParticipacion from './components/BasesParticipacion';
import Home from './components/Home';

/**
 * Punto de entrada de la aplicación.
 *
 * Configura:
 * - React Router con las rutas del festival
 * - AOS (Animate On Scroll) para animaciones de entrada
 * - Layout global con Header y Footer
 */
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/2025" element={<Home />} />
            <Route path="/2023" element={<Festival2023 />} />
            <Route path="/2024" element={<Festival2024 />} />
            <Route path="/filmmakers" element={<Filmmakers />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/bases-participacion" element={<BasesParticipacion />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
