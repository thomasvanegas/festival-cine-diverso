/**
 * III Edición (2025) — "Historias que nos habitan".
 *
 * Fuente de verdad: docs/edicion_2025.docx (selección oficial, ganadores y
 * películas invitadas). Los posters están optimizados (WebP, máx. 760 px de
 * ancho) en `public/imgs/edicion_2025/optimized/`; las piezas decorativas, en
 * `public/imgs/edicion_2025/decor/`.
 *
 * Notas de normalización respecto al docx:
 * - Títulos en mayúscula sostenida pasados a formato oración y sin el sufijo " - 2025".
 * - Coautorías unidas con " y ".
 * - Países como códigos ISO 3166-1 alfa-2 (las banderas viven en /public/flags/<codigo>.svg).
 * - Los 4 ganadores también forman parte de la selección oficial (`ganador: true`);
 *   el docx no indica su país ni su categoría, por eso se muestran como "Cortometraje ganador".
 * - "Como una loba" no trae país en el docx: se muestra sin bandera.
 */
import type { CodigoPais } from './seleccionOficial2026';

export interface Corto2025 {
  id: string;
  titulo: string;
  /** Dirección tal como viene del docx (coautorías unidas con " y "). */
  director: string;
  /** Vacío si el docx no indica país. */
  paises: CodigoPais[];
  /** Ruta pública del poster optimizado. */
  poster: string;
  /** Ancho / alto del poster optimizado (decide cómo encajarlo en la card). */
  posterRatio: number;
  /** Solo los 4 cortometrajes ganadores. */
  ganador?: boolean;
}

const POSTERS = '/imgs/edicion_2025/optimized';
const DECOR = '/imgs/edicion_2025/decor';

/** Poster oficial de la III Edición (recortado sin la banda inferior en blanco). */
export const posterImage2025 = {
  src: `${POSTERS}/poster-oficial.webp`,
  ratio: 0.705,
};

/** Piezas gráficas de la identidad 2025 (todas optimizadas, con transparencia). */
export const decor2025 = {
  arbolPrincipal: `${DECOR}/arbol-principal.webp`,
  robleAmarillo: `${DECOR}/roble-amarillo.webp`,
  robleMorado: `${DECOR}/roble-morado.webp`,
  floresAmarillas1: `${DECOR}/flores-amarillas-1.webp`,
  floresAmarillas2: `${DECOR}/flores-amarillas-2.webp`,
  floresMoradas: `${DECOR}/flores-moradas.webp`,
  tierra: `${DECOR}/tierra.webp`,
  resplandor: `${DECOR}/resplandor.webp`,
  nubes: `${DECOR}/nubes.webp`,
  titulo: `${DECOR}/titulo.webp`,
  subtitulo: `${DECOR}/subtitulo.webp`,
  fechas: `${DECOR}/fechas.webp`,
  colibri: `${DECOR}/colibri.png`,
} as const;

/** Fechas oficiales de realización de la III Edición. */
export const festivalDates2025 = {
  rangeLabel: '21 al 25 de Octubre',
  year: '2025',
  location: 'Barranquilla, Colombia',
};

/** Párrafos de la reseña oficial de la III Edición (2025). */
export const festivalDescription2025: string[] = [
  'La tercera edición del Festival Internacional de Cine Diverso marcó un antes y un después en la historia del proyecto. Fue el año en el que el festival comenzó a consolidarse como una plataforma internacional para las narrativas LGBTIQ+, ampliando su alcance y fortaleciendo los lazos con cineastas, artistas y públicos de distintos territorios.',
  'Bajo el concepto “Historias que nos habitan”, esta edición nos invitó a mirar hacia aquello que llevamos dentro, las memorias, los afectos, las raíces y las experiencias que, muchas veces en silencio, terminan dando forma a las historias que contamos. Creímos profundamente que el cine diverso también nace de esos lugares íntimos desde donde construimos identidad, comunidad y nuevas maneras de habitar el mundo.',
  'La respuesta superó nuestras expectativas. Recibimos más de 250 cortometrajes inscritos, consolidando por primera vez una convocatoria de alcance internacional y conformando una selección oficial integrada por obras de ficción y no ficción provenientes de más de 7 países. Cada película amplió la conversación y permitió que distintas realidades dialogaran desde la pantalla.',
  'Esta edición también fortaleció los espacios de encuentro entre el público y quienes hacen posible el cine. Contamos con la participación de directoras y directores colombianos como Carmen Oquendo y Steven Morales, quien presentó el estreno de su largometraje Agua Salá. Estos espacios reafirmaron nuestra convicción de que el cine no termina cuando se apagan las luces de la sala, continúa en las conversaciones, en las preguntas y en los vínculos que nacen después de cada proyección.',
  'Al mirar esta tercera edición entendemos que el festival ya no solo estaba creciendo en cifras o en alcance internacional. También estaba encontrando una identidad cada vez más sólida. Una identidad construida desde las historias que nos atraviesan, nos transforman y nos recuerdan que el cine sigue siendo una de las formas más poderosas de encontrarnos con las demás personas y con nosotros mismos.',
];

/** Cifras citadas en la reseña oficial. */
export const festivalStats2025 = {
  inscritos: '+250',
  paises: '+7',
} as const;

/**
 * Selección oficial (50 obras): primero las de Colombia, luego las internacionales.
 * Incluye a los 4 ganadores en su lugar de origen.
 */
export const seleccionOficial2025: Corto2025[] = [
  { id: 'la-maquina', titulo: 'La Máquina', director: 'Juan Diego Aguirre Gomez', paises: ['co'], poster: `${POSTERS}/la-maquina.webp`, posterRatio: 0.667 },
  { id: 'carne', titulo: 'Carne', director: 'Juan Diego Aguirre Gomez', paises: ['co'], poster: `${POSTERS}/carne.webp`, posterRatio: 0.711 },
  { id: 'idilio', titulo: 'Idilio', director: 'Luz Rincón Barahona', paises: ['co'], poster: `${POSTERS}/idilio.webp`, posterRatio: 0.75, ganador: true },
  { id: 'amor-en-los-tiempos', titulo: 'Amor en los tiempos de como sea que se llame el presente', director: 'Valentina Qaszulxkef', paises: ['co'], poster: `${POSTERS}/amor-en-los-tiempos.webp`, posterRatio: 0.75 },
  { id: 'zona-desbloqueada', titulo: 'Zona desbloqueada', director: 'Carlos Altamar-Borja', paises: ['co'], poster: `${POSTERS}/zona-desbloqueada.webp`, posterRatio: 0.707 },
  { id: 'in-voluptas', titulo: 'In voluptas', director: 'Alejandro Devia y Juan Mayorga', paises: ['co'], poster: `${POSTERS}/in-voluptas.webp`, posterRatio: 0.8 },
  { id: 'el-despertar', titulo: 'El despertar', director: 'Juan Pablo Gelvez Bustamante', paises: ['co'], poster: `${POSTERS}/el-despertar.webp`, posterRatio: 0.667 },
  { id: 'tacon-roto', titulo: 'Tacón roto', director: 'Julián Ehali', paises: ['co'], poster: `${POSTERS}/tacon-roto.webp`, posterRatio: 0.905 },
  { id: 'a-donde-va-el-amor', titulo: '¿A dónde va el amor?', director: 'Junior Linares', paises: ['co'], poster: `${POSTERS}/a-donde-va-el-amor.webp`, posterRatio: 0.8 },
  { id: 'bat-edukeyshon', titulo: 'Bat Edukeyshon', director: 'Ramiro Ramírez', paises: ['co'], poster: `${POSTERS}/bat-edukeyshon.webp`, posterRatio: 0.833 },
  { id: 'noche-de-trans', titulo: 'Noche de Trans, Noche de Cunt', director: 'Julián Andrés Quijano Vivas', paises: ['co'], poster: `${POSTERS}/noche-de-trans.webp`, posterRatio: 0.707 },
  { id: 'andru', titulo: 'Andru', director: 'Álvaro Serje', paises: ['co'], poster: `${POSTERS}/andru.webp`, posterRatio: 0.702 },
  { id: 'aitana', titulo: 'Aitana', director: 'Isabella Cardenas', paises: ['co'], poster: `${POSTERS}/aitana.webp`, posterRatio: 0.675 },
  { id: 'el-carnaval-nos-une', titulo: 'El carnaval nos une: Festival Nacional Trans de la Cumbia', director: 'Ximena Carolina Franco', paises: ['co'], poster: `${POSTERS}/el-carnaval-nos-une.webp`, posterRatio: 0.562 },
  { id: 'el-vih-se-enamoro-de-mi', titulo: 'El VIH se enamoró de mí', director: 'Juan de la Mar y Mariana Iacono', paises: ['co'], poster: `${POSTERS}/el-vih-se-enamoro-de-mi.webp`, posterRatio: 0.714, ganador: true },
  { id: 'la-letra-con-sangre-entra', titulo: 'La letra con sangre entra', director: 'Francisco Quijano', paises: ['co'], poster: `${POSTERS}/la-letra-con-sangre-entra.webp`, posterRatio: 0.667 },
  { id: 'smoke-smoke-smoke', titulo: 'Smoke, Smoke, Smoke', director: 'Nando Caballero', paises: ['es'], poster: `${POSTERS}/smoke-smoke-smoke.webp`, posterRatio: 0.707 },
  { id: 'no-estabas-aqui', titulo: 'No estabas aquí', director: 'Joaquín “Chabata” Zavala', paises: ['pe'], poster: `${POSTERS}/no-estabas-aqui.webp`, posterRatio: 0.675 },
  { id: 'fuck-off', titulo: 'Fuck Off', director: 'David Baquero', paises: ['es'], poster: `${POSTERS}/fuck-off.webp`, posterRatio: 0.702 },
  { id: 'o-amor-nao-cabe-na-sala', titulo: 'O amor não cabe na sala', director: 'Wallace Nogueira y Marcelo Matos', paises: ['br'], poster: `${POSTERS}/o-amor-nao-cabe-na-sala.webp`, posterRatio: 1.778, ganador: true },
  { id: 'tienes-sitio', titulo: '¿Tienes sitio?', director: 'Estefanía Serrano', paises: ['es'], poster: `${POSTERS}/tienes-sitio.webp`, posterRatio: 0.707 },
  { id: 'dani-y-billy', titulo: 'Dani & Billy', director: 'Egoitz Carpintero', paises: ['es'], poster: `${POSTERS}/dani-y-billy.webp`, posterRatio: 0.707 },
  { id: 'desvios', titulo: 'Desvíos', director: 'Lucas Galambos', paises: ['ar'], poster: `${POSTERS}/desvios.webp`, posterRatio: 0.69 },
  { id: 'en-duda-siempre-a-la-izquierda', titulo: 'En duda siempre a la izquierda', director: 'Mariana S. Belaval', paises: ['pr'], poster: `${POSTERS}/en-duda-siempre-a-la-izquierda.webp`, posterRatio: 0.707 },
  { id: 'el-bosque-me-hablo-sobre-ti', titulo: 'El bosque me habló sobre ti', director: 'Matías Leiva', paises: ['cl'], poster: `${POSTERS}/el-bosque-me-hablo-sobre-ti.webp`, posterRatio: 0.763 },
  { id: 'derribo-colapso', titulo: 'Derribo: Colapso', director: 'Roberto F. Canuto y Xiaoxi Xu', paises: ['es'], poster: `${POSTERS}/derribo-colapso.webp`, posterRatio: 0.663 },
  { id: 'silencios', titulo: 'Silencios', director: 'Yago Casariego', paises: ['es'], poster: `${POSTERS}/silencios.webp`, posterRatio: 0.708 },
  { id: 'hombre', titulo: 'Hombre', director: 'Matías Dinardo', paises: ['ar'], poster: `${POSTERS}/hombre.webp`, posterRatio: 0.7 },
  { id: 'mas-alla-de-la-culpa', titulo: 'Más allá de la culpa', director: 'Israel Cordova', paises: ['br'], poster: `${POSTERS}/mas-alla-de-la-culpa.webp`, posterRatio: 0.675 },
  { id: 'autorretrato', titulo: 'Autorretrato', director: 'Javier Becerril Gómez', paises: ['es'], poster: `${POSTERS}/autorretrato.webp`, posterRatio: 0.708 },
  { id: 'habla-bajo', titulo: 'Habla bajo', director: 'Benedetta Cuicchi', paises: ['es'], poster: `${POSTERS}/habla-bajo.webp`, posterRatio: 0.707 },
  { id: 'planton', titulo: 'Plantón', director: 'Carlota Bonacasa', paises: ['es'], poster: `${POSTERS}/planton.webp`, posterRatio: 0.675 },
  { id: 'no-estamos-locos', titulo: 'No estamos locos', director: 'Lucía Criado Rosas', paises: ['es'], poster: `${POSTERS}/no-estamos-locos.webp`, posterRatio: 0.746 },
  { id: 'violetas', titulo: 'Violetas', director: 'Borja Escribano', paises: ['es'], poster: `${POSTERS}/violetas.webp`, posterRatio: 0.7 },
  { id: 'ruth', titulo: 'Ruth', director: 'Sonia Martí Gallego', paises: ['es'], poster: `${POSTERS}/ruth.webp`, posterRatio: 0.7 },
  { id: 'extraviado', titulo: 'Extraviado', director: 'David S. Murga', paises: ['es'], poster: `${POSTERS}/extraviado.webp`, posterRatio: 0.666 },
  { id: 'ella-ella', titulo: 'Ella, Ella', director: 'Galar Egüén', paises: ['es', 've'], poster: `${POSTERS}/ella-ella.webp`, posterRatio: 0.707 },
  { id: 'seamos-mejores', titulo: 'Seamos mejores', director: 'Iñaki Goldaracena', paises: ['es'], poster: `${POSTERS}/seamos-mejores.webp`, posterRatio: 0.707 },
  { id: 'youre-the-one-i-love', titulo: 'You’re the one I love', director: 'Pablo Barbato', paises: ['es'], poster: `${POSTERS}/youre-the-one-i-love.webp`, posterRatio: 0.75 },
  { id: 'cris', titulo: 'Cris', director: 'Jonay García', paises: ['es'], poster: `${POSTERS}/cris.webp`, posterRatio: 0.707 },
  { id: 'giros', titulo: 'Giros', director: 'Willy Suárez', paises: ['es'], poster: `${POSTERS}/giros.webp`, posterRatio: 0.666 },
  { id: 'does-he-like-me', titulo: 'Does He Like Me?', director: 'Diego Trevisan', paises: ['br'], poster: `${POSTERS}/does-he-like-me.webp`, posterRatio: 0.707 },
  { id: 'chica', titulo: 'Chica', director: 'Juan Yactayo Sono', paises: ['pe'], poster: `${POSTERS}/chica.webp`, posterRatio: 0.707 },
  { id: 'intercambio', titulo: 'Intercambio', director: 'Amaia Yoldi', paises: ['es'], poster: `${POSTERS}/intercambio.webp`, posterRatio: 0.675 },
  { id: 'zoe', titulo: 'Zoe', director: 'Tamari Jvaridze', paises: ['es'], poster: `${POSTERS}/zoe.webp`, posterRatio: 0.707 },
  { id: 'aracnidas', titulo: 'Arácnidas', director: 'Debora Landi Giammarini', paises: ['ar', 'uy'], poster: `${POSTERS}/aracnidas.webp`, posterRatio: 0.714 },
  { id: 'casa-diversa', titulo: 'Casa diversa', director: 'Carmen Vidal', paises: ['es'], poster: `${POSTERS}/casa-diversa.webp`, posterRatio: 0.707 },
  { id: 'despues-del-reflejo', titulo: 'Después del reflejo', director: 'Walter Monzón', paises: ['ar'], poster: `${POSTERS}/despues-del-reflejo.webp`, posterRatio: 0.8 },
  { id: 'a-bolha', titulo: 'A Bolha', director: 'Caio Bau', paises: ['br'], poster: `${POSTERS}/a-bolha.webp`, posterRatio: 0.667 },
  { id: 'xhardonix-xha', titulo: 'Xhárdonix Xha', director: 'Rogelio Chicatti Villalobos', paises: ['mx'], poster: `${POSTERS}/xhardonix-xha.webp`, posterRatio: 0.667, ganador: true },
];

const ORDEN_GANADORES = [
  'el-vih-se-enamoro-de-mi',
  'idilio',
  'xhardonix-xha',
  'o-amor-nao-cabe-na-sala',
];

const ordenarPorIds = (lista: Corto2025[], ids: string[]): Corto2025[] =>
  ids
    .map((id) => lista.find((c) => c.id === id))
    .filter((c): c is Corto2025 => Boolean(c));

/** Cortometrajes ganadores, en el orden del docx. */
export const ganadores2025: Corto2025[] = ordenarPorIds(seleccionOficial2025, ORDEN_GANADORES);

/** Películas invitadas (fuera de competencia). */
export const peliculasInvitadas2025: Corto2025[] = [
  { id: 'agua-sala', titulo: 'Agua Salá', director: 'Steven Morales', paises: ['co'], poster: `${POSTERS}/agua-sala.webp`, posterRatio: 0.7 },
  { id: 'todas-las-flores', titulo: 'Todas las flores', director: 'Carmen Oquendo-Villar', paises: ['co'], poster: `${POSTERS}/todas-las-flores.webp`, posterRatio: 0.7 },
  { id: 'pedale', titulo: 'Pedale!', director: 'Thierry Scherer y David García', paises: ['ch'], poster: `${POSTERS}/pedale.webp`, posterRatio: 1.941 },
  { id: 'mapale', titulo: 'Mapalé', director: 'Jorge Cadena', paises: ['ch', 'co'], poster: `${POSTERS}/mapale.webp`, posterRatio: 1.734 },
  { id: 'el-cuento-de-antonia', titulo: 'El cuento de Antonia', director: 'Jorge Cadena', paises: ['co'], poster: `${POSTERS}/el-cuento-de-antonia.webp`, posterRatio: 0.703 },
  { id: 'a-menos-que-bailemos', titulo: 'A menos que bailemos', director: 'Fernanda Pineda y Hans Rippe', paises: ['co'], poster: `${POSTERS}/a-menos-que-bailemos.webp`, posterRatio: 0.647 },
  { id: '14-poemas', titulo: '14 poemas', director: 'Maxine Swann', paises: ['ar', 'us'], poster: `${POSTERS}/14-poemas.webp`, posterRatio: 0.7 },
  { id: 'quedate-quieto-o-te-amo', titulo: 'Quédate quieto o te amo', director: 'Luis Federico', paises: ['ar'], poster: `${POSTERS}/quedate-quieto-o-te-amo.webp`, posterRatio: 0.696 },
  { id: 'como-una-loba', titulo: 'Como una loba', director: 'Danny González', paises: [], poster: `${POSTERS}/como-una-loba.webp`, posterRatio: 0.667 },
];
