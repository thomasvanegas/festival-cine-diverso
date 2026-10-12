import React from 'react';
import Hero2025 from './festival2025/Hero2025';
import AboutEdition2025 from './festival2025/AboutEdition2025';
import Winners2025 from './festival2025/Winners2025';
import OfficialSelection2025 from './festival2025/OfficialSelection2025';
import GuestFilms2025 from './festival2025/GuestFilms2025';
import Roots2025 from './festival2025/Roots2025';

/**
 * III Edición (2025) — "Historias que nos habitan".
 *
 * Página histórica de la edición, con la identidad visual propia de 2025
 * (paleta morado/amarillo del poster; ver `tailwind.config.js` → `edicion25`
 * y `theme/editionTheme.ts` para el header y el footer).
 *
 * Cada sección vive en `components/festival2025/`; los datos, en
 * `data/festival2025.ts`.
 */
const Festival2025: React.FC = () => (
  <div className="min-h-screen animate-fade-in bg-edicion25-papel">
    <Hero2025 />
    <AboutEdition2025 />
    <Winners2025 />
    <OfficialSelection2025 />
    <GuestFilms2025 />
    <Roots2025 />
  </div>
);

export default Festival2025;
