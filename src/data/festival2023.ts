/**
 * Datos de la edición 2023 — Primera Edición del Festival.
 */

export interface Film2023 {
  title: string;
  director: string;
  country: string;
  category: string;
  duration: string;
  description: string;
  winner: boolean;
  /** Ruta de la imagen/poster asociado al cortometraje (public/imgs/edicion_2023/optimized). */
  image: string;
}

import type { ComponentType } from 'react';

export interface Highlight2023 {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}

const IMG_BASE = '/imgs/edicion_2023/optimized';

export const selectedFilms2023: Film2023[] = [
  { title: "Yigayo Yuwuerane", director: "Ross Dayana López", country: "", category: "Cortometraje", duration: "", description: "", winner: true, image: `${IMG_BASE}/yigayo-yuwuerane.jpg` },
  { title: "Ellxs", director: "Yasser Angulo y Jhan Ascencio", country: "", category: "Cortometraje", duration: "", description: "", winner: true, image: `${IMG_BASE}/ellxs.jpg` },
  { title: "La Poderosa", director: "Mavis de la Ossa", country: "", category: "Cortometraje", duration: "", description: "", winner: true, image: `${IMG_BASE}/la-poderosa.jpg` },
  { title: "Aipá'a Yem", director: "Luzbeidy Monterrosa", country: "", category: "Cortometraje", duration: "", description: "", winner: true, image: `${IMG_BASE}/aipa-a-yem.jpg` },
  { title: "Igualdad y Dignidad", director: "Eduardo Hernández", country: "", category: "Cortometraje", duration: "", description: "", winner: false, image: `${IMG_BASE}/igualdad-y-dignidad.jpg` },
  { title: "Casa Diversa", director: "Isabella Bernal", country: "", category: "Cortometraje", duration: "", description: "", winner: false, image: `${IMG_BASE}/casa-diversa.jpg` },
  { title: "Reconfiguraciones", director: "Francisco Quijano", country: "", category: "Cortometraje", duration: "", description: "", winner: false, image: `${IMG_BASE}/reconfiguraciones.jpg` },
  { title: "La noche en la que bailé con mis pensamientos y contigo", director: "Adalberto López", country: "", category: "Cortometraje", duration: "", description: "", winner: false, image: `${IMG_BASE}/la-noche-que-baile-con-mis-pensamientos-y-contigo.jpg` },
  { title: "Mariposa", director: "Sangelly López", country: "", category: "Cortometraje", duration: "", description: "", winner: false, image: `${IMG_BASE}/mariposa.jpg` },
  { title: "Mi voz soñada", director: "Melanie Palacio", country: "", category: "Cortometraje", duration: "", description: "", winner: false, image: `${IMG_BASE}/mi-voz-sonada.jpg` },
  { title: "Visual Travesti", director: "Danny González", country: "", category: "Cortometraje", duration: "", description: "", winner: false, image: `${IMG_BASE}/visual-travesti.jpg` },
  { title: "Mi condena", director: "Izack Vergara", country: "", category: "Cortometraje", duration: "", description: "", winner: false, image: `${IMG_BASE}/mi-condena.jpg` },
  { title: "La guerra de las gallinas", director: "Cenuver Giraldo", country: "", category: "Cortometraje", duration: "", description: "", winner: false, image: `${IMG_BASE}/la-guerra-de-las-gallinas.jpg` },
  { title: "2323", director: "Harry Cárdenas", country: "", category: "Cortometraje", duration: "", description: "", winner: false, image: `${IMG_BASE}/2323.jpg` }
];

export const galleryImages2023 = [
  "2023/1.jpg",
  "2023/2.jpg",
  "2023/3.jpg",
  "2023/4.jpg"
];

/** Poster oficial de la I Edición (2023). */
export const posterImage2023 = `${IMG_BASE}/poster.jpg`;

/** Fechas oficiales de realización de la I Edición. */
export const festivalDates2023 = {
  rangeLabel: '2 al 4 de Noviembre',
  year: '2023',
  location: 'Barranquilla, Colombia',
};

/** Párrafos de la reseña oficial de la I Edición (2023). */
export const festivalDescription2023: string[] = [
  "La primera edición del Festival Internacional de Cine Diverso marcó el inicio de una experiencia profundamente transformadora alrededor del audiovisual y las representaciones de género, identidad y diversidad.",
  "Desde el comienzo quisimos construir un espacio donde las historias pudieran dialogar con las realidades de quienes habitan nuestros territorios. Por eso contamos con una selección oficial diversa que abordó temas relacionados con la identidad, la cultura, las comunidades y las distintas luchas que atraviesan el contexto colombiano. A esta programación se sumaron obras invitadas, la participación de jurados nacionales e internacionales y una agenda académica y cultural que reunió proyecciones, conversatorios y paneles de reflexión.",
  "Más de 250 personas hicieron parte de esta primera experiencia a través de los diferentes espacios que conformaron el festival. Cada encuentro, cada conversación y cada proyección nos permitió confirmar algo que ya intuíamos: existía la necesidad de crear escenarios donde las narrativas diversas pudieran ser vistas, escuchadas y compartidas.",
  "Hoy, al mirar hacia atrás, entendemos que aquella primera edición fue mucho más que un evento. Fue el punto de partida de una apuesta narrativa, cultural y comunitaria que continúa creciendo, encontrando nuevas voces y construyendo espacios para la memoria, el encuentro y la diversidad."
];
