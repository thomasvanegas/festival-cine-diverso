import React, { useState, useEffect } from 'react';
import { Calendar, Award, Film, Mail, Instagram, MapPin, Users, Heart, ExternalLink, ChevronRight, Info } from 'lucide-react';
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

  const [activeTab, setActiveTab] = useState<'info' | 'bases'>('info');

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
            <div className="flex flex-wrap gap-4 md:gap-8 justify-center items-center mt-6 text-white text-sm font-medium bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-zinc-800">
              <span className="flex items-center gap-1.5 font-ample tracking-wider uppercase text-festivalRed">
                <Calendar className="w-4.5 h-4.5" />
                4 — 7 de noviembre de 2026
              </span>
              <span className="hidden md:inline text-zinc-800">|</span>
              <span className="flex items-center gap-1.5 font-ample tracking-wider uppercase text-white">
                <MapPin className="w-4.5 h-4.5 mr-0.5" />
                Barranquilla, Colombia
              </span>
            </div>
          </div>

          {/* Convocatoria CTA Box */}
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="bg-black/60 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-festivalRed/30 max-w-2xl mx-auto shadow-2xl relative"
          >
            <div className="absolute inset-0 bg-festivalRed/5 animate-pulse rounded-3xl -z-10" />

            <h3 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-red-200 to-festivalRed mb-3 uppercase tracking-tight font-futura">
              Convocatoria Abierta
            </h3>

            <p className="text-sm md:text-base text-zinc-300 font-light font-sans mb-6">
              Inscripciones del 7 de julio al 25 de septiembre de 2026.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://festhome.com/festival/festival-de-cine-diverso"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-festivalRed text-white px-8 py-4 rounded-full font-black text-lg hover:bg-red-650 transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center space-x-2 w-full sm:w-auto justify-center"
              >
                <span>Participa aquí</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main content area with texture overlay */}
      <div id="content" className="bg-black text-white py-16 px-6 font-sans relative overflow-hidden">
        {/* Film texture overlay */}
        <div className="absolute inset-0 bg-texture-196 opacity-[0.08] pointer-events-none mix-blend-overlay -z-10" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* TAB Navigation */}
          <div className="flex justify-center border-b border-zinc-800 mb-12">
            <button
              onClick={() => setActiveTab('info')}
              className={`px-6 py-4 font-futura text-lg md:text-xl font-bold tracking-wide transition-all uppercase border-b-4 ${activeTab === 'info'
                ? 'border-festivalRed text-festivalRed'
                : 'border-transparent text-zinc-400 hover:text-white'
                }`}
            >
              Información del Festival
            </button>
            <button
              onClick={() => setActiveTab('bases')}
              className={`px-6 py-4 font-futura text-lg md:text-xl font-bold tracking-wide transition-all uppercase border-b-4 ${activeTab === 'bases'
                ? 'border-festivalRed text-festivalRed'
                : 'border-transparent text-zinc-400 hover:text-white'
                }`}
            >
              Bases de la Convocatoria
            </button>
          </div>

          {/* TAB 1: Información del Festival */}
          {activeTab === 'info' && (
            <div className="space-y-16 animate-fade-in">
              {/* Concept Section */}
              <div className="grid md:grid-cols-2 gap-12 items-stretch">
                <div className="bg-zinc-950/70 border border-zinc-900 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute inset-0 bg-texture-188 opacity-[0.03] pointer-events-none -z-10" />
                  <div>
                    <h3 className="text-2xl font-bold text-festivalRed font-futura mb-4">EL FESTIVAL</h3>
                    <p className="text-zinc-300 font-light leading-relaxed text-sm md:text-base font-sans">
                      El Festival Internacional de Cine Diverso es una plataforma internacional dedicada a la exhibición, circulación y fortalecimiento del cine con narrativas LGBTIQ+. Desde Barranquilla, Colombia, reunimos cineastas, artistas y públicos que creen en el poder del cine para construir memoria, representación, diálogo y nuevas formas de comprender la diversidad.
                    </p>
                  </div>
                </div>

                <div className="bg-zinc-950/70 border border-zinc-900 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute inset-0 bg-texture-188 opacity-[0.03] pointer-events-none -z-10" />
                  <div>
                    <h3 className="text-2xl font-bold text-white font-futura mb-4">CONVOCATORIA 2026</h3>
                    <div className="space-y-4 font-light text-zinc-300 text-sm md:text-base font-sans">
                      <p>
                        El Festival Internacional de Cine Diverso invita a cineastas nacionales e internacionales a participar en la cuarta edición del festival con cortometrajes que exploren la diversidad de experiencias, identidades y narrativas de las comunidades LGBTIQ+.
                      </p>
                      <ul className="space-y-2 border-t border-zinc-900 pt-4 font-sans text-sm">
                        <li className="flex justify-between"><span className="font-semibold text-white">Inscripciones:</span> <span className="text-zinc-200">7 de julio — 25 de septiembre de 2026</span></li>
                        <li className="flex justify-between"><span className="font-semibold text-white">Festival:</span> <span className="text-zinc-200">Barranquilla, Colombia</span></li>
                        <li className="flex justify-between"><span className="font-semibold text-white">Costo:</span> <span className="text-emerald-400 font-bold uppercase">Gratuito</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

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

              {/* Categories & Awards */}
              <div className="grid md:grid-cols-2 gap-12">
                {/* Categorías */}
                <div className="bg-zinc-950/70 border border-zinc-900 rounded-3xl p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-texture-188 opacity-[0.03] pointer-events-none -z-10" />
                  <div className="flex items-center gap-3 mb-6">
                    <Film className="w-6 h-6 text-festivalRed" />
                    <h3 className="text-xl md:text-2xl font-bold font-futura text-white uppercase">Categorías en Convocatoria</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      'Cortometraje de Ficción Nacional LGBTIQ+',
                      'Cortometraje de No Ficción Nacional LGBTIQ+',
                      'Cortometraje de Ficción Internacional LGBTIQ+',
                      'Cortometraje de No Ficción Internacional LGBTIQ+'
                    ].map((cat, idx) => (
                      <li key={idx} className="flex items-center gap-3 bg-black/50 p-4 rounded-xl border border-zinc-900">
                        <ChevronRight className="w-5 h-5 text-festivalRed" />
                        <span className="font-medium text-zinc-200 text-sm md:text-base font-sans">{cat}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 bg-black/35 border border-zinc-900 p-4 rounded-xl flex gap-3">
                    <Info className="w-5 h-5 text-festivalRed flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-zinc-400 font-light leading-relaxed font-sans">
                      Buscamos cortometrajes de ficción, documental, animación, experimental e híbridos. El concepto curatorial "La Memoria Revelada" no constituye una restricción temática.
                    </p>
                  </div>
                </div>

                {/* Premios */}
                <div className="bg-zinc-950/70 border border-zinc-900 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute inset-0 bg-texture-188 opacity-[0.03] pointer-events-none -z-10" />
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <Award className="w-6 h-6 text-festivalRed" />
                      <h3 className="text-xl md:text-2xl font-bold font-futura text-white uppercase">Premios</h3>
                    </div>
                    <p className="text-zinc-300 font-light text-sm md:text-base mb-4 font-sans">
                      <span className="font-bold text-festivalRed">El Colibrí</span> es el reconocimiento oficial del Festival Internacional de Cine Diverso. Símbolo de libertad, resistencia y belleza, representa el espíritu de las historias que desafían el olvido.
                    </p>
                    <div className="space-y-3 bg-black/50 p-5 rounded-2xl border border-zinc-900 font-sans">
                      <p className="text-sm font-semibold text-red-200">Las obras ganadoras recibirán:</p>
                      <ul className="space-y-2 text-sm text-zinc-300 font-light">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-festivalRed" />
                          <span>Estatuilla oficial "El Colibrí"</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-festivalRed" />
                          <span>Certificado oficial de premiación</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-festivalRed" />
                          <span>Posibilidad de circulación en muestras y festivales aliados</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-zinc-900 pt-4 font-sans">
                    <p className="text-xs uppercase font-bold text-zinc-500 mb-2">Categorías Premiadas:</p>
                    <div className="grid grid-cols-2 gap-2 text-2xs text-zinc-400 font-light">
                      <div>• Ficción Nacional</div>
                      <div>• Ficción Internacional</div>
                      <div>• No Ficción Nacional</div>
                      <div>• No Ficción Internacional</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Poster Showcase & Download Section */}
              <div className="bg-zinc-950/80 border border-zinc-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-texture-238 opacity-[0.05] pointer-events-none -z-10" />

                <div className="grid md:grid-cols-5 gap-8 items-center">
                  <div className="md:col-span-2 flex justify-center">
                    <div className="relative group max-w-xs rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl transition-all duration-300 hover:border-festivalRed/50">
                      <img
                        src="/2026/FICIDI_IV_PIEZAS_GRAFICAS/POSTER FICIDI IV.jpg"
                        alt="Póster Oficial IV FICIDI"
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                        <span className="text-xs text-white/90 font-bold uppercase tracking-wider font-ample bg-festivalRed/85 px-4 py-1.5 rounded-full">
                          IV Edición
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-3 space-y-6">
                    <div className="space-y-2">
                      <h4 className="text-2xl md:text-3xl font-black font-futura tracking-wide text-festivalRed uppercase">
                        PÓSTER OFICIAL IV FICIDI
                      </h4>
                      <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold font-ample">
                        La Memoria Revelada
                      </p>
                    </div>

                    <p className="text-sm font-sans font-light text-zinc-300 leading-relaxed">
                      Hay historias que resisten al silencio y no dejan de aullar.
                    </p>

                    <p className="text-sm font-sans font-light text-zinc-300 leading-relaxed">
                      Este es el póster oficial de la cuarta edición del Festival Internacional de Cine Diverso, una imagen que inaugura el universo visual de La Memoria Revelada, concepto que acompaña esta versión. Hay historias que resisten al silencio y no dejan de aullar.
                    </p>

                    <p className="text-sm font-sans font-light text-zinc-300 leading-relaxed">
                      El póster está protagonizado por Víctor Ladrón de Guevara, “La Loba”, leyenda viva de la noche travesti caribeña, artista y performer cuya historia forma parte de la memoria cultural de Barranquilla. Su presencia en esta imagen no busca representar únicamente a una persona, sino reconocer a toda una generación de personas trans y travestis que hicieron de la calle, el Carnaval, la noche y el arte escenarios de resistencia, libertad y creación.
                    </p>

                    <p className="text-sm font-sans font-light text-zinc-300 leading-relaxed">
                      Bajo el diseño del artista gráfico Basty, buscamos traducir este universo en una propuesta visual inspirada en los archivos fotográficos, el lenguaje del revelado analógico y las texturas populares de Barranquilla. Cada elemento del póster dialoga con la memoria como una imagen que nunca desaparece del todo, sino que espera el momento de volver a revelarse.El póster está protagonizado por Víctor Ladrón de Guevara, “La Loba”, leyenda viva de la noche travesti caribeña, artista y performer cuya historia forma parte de la memoria cultural de Barranquilla. Su presencia en esta imagen no busca representar únicamente a una persona, sino reconocer a toda una generación de personas trans y travestis que hicieron de la calle, el Carnaval, la noche y el arte escenarios de resistencia, libertad y creación.
                    </p>

                    <p className="text-sm font-sans font-light text-zinc-300 leading-relaxed">
                      Más que la imagen de una edición, este póster es una invitación a mirar hacia aquellas historias que siguen habitando nuestras calles, nuestros afectos y nuestra memoria colectiva.
                    </p>

                    <div className="bg-black/50 border border-zinc-800 rounded-xl p-4 flex items-start gap-3">
                      <Info className="w-5 h-5 text-festivalRed flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                        ¡Descarga el póster en alta resolución y compártelo en tus redes sociales utilizando el hashtag <span className="text-festivalRed font-bold">#IVFICIDI</span> para apoyar la circulación del cine diverso!
                      </p>
                    </div>

                    <a
                      href="/2026/FICIDI_IV_PIEZAS_GRAFICAS/POSTER FICIDI IV.jpg"
                      download="POSTER_FICIDI_IV_2026.jpg"
                      className="inline-flex items-center justify-center gap-2 bg-white text-black font-bold font-futura tracking-wide uppercase px-8 py-3.5 rounded-full hover:bg-festivalRed hover:text-white transform hover:scale-103 transition-all duration-300 shadow-xl"
                    >
                      <span>Descargar Póster Oficial</span>
                      <Film className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Por Qué Hacemos el festival */}
              <div className="bg-gradient-to-r from-zinc-950 via-black to-zinc-950 border border-zinc-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-texture-188 opacity-[0.03] pointer-events-none -z-10" />
                <div className="max-w-3xl mx-auto text-center space-y-6">
                  <h3 className="text-2xl md:text-3xl font-black font-futura text-festivalRed uppercase">
                    ¿POR QUÉ HACEMOS ESTE FESTIVAL?
                  </h3>
                  <div className="text-zinc-300 font-light text-sm md:text-base leading-relaxed space-y-4 text-left md:text-center font-sans">
                    <p>
                      Porque crecimos viendo muy pocas historias que se parecieran a nosotres. Porque durante mucho tiempo muchas de nuestras existencias fueron contadas desde el silencio, el estereotipo o la ausencia.
                    </p>
                    <p>
                      Creemos que el cine tiene la capacidad de transformar la manera en que una persona mira a otra, pero también la forma en que se mira a sí misma. Por eso creamos un espacio donde las historias diversas puedan encontrarse con nuevos públicos, generar conversaciones y convertirse en parte de la memoria colectiva.
                    </p>
                    <p className="font-semibold text-festivalRed font-sans">
                      Cada edición del Festival Internacional de Cine Diverso es una invitación a celebrar el cine como un lugar de representación, comunidad y libertad. Porque cuando una historia encuentra una pantalla, también encuentra la posibilidad de permanecer.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cifras Históricas */}
              <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-texture-196 opacity-[0.03] pointer-events-none -z-10" />
                <h4 className="text-lg font-bold font-futura text-zinc-400 uppercase tracking-widest mb-8">El Festival en Cifras</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-sans">
                  <div>
                    <span className="block text-4xl font-extrabold text-white">3</span>
                    <span className="text-xs text-zinc-500 uppercase tracking-wider">Ediciones Realizadas</span>
                  </div>
                  <div>
                    <span className="block text-4xl font-extrabold text-white">+120</span>
                    <span className="text-xs text-zinc-500 uppercase tracking-wider">Cortos Exhibidos</span>
                  </div>
                  <div>
                    <span className="block text-4xl font-extrabold text-white">+20</span>
                    <span className="text-xs text-zinc-500 uppercase tracking-wider">Países Participantes</span>
                  </div>
                  <div>
                    <span className="block text-4xl font-extrabold text-white">+5.000</span>
                    <span className="text-xs text-zinc-500 uppercase tracking-wider">Espectadores</span>
                  </div>
                </div>
              </div>

              {/* Contacto Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-zinc-950/40 p-6 md:p-8 rounded-3xl border border-zinc-900 text-sm font-sans">
                <div className="flex items-center gap-3 justify-center sm:justify-start">
                  <Mail className="w-5 h-5 text-festivalRed flex-shrink-0" />
                  <span className="text-center sm:text-left"><span className="font-semibold text-white">Correo:</span><br className="sm:hidden" /> festivaldecinediverso@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 justify-center sm:justify-center">
                  <Instagram className="w-5 h-5 text-festivalRed flex-shrink-0" />
                  <span className="text-center sm:text-left"><span className="font-semibold text-white">Instagram:</span><br className="sm:hidden" /> @festivaldecinediverso</span>
                </div>
                <div className="flex items-center gap-3 justify-center sm:justify-end">
                  <MapPin className="w-5 h-5 text-festivalRed flex-shrink-0" />
                  <span className="text-center sm:text-left"><span className="font-semibold text-white">Sede:</span><br className="sm:hidden" /> Barranquilla, Colombia</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Bases de la Convocatoria */}
          {activeTab === 'bases' && (
            <div id="bases" className="space-y-12 animate-fade-in font-light text-zinc-300 text-sm md:text-base leading-relaxed font-sans">
              {/* Bases de Participación */}
              <div className="bg-zinc-950/70 border border-zinc-900 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-texture-188 opacity-[0.03] pointer-events-none -z-10" />
                <h3 className="text-2xl font-bold font-futura text-festivalRed mb-6 uppercase tracking-wide">
                  Bases de Participación
                </h3>
                <ul className="space-y-4">
                  {[
                    'Podrán participar cortometrajes nacionales e internacionales con narrativas LGBTIQ+.',
                    'Se aceptan cortometrajes realizados a partir del año 2022.',
                    'Los cortometrajes deberán tener una duración mínima de 4 minutos y máxima de 30 minutos, incluyendo créditos.',
                    'Se aceptan cortometrajes de ficción, documental, animación, experimental e híbridos.',
                    'Si el idioma original del cortometraje no es español, deberá contar con subtítulos en español.',
                    'No se aceptarán obras que promuevan discursos de odio, misoginia, homofobia, transfobia o cualquier forma de discriminación.',
                    'La inscripción es gratuita y podrá realizarse únicamente a través de Festhome o mediante el formulario oficial de inscripción del festival.'
                  ].map((rule, index) => (
                    <li key={index} className="flex gap-3 items-start">
                      <span className="w-2 h-2 rounded-full bg-festivalRed mt-2 flex-shrink-0" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-zinc-500">Para conocer las condiciones completas de participación, consulta nuestro portal oficial:</p>
                  <a
                    href="https://festhome.com/festival/festival-internacional-de-cine-diverso"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-festivalRed font-semibold hover:text-red-400 text-sm"
                  >
                    Festhome Portal
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Términos y Condiciones de Participación */}
              <div className="bg-zinc-950/70 border border-zinc-900 rounded-3xl p-8 md:p-12 space-y-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-texture-238 opacity-[0.03] pointer-events-none -z-10" />
                <div className="border-b border-zinc-800 pb-4">
                  <h3 className="text-2xl font-bold font-futura text-festivalRed uppercase tracking-wide">
                    Términos y Condiciones de Participación
                  </h3>
                  <p className="text-xs text-zinc-500 tracking-wider uppercase mt-1">Festival Internacional de Cine Diverso 2026</p>
                </div>

                <p className="text-sm font-sans font-normal text-white">
                  Al inscribir un cortometraje en el Festival Internacional de Cine Diverso 2026, la persona participante acepta los siguientes términos y condiciones, que regulan la convocatoria, el proceso de selección, la exhibición y la posible circulación posterior de las obras audiovisuales:
                </p>

                <div className="space-y-6">
                  {/* Item 1 */}
                  <div className="bg-black/55 rounded-xl p-5 border border-zinc-900">
                    <h4 className="font-bold text-white font-futura mb-2 text-base">• Derechos de Exhibición</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                      La persona participante autoriza al Festival Internacional de Cine Diverso a exhibir su cortometraje como parte de la programación oficial del festival, que se realizará del 4 al 7 de noviembre de 2026 en Barranquilla, Colombia.
                    </p>
                    <p className="text-xs text-zinc-400 leading-relaxed mt-2 font-sans">
                      Asimismo, autoriza que la obra pueda ser proyectada posteriormente en muestras especiales, actividades académicas, espacios de formación, proyecciones itinerantes o eventos organizados por el festival, así como en colaboración con festivales e instituciones aliadas que promuevan el cine, la diversidad y los derechos de las personas LGBTIQ+.
                    </p>
                    <p className="text-xs leading-relaxed mt-2 font-medium text-festivalRed font-sans">
                      Esta autorización se concede exclusivamente con fines culturales, educativos y de difusión, y no implica la cesión de los derechos patrimoniales de la obra ni tendrá fines comerciales.
                    </p>
                  </div>

                  {/* Item 2 */}
                  <div className="bg-black/55 rounded-xl p-5 border border-zinc-900">
                    <h4 className="font-bold text-white font-futura mb-2 text-base">• Responsabilidad sobre Derechos de Autor</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                      La persona participante declara ser titular de los derechos necesarios para la inscripción y exhibición del cortometraje, incluyendo música, imágenes, material de archivo, interpretaciones, voces y cualquier otro contenido protegido por derechos de autor.
                    </p>
                    <p className="text-xs leading-relaxed mt-2 text-red-200 font-sans">
                      El Festival Internacional de Cine Diverso no será responsable por reclamaciones derivadas del uso indebido de derechos de terceros. Cualquier controversia legal será asumida exclusivamente por la persona participante, quien mantendrá indemne al festival frente a cualquier reclamación.
                    </p>
                  </div>

                  {/* Item 3 */}
                  <div className="bg-black/55 rounded-xl p-5 border border-zinc-900">
                    <h4 className="font-bold text-white font-futura mb-2 text-base">• Autorización para Uso Promocional</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                      La persona titular de los derechos autoriza al Festival Internacional de Cine Diverso a utilizar fragmentos del cortometraje, fotografías, fotogramas, tráileres, afiches y demás material promocional con fines de comunicación, prensa, difusión y promoción del festival en medios impresos, digitales, audiovisuales y redes sociales.
                    </p>
                  </div>

                  {/* Item 4 */}
                  <div className="bg-black/55 rounded-xl p-5 border border-zinc-900">
                    <h4 className="font-bold text-white font-futura mb-2 text-base">• Circulación Posterior</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                      Las obras seleccionadas podrán formar parte de muestras itinerantes, proyecciones especiales, actividades educativas o eventos organizados por el Festival Internacional de Cine Diverso con posterioridad a la edición 2026, siempre sin ánimo de lucro y en espacios que promuevan el cine, la diversidad, los derechos humanos y la cultura.
                    </p>
                  </div>

                  {/* Item 5 */}
                  <div className="bg-black/55 rounded-xl p-5 border border-zinc-900">
                    <h4 className="font-bold text-white font-futura mb-2 text-base">• Inscripción y Aceptación</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                      La inscripción de un cortometraje implica la aceptación íntegra de las presentes bases y términos de participación. Las obras que no cumplan con los requisitos establecidos podrán ser descalificadas del proceso de selección.
                    </p>
                    <p className="text-xs text-zinc-400 leading-relaxed mt-2 font-sans">
                      El Festival Internacional de Cine Diverso se reserva el derecho de resolver cualquier situación no contemplada en estos términos, así como de tomar las decisiones finales relacionadas con la programación y selección oficial.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
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
