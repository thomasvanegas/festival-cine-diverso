import type { RawFilm } from '../types';

/**
 * Selección Oficial 2025 — Ficción Nacional e Internacional.
 *
 * NOTA: Este dataset histórico mezcla convenciones de campo
 * (español / inglés, distintos nombres de propiedad).
 * Usar `normalizeFilm()` de `src/utils/normalizeFilm.ts` antes
 * de renderizar en la UI.
 */
export const seleccionOficial2025: RawFilm[] = [
  {
    titulo: 'La Máquina',
    año: 2023,
    director: 'Juan Diego Aguirre Gomez',
    pais: 'Colombia',
    sinopsis:
      'Después de una recaída, La Máquina, una mujer trans adicta al bazuco, regresa al instituto de rehabilitación para seguir con su tratamiento. Sin embargo, un nuevo interno pondrá en riesgo su voluntad y autocontrol.',
    enlace: '/movies/1z.jpg',
  },
  {
    titulo: 'Carne',
    año: 2022,
    director: 'Juan Diego Aguirre Gomez',
    pais: 'Colombia',
    sinopsis:
      'Jairo, un hombre gay de 50 años, que se dedica a la prostitución en un antro colombiano, no concibe otra vida fuera de lo que ya conoce. Helda, su patrona, le advierte que su ciclo en el lugar ha terminado.',
    enlace: '',
  },
  {
    titulo: 'Idilio',
    año: 2024,
    director: 'Luz Rincón Barahona',
    pais: 'Colombia',
    sinopsis:
      'Silvia y Victoria son las últimas sobrevivientes tras un cataclismo global que ha dejado el mundo en ruinas. Unidas por el dolor y el amor, recorren juntas los últimos días de su vida.',
    enlace: '/movies/3z.jpg',
  },
  {
    titulo: 'Amor en los tiempos de como sea que se llame el presente',
    año: 2025,
    director: 'Valentina Qaszulxkef',
    pais: 'Colombia',
    sinopsis:
      'Ilona, una pintora frustrada que trabaja como conserje, libera del lienzo a Gylda, una esclava retratada en una pintura colonial. Juntas, reconstruyen su vida a través del arte.',
    enlace: '/movies/4z.jpg',
  },
  {
    titulo: 'Zona desbloqueada',
    año: 2025,
    director: 'Carlos Altamar-borja',
    pais: 'Colombia',
    sinopsis:
      'David y Ángel descubren una tensión entre ellos durante una tarde de videojuegos, enfrentando el miedo de explorar zonas desconocidas.',
    enlace: '/movies/5z.jpg',
  },
  {
    titulo: 'In voluptas',
    año: 2024,
    director: 'Alejandro Devia, Juan Mayorga',
    pais: 'Colombia',
    sinopsis:
      'En medio del ruido de una fiesta, Laila y Draco se refugian en el baño, donde hallan libertad y respuestas a su búsqueda de familia.',
    enlace: '/movies/6z.jpg',
  },
  {
    titulo: 'El despertar',
    año: 2023,
    director: 'Juan Pablo Gelvez Bustamante',
    pais: 'Colombia',
    sinopsis:
      'Cristian, un joven universitario, comienza a dudar de su orientación sexual al conocer a un compañero de estudio y debe enfrentarse a su entorno.',
    enlace: '/movies/7z.jpg',
  },
  {
    titulo: 'Tacón roto',
    año: 2021,
    director: 'Julián Ehali',
    pais: 'Colombia',
    sinopsis:
      'Lola vive una noche inesperada cuando un hombre misterioso visita el burdel que frecuenta.',
    enlace: '',
  },
  {
    titulo: '¿A dónde va el amor?',
    año: 2025,
    director: 'Junior Linares',
    pais: 'Colombia',
    sinopsis:
      'Un ser marcado por la ausencia busca un amor inalcanzable, encontrando en la muerte una forma de refugio y calma.',
    enlace: '/movies/8z.JPG',
  },
  {
    titulo: 'Bat Edukeyshon',
    año: 2025,
    director: 'Ramiro Ramírez',
    pais: 'Colombia',
    sinopsis:
      'Camilo, un joven gay, se enfrenta a su padre en una noche de confesiones y violencia, explorando la masculinidad y la reconciliación.',
    enlace: '/movies/9z.jpg',
  },
  {
    titulo: 'Noche de trans, noche de cunt',
    año: 2025,
    director: 'Julián Andrés Quijano Vivas',
    pais: 'Colombia',
    sinopsis:
      'En víspera navideña, la comunidad ballroom de Bogotá celebra su existencia desde la disidencia y la resistencia festiva.',
    enlace: '/movies/1d.jpg',
  },
  {
    titulo: 'ANDRU',
    año: 2023,
    director: 'Álvaro Serje',
    pais: 'Colombia',
    sinopsis:
      'Retrato del artista visual Andru Suárez, su obra y reflexiones sobre identidad, género y aceptación.',
    enlace: '/movies/2d.jpg',
  },
  {
    titulo: 'Aitana',
    año: 2025,
    director: 'Isabella Cardenas',
    pais: 'Colombia',
    sinopsis:
      'Jhon Alexander, enfermero y drag queen, busca reconciliarse con su madre y su identidad durante un show transformista.',
    enlace: '/movies/3d.jpg',
  },
  {
    titulo: 'El Carnaval Nos Une: Festival Nacional Trans de la Cumbia',
    año: 2024,
    director: 'Ximena Carolina Franco',
    pais: 'Colombia',
    sinopsis:
      'Narrativa de las embajadoras Trans del Festival Nacional Trans de la Cumbia de Barranquilla, resaltando su valor cultural y social.',
    enlace: '/movies/4d.PNG',
  },
  {
    titulo: 'El VIH se enamoró de mí',
    año: 2024,
    director: 'Juan de la Mar y Mariana Iacono',
    pais: 'Colombia',
    sinopsis:
      'Una mujer VIH positiva abraza su sexualidad y placer en un relato de justicia y autonomía.',
    enlace: '/movies/5d.jpg',
  },
  {
    titulo: 'La letra con sangre entra',
    año: 2025,
    director: 'Francisco Quijano',
    pais: 'Colombia',
    sinopsis:
      'Videoarte sobre traumas infantiles, crianza autoritaria y la reconciliación con el niño interior.',
    enlace: '/movies/6d.jpg',
  },
  // --- Selección internacional (convención diferente) ---
  {
    titulo: 'Más allá de la culpa',
    anio: 2025,
    por: 'Israel Cordova',
    pais: 'Brasil',
    sinopsis:
      'En el corazón del campo, donde la tierra guarda sus secretos y las noches se llenan de baladas campestres y silencios densos...',
    link: '/movies/1s.jpg',
  },
  {
    titulo: 'Autorretrato',
    anio: 2024,
    por: 'Javier Becerril Gómez',
    pais: 'España',
    sinopsis:
      'Dani siempre ha sentido que es diferente a los chicos de su edad y que debía mantenerlo en secreto...',
    link: '/movies/2s.jpg',
  },
  {
    titulo: 'Habla bajo',
    anio: 2024,
    por: 'Benedetta Cuicchi',
    pais: 'España',
    sinopsis:
      'Un encuentro inesperado entre dos mujeres pone en duda lo que callamos por miedo y lo que decimos por amor.',
    link: '/movies/3s.jpg',
  },
  {
    titulo: 'Plantón',
    anio: 2024,
    por: 'Carlota Bonacasa',
    pais: 'España',
    sinopsis:
      'Una historia sobre la espera, la ilusión y los pequeños actos de resistencia en el amor.',
    link: '/movies/4s.jpg',
  },
  {
    titulo: 'No estamos locos',
    anio: 2025,
    por: 'Lucía Criado Rosas',
    pais: 'España',
    sinopsis:
      'Entre risas y rebeldía, un grupo de jóvenes desafía los prejuicios que los tachan de "locos" solo por amar distinto.',
    link: '/movies/5s.jpg',
  },
  {
    titulo: 'Violetas',
    anio: 2024,
    por: 'Borja Escribano',
    pais: 'España',
    sinopsis:
      'Un viaje poético sobre la pérdida, la identidad y los recuerdos que florecen en el silencio.',
    link: '/movies/6s.jpg',
  },
  {
    titulo: 'Ruth',
    anio: 2025,
    por: 'Sonia Martí Gallego',
    pais: 'España',
    sinopsis:
      'Ruth enfrenta el peso de una sociedad que le exige ser algo que no es, mientras busca su lugar en el mundo.',
    link: '/movies/7s.jpg',
  },
  {
    titulo: 'Extraviado',
    anio: 2025,
    por: 'David S. Murga',
    pais: 'España',
    sinopsis:
      'Un hombre recorre la ciudad intentando encontrarse a sí mismo entre el ruido, las luces y la soledad.',
    link: '/movies/8s.jpg',
  },
  {
    titulo: 'Ella, Ella',
    anio: 2024,
    por: 'Galar Egüén',
    pais: 'España-Venezuela',
    sinopsis:
      'Dos mujeres entrelazan sus vidas en un amor que desafía la distancia, el tiempo y las convenciones.',
    link: '/movies/9s.jpg',
  },
  {
    titulo: 'Seamos mejores',
    anio: 2025,
    por: 'Iñaki Goldaracena',
    pais: 'España',
    sinopsis:
      'Una conversación pendiente entre dos exnovios reabre heridas, pero también la posibilidad de sanar.',
    link: '/movies/10s.jpg',
  },
  {
    titulo: 'You\u2019re the one I love',
    anio: 2024,
    por: 'Pablo Barbato',
    pais: 'España',
    sinopsis:
      'Una carta de amor visual a los amores imposibles y a la belleza de los momentos efímeros.',
    link: '/movies/11s.jpg',
  },
  {
    titulo: 'Cris',
    anio: 2024,
    por: 'Jonay García',
    pais: 'España',
    sinopsis:
      'Cris se enfrenta a un cambio de vida que la llevará a descubrir una versión más libre de sí misma.',
    link: '/movies/12s.jpg',
  },
  {
    titulo: 'Giros',
    anio: 2024,
    por: 'Willy Suárez',
    pais: 'España',
    sinopsis:
      'El amor, el miedo y la identidad giran sobre sí mismos en un relato íntimo lleno de movimiento y color.',
    link: '/movies/13s.jpg',
  },
  {
    titulo: 'Does He Like Me?',
    anio: 2024,
    por: 'Diego Trevisan',
    pais: 'Brasil',
    sinopsis:
      'Lucio es un adolescente en un viaje de autodescubrimiento y transición de género. Su amiga Ana lo acompaña y apoya en cada etapa de este proceso. Sin embargo, a medida que Lúcio se siente más seguro y cómodo con su nueva identidad, Ana empieza a sentir algo.',
  },
  {
    titulo: 'Chica',
    anio: 2023,
    por: 'Juan Yactayo Sono',
    pais: 'Perú',
    sinopsis:
      'Después de ser atacada por la policía, Katya, una trabajadora sexual trans, tiene la oportunidad de denunciar públicamente la agresión. Decide no hacerlo para proteger a su madre, pero la muerte de su mejor amiga a manos de los mismos policías cambia su decisión para siempre.',
  },
  {
    titulo: 'Intercambio',
    anio: 2024,
    por: 'Amaia Yoldi',
    pais: 'España',
    sinopsis:
      'Antonio e Inés, dos desconocidos, se citan a través de una aplicación para intercambiar algo más que objetos. En un encuentro íntimo, descubren complicidades y límites que no esperaban.',
  },
  {
    titulo: 'Zoe',
    anio: 2025,
    por: 'Tamari Jvaridze',
    pais: 'España',
    sinopsis:
      'Basada en hechos reales, la historia de Zoe, una joven prostituta transexual que encuentra esperanza y amor en Gina, una mujer trans que la protege y guía en un mundo hostil.',
  },
  {
    titulo: 'Arácnidas',
    anio: 2025,
    por: 'Débora Landi Giammarini',
    pais: 'Argentina - Uruguay',
    sinopsis:
      'La relación entre una profesora y su alumna se convierte en una reflexión sobre los vínculos de poder y la violencia simbólica, usando la conducta de las arañas como metáfora.',
    link: '/movies/31b.jpg',
  },
  {
    titulo: 'Casa diversa',
    anio: 2024,
    por: 'Carmen Vidal',
    pais: 'España',
    sinopsis:
      'En Paraguay, un país marcado por la discriminación, Casa Diversa ofrece refugio y esperanza a personas trans que buscan vivir con dignidad y seguridad.',
    link: '/movies/1a.jpg',
  },
  {
    titulo: 'Después del reflejo',
    anio: 2025,
    por: 'Walter Monzón',
    pais: 'Argentina',
    sinopsis:
      'Un retrato colectivo del movimiento LGBTIQ+ en Misiones, donde artistas y activistas se sostienen entre sí frente a la incertidumbre política.',
    link: '/movies/2a.jpg',
  },
  {
    titulo: 'A bolha',
    anio: 2025,
    por: 'Caio Bau',
    pais: 'Brasil',
    sinopsis:
      'Retrato íntimo de la liga nacional de fútbol LGBTQIA+ en São Paulo, donde atletas comparten sus historias de lucha, identidad y pasión por el deporte.',
    link: '/movies/3a.jpg',
  },
  {
    titulo: 'Xhárdonix Xha',
    anio: 2023,
    por: 'Rogelio Chicatti Villalobos',
    pais: 'México',
    sinopsis:
      'Jared, un joven no binario apasionado por el drag, crea a Xhárdonix, su refugio y forma de resistencia frente a una sociedad conservadora.',
    link: '/movies/4a.jpg',
  },
  {
    titulo: 'Smoke, smoke, smoke',
    anio: 2023,
    por: 'Nando Caballero',
    pais: 'España',
    sinopsis:
      'Una experiencia musical caleidoscópica y fantástica sobre deseo, memoria y sentidos en una ciudad que late al ritmo del humo.',
  },
  {
    titulo: 'No estabas aquí',
    anio: 2024,
    por: 'Joaquín \u2018Chabata\u2019 Zavala',
    pais: 'Perú',
    sinopsis:
      'Riley, un adolescente vulnerable, intenta reconstruir su identidad mientras enfrenta el duelo y la soledad que siguen a un amor que se fue.',
  },
  {
    titulo: 'Fuck Off',
    anio: 2024,
    por: 'David Baquero',
    pais: 'España',
    sinopsis:
      'Dos amigos van a una fiesta; uno de ellos decide cortar con una relación que lo consume. Una noche de límites, lealtades y liberación.',
  },
  {
    titulo: 'o amor não cabe na sala',
    anio: 2024,
    por: 'Wallace Nogueira, Marcelo Matos De Oliveira',
    pais: 'Brasil',
    sinopsis:
      'Videoclip que expande el amor más allá de los muros y etiquetas. Una exploración audiovisual sobre afecto, deseo y libertad.',
  },
  {
    titulo: '¿Tienes sitio?',
    anio: 2025,
    por: 'Estefania Serrano',
    pais: 'España',
    sinopsis:
      'Alex espera a un chico en el hostal donde trabaja. Entre encuentros y preguntas, decide qué espacio ocupa el deseo en su vida.',
  },
  {
    titulo: 'Dani & Billy',
    anio: 2025,
    por: 'Egoitz Carpintero',
    pais: 'España',
    sinopsis:
      'Dos jóvenes pasan la noche conversando y descubriendo que a veces el encuentro más simple puede cambiarlo todo.',
  },
  {
    titulo: 'Desvíos',
    anio: 2024,
    por: 'Lucas Galambos',
    pais: 'Argentina',
    sinopsis:
      'Tras una fiesta que termina mal, Alan emprende una fuga que revela el peso de los secretos y las rutas que elegimos para sobrevivir.',
  },
  {
    titulo: 'En duda siempre a la izquierda',
    anio: 2024,
    por: 'Mariana S. Belaval',
    pais: 'Puerto Rico',
    sinopsis:
      'Un adolescente ciclista, que ha vivido violencia, pedalea entre la culpa y la esperanza mientras se pregunta qué camino tomar.',
  },
  {
    titulo: 'El bosque me habló sobre ti',
    anio: 2025,
    por: 'Matías Leiva',
    pais: 'Chile',
    sinopsis:
      'Eleonora, pintora frustrada, rescata a Gylda de un cuadro colonial. Juntas pintan un nuevo destino donde por fin cabe la empatía.',
  },
  {
    titulo: 'Block Down: colapso',
    anio: 2025,
    por: 'Roberto F. Canuto, Xiaoxi Xu',
    pais: 'España',
    sinopsis:
      'Obra colaborativa que reúne miradas experimentales sobre cuerpos, espacios y derrumbes. Un tránsito audiovisual entre lo íntimo y lo colectivo.',
  },
  {
    titulo: 'Silencios',
    anio: 2025,
    por: 'Yago Casariego',
    pais: 'España',
    sinopsis:
      'Ana está a punto de casarse. Antes, necesita enfrentarse a los silencios que marcaron su pasado, y decidir qué quiere decir ahora.',
  },
  {
    titulo: 'Hombre',
    anio: 2025,
    por: 'Matías Dinardo',
    pais: 'Argentina',
    sinopsis:
      'Un hombre se enfrenta a una masculinidad heredada y opresiva, y descubre que el acto de cuestionarla puede ser su salvación.',
  },
];
