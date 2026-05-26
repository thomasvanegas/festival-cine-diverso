import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BackgroundDecoration from './ui/BackgroundDecoration';

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
  'Juan Diego Aguirre Gómez', 'Luz Rincón Barahona', 'Valentina Qaszulxjef', 'Carlos Altamar-Borja', 'Juan Pablo Gelvez Bustamante', 'Julián Ehalí', 'Junior Linares', 'Ramiro Ramírez', 'Julián Andrés Quijano Vivas', 'Álvaro Serje', 'Isabella Cárdenas', 'Juan de la Mar', 'Mariana Iacono', 'Joaquín “Chabata” Zavala', 'David Baquero', 'Wallace Nogueira', 'Marcelo Matos De Oliveira', 'Estefanía Serrano', 'Egoítz Carpintero', 'Lucas Galambos', 'Mariana S. Belaval', 'Matías Leiva', 'Roberto F. Canuto', 'Xiaoxi Xu', 'Yago Casariego', 'Matías Dinardo', 'Israel Córdova', 'Javier Becerril Gómez', 'Benedetta Cuicchi', 'Carlota Bonacasa', 'Lucía Criado Rosas', 'Sonia Martí Gallego', 'Borja Escribano', 'David S. Murga', 'Galar Egüén', 'Pablo Barbato', 'Jonay García', 'Willy Suárez', 'Diego Trevisan', 'Juan Yactayo Sono', 'Amaia Yoldi', 'Tamari Jvaridze', 'Débora Landi Gianmmarini', 'Carmen Vidal', 'Walter Monzón', 'Caio Bau', 'Rogelio Chicatti Villalobos', 'Nando Caballero',
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

  const fallbackDivRef = useRef<HTMLDivElement>(null);
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = 'none';
    if (fallbackDivRef.current) {
      fallbackDivRef.current.style.display = 'flex';
    }
  };

  return (
    <div className="min-h-screen w-full">
      {/* HERO estilo 2023/2024 */}
      <section className="relative flex flex-col items-center justify-center min-h-[40vh] py-24 overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-50 rounded-b-3xl">
        <BackgroundDecoration variant="pink" bgImage="/Footer.png" opacity={0.8} />
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-purple-900 text-center drop-shadow-[0_2px_16px_rgba(168,85,247,0.5)]" data-aos="fade-up">
          Hacedores de Cine
        </h1>
      </section>
      {/* DESCRIPCIÓN */}
      <section className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16 px-4">
          <div className="flex-1 text-gray-800 text-lg md:text-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-pink-600">Diversidad audiovisual colombiana</h2>
            <p className="mb-4">{description}</p>
            <p className="font-bold text-pink-500">31 (y contando) ya somos</p>
          </div>
          <div className="flex-1 flex justify-center items-center min-h-[250px]">
            {/* Imagen o div de color con ícono */}
            <img 
              src="/hacedores.jpg" 
              alt="Hacedores de Cine" 
              className="rounded-2xl shadow-lg w-full max-w-xs object-cover hidden md:block" 
              onError={handleImgError}
            />
            <div ref={fallbackDivRef} className="rounded-2xl shadow-lg w-full max-w-xs h-[250px] bg-gradient-to-br from-pink-400 via-yellow-200 to-purple-300 flex flex-col items-center justify-center text-pink-700 text-5xl md:text-6xl" style={{display: 'none'}}>
              <svg xmlns='http://www.w3.org/2000/svg' className="w-16 h-16 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A2 2 0 0020 6.382V5a2 2 0 00-2-2H6a2 2 0 00-2 2v1.382a2 2 0 00.447 1.342L9 10m6 0v10m0 0H9m6 0a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" /></svg>
            </div>
          </div>
        </div>
      </section>
      {/* PARTICIPANTES GRID */}
      <section className="w-full bg-white py-16">
        <h3 className="text-center text-2xl md:text-3xl font-bold text-pink-600 mb-8">Participantes</h3>
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filmmakersList.map((name) => (
            <div key={name} className="bg-pink-50 rounded-xl shadow-md p-8 flex items-center justify-center text-center h-32 font-semibold text-pink-700 text-lg hover:bg-yellow-100 transition-all duration-300">
              {name}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Filmmakers;
