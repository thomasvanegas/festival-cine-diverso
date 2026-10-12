import React, { useEffect } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import YearBadges from './YearBadges';

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <>
      <div className="relative min-h-screen overflow-hidden flex flex-col justify-between">
        {/* Background Video (Only on the Hero viewport) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-20"
        >
          <source src="/videos/background_2026.mp4" type="video/mp4" />
          <source src="/videos/background_2026.webm" type="video/webm" />
          <img src="/Fondo.png" alt="Fallback Background" className="absolute inset-0 w-full h-full object-cover" />
        </video>

        {/* Brand Overlay Gradient (Red/Black) */}
        <div className="absolute inset-0 bg-gradient-to-b from-festivalRed/20 via-black/60 to-black -z-10" />

        {/* Grunge Film Texture Overlay on Hero */}
        <div className="absolute inset-0 bg-texture-196 opacity-[0.09] pointer-events-none mix-blend-overlay -z-10" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-grow px-6 pt-32 pb-16 text-center max-w-5xl mx-auto">
          <div data-aos="fade-up" data-aos-delay="200" className="mb-10 flex flex-col items-center">
            {/* Festival Badge */}
            <div className="bg-festivalRed/20 border border-festivalRed/50 backdrop-blur-md rounded-full px-5 py-2 mb-6 text-xs md:text-sm font-bold tracking-widest text-red-200 uppercase font-ample">
              IV Edición • 2026
            </div>

            {/* Main title graphics / text */}
            <div className="flex flex-col justify-center items-center gap-4 w-full">
              <img
                src="/2026/FICIDI_IV_PIEZAS_GRAFICAS/Logotipos/LOGOTIPO BLANCO.png"
                alt="IV Festival Internacional de Cine Diverso"
                className="max-w-full w-120 drop-shadow-[0_4px_20px_rgba(250,2,1,0.4)]"
              />
              <h2 className="text-2xl md:text-4xl font-black font-futura tracking-widest text-festivalRed uppercase mt-4">
                La Memoria Revelada
              </h2>
              <p className="text-sm md:text-base italic text-zinc-300 mt-2 max-w-xl font-light font-sans">
                “Hay memorias que nunca desaparecen. Solo esperan el momento de ser reveladas.”
              </p>
            </div>

            {/* Date and Location Badge */}
            <div className="flex flex-wrap gap-4 md:gap-8 justify-center items-center mt-6 text-white text-base md:text-xl font-futura font-extrabold bg-black/50 backdrop-blur-md px-6 py-3.5 rounded-full border border-festivalRed/40">
              <span className="flex items-center gap-1.5 font-futura font-extrabold tracking-wide uppercase text-festivalRed">
                <Calendar className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
                4 — 7 de noviembre de 2026
              </span>
              <span className="hidden md:inline text-zinc-600">|</span>
              <span className="flex items-center gap-1.5 font-futura font-extrabold tracking-wide uppercase text-white">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 mr-0.5" strokeWidth={2.5} />
                Barranquilla, Colombia
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content area with texture overlay */}
      <div id="content" className="bg-black text-white py-16 px-6 font-sans relative overflow-hidden">
        {/* Film texture overlay */}
        <div className="absolute inset-0 bg-texture-196 opacity-[0.08] pointer-events-none mix-blend-overlay -z-10" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Concepto Curatorial: La Memoria Revelada */}
          <div className="bg-zinc-950/70 border border-zinc-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-texture-238 opacity-[0.04] pointer-events-none -z-10" />
            <div className="max-w-4xl mx-auto space-y-6">
              <h3 className="text-3xl font-black font-futura text-festivalRed text-center tracking-wide uppercase">
                LA MEMORIA REVELADA
              </h3>
              <div className="space-y-4 text-zinc-300 font-light leading-relaxed text-center text-sm md:text-base font-sans">
                <p>
                  Cada edición del Festival Internacional de Cine Diverso nace de una pregunta distinta. Este año nos preguntamos por aquello que permanece.
                </p>
                <p>
                  La Memoria Revelada propone entender el cine como un acto de aparición. Como ese instante en el que una imagen emerge lentamente desde la oscuridad y vuelve visible aquello que durante mucho tiempo permaneció fuera de la mirada.
                </p>
                <p>
                  Inspirada en las memorias de las personas trans y travestis que transformaron la historia cultural de Barranquilla durante los años noventa, esta edición reconoce el cine como un archivo vivo donde conviven los afectos, los cuerpos, los territorios y las historias que continúan construyendo comunidad.
                </p>
                <p>
                  Más que una temática anual, La Memoria Revelada es el lenguaje que atraviesa la experiencia del festival: su identidad visual, su programación, sus espacios de encuentro y la manera en que entendemos el cine como una herramienta para preservar, compartir y construir memoria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black pt-8 pb-16 relative">
        <div className="absolute inset-0 bg-texture-196 opacity-[0.05] pointer-events-none mix-blend-overlay" />
        <YearBadges />
      </div>
    </>
  );
};

export default Home;
