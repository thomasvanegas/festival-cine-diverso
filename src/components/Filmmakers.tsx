import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const filmmakersList = [
  'Camilo Ochoa',
  'Carlos Enrique Altamar Borja',
  'Cenuver Giraldo Pinto',
  'Danny Armando Gonzalez Cueto',
  'Delfina Borrelli',
  'Fabian Fenel',
  'Francisco Quijano',
  'Triana Andrade',
  'Gefferson Truyol',
  'Harry Santiago Cárdenas',
  'Isabella Bernal Vega',
  'Izack Vergara',
  'James Camargo de Alba',
  'Javier Hernández Barraza',
  'Jhan Ascencio',
  'Jorge Cadena',
  'Jorge Andrés Escorcia Cantillo',
  'Juan José Arias Gil',
  'Julián Quintero',
  'Katto Alejandro Devia',
  'lex',
  'Li Aparicio',
  'Luzbeidy Monterrosa Atencio',
  'María del Pilar Escobar',
  'Mavis De La Ossa Martínez',
  'Natalia Pinilla',
  'Ross Dayana Lopez',
  'Sangelly Lopez',
  'Sebastián Castillo',
  'Steven Morales',
  'Yasser Angulo',
  'Juan Diego Aguirre Gómez', 'Luz Rincón Barahona', 'Valentina Qaszulxjef', 'Carlos Altamar-Borja', 'Juan Pablo Gelvez Bustamante', 'Julián Ehalí', 'Junior Linares', 'Ramiro Ramírez', 'Julián Andrés Quijano Vivas', 'Álvaro Serje', 'Isabella Cárdenas', 'Juan de la Mar', 'Mariana Iacono', 'Joaquín "Chabata" Zavala', 'David Baquero', 'Wallace Nogueira', 'Marcelo Matos De Oliveira', 'Estefanía Serrano', 'Egoítz Carpintero', 'Lucas Galambos', 'Mariana S. Belaval', 'Matías Leiva', 'Roberto F. Canuto', 'Xiaoxi Xu', 'Yago Casariego', 'Matías Dinardo', 'Israel Córdova', 'Javier Becerril Gómez', 'Benedetta Cuicchi', 'Carlota Bonacasa', 'Lucía Criado Rosas', 'Sonia Martí Gallego', 'Borja Escribano', 'David S. Murga', 'Galar Egüén', 'Pablo Barbato', 'Jonay García', 'Willy Suárez', 'Diego Trevisan', 'Juan Yactayo Sono', 'Amaia Yoldi', 'Tamari Jvaridze', 'Débora Landi Gianmmarini', 'Carmen Vidal', 'Walter Monzón', 'Caio Bau', 'Rogelio Chicatti Villalobos', 'Nando Caballero',
];

const description = `Hacedores de Cine es una iniciativa del Festival de Cine Diverso, creada con el objetivo de visibilizar y celebrar el trabajo de los cineastas LGBTIQ+ que hacen parte de la rica y vibrante comunidad cinematográfica de Colombia. Destacamos a los artistas que, a través de su talento y creatividad, aportan al cine colombiano desde una mirada inclusiva, dando visibilidad a las luchas, los amores y las identidades de las personas LGBTIQ+.`;

const Filmmakers = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">

      {/* Hero Section con textura */}
      <section className="relative flex flex-col items-center justify-center min-h-[45vh] py-28 overflow-hidden">
        {/* Grunge texture background */}
        <div className="absolute inset-0 bg-texture-238 opacity-[0.12] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black pointer-events-none" />
        {/* Decorative glows */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-festivalRed/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-festivalRed/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center px-6" data-aos="fade-up">
          <div className="inline-flex items-center justify-center bg-festivalRed/20 border border-festivalRed/50 rounded-full px-5 py-2 mb-6">
            <span className="text-xs uppercase font-bold tracking-widest text-red-200 font-ample">Festival Internacional de Cine Diverso</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white font-futura tracking-tight uppercase">
            Hacedores de <span className="text-festivalRed">Cine</span>
          </h1>
        </div>
      </section>

      {/* Descripción */}
      <section className="bg-black py-16 border-t border-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-texture-196 opacity-[0.05] pointer-events-none mix-blend-overlay" />
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 px-6 relative z-10">
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-festivalRed font-futura uppercase tracking-wide">
              Diversidad audiovisual colombiana
            </h2>
            <p className="text-zinc-300 text-sm md:text-base font-light font-sans leading-relaxed">{description}</p>
            <p className="font-bold text-white font-futura tracking-wide">
              <span className="text-festivalRed">{filmmakersList.length}</span> (y contando) ya somos
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 w-full max-w-xs aspect-[4/3] bg-zinc-950 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-texture-188 opacity-[0.06] pointer-events-none" />
              <img
                src="/hacedores.jpg"
                alt="Hacedores de Cine"
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="flex flex-col items-center justify-center gap-3 absolute inset-0">
                <svg xmlns='http://www.w3.org/2000/svg' className="w-16 h-16 text-festivalRed/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A2 2 0 0020 6.382V5a2 2 0 00-2-2H6a2 2 0 00-2 2v1.382a2 2 0 00.447 1.342L9 10m6 0v10m0 0H9m6 0a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
                <span className="text-xs text-zinc-600 font-sans uppercase tracking-wider">Imagen pronto</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Participantes Grid */}
      <section className="bg-zinc-950 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-texture-196 opacity-[0.04] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest font-bold text-festivalRed font-ample mb-2">Comunidad</p>
            <h3 className="text-2xl md:text-3xl font-bold font-futura text-white uppercase tracking-wide">
              Participantes
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filmmakersList.map((name, idx) => (
              <div
                key={`${name}-${idx}`}
                className="bg-black/60 border border-zinc-800 rounded-xl p-5 flex items-center justify-center text-center h-28 hover:border-festivalRed/50 hover:bg-zinc-900/60 transition-all duration-300 group"
              >
                <span className="font-medium text-zinc-300 text-sm font-sans group-hover:text-white transition-colors leading-snug">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Filmmakers;
