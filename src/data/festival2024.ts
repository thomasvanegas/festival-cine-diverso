/**
 * Datos de la edición 2024 — Segunda Edición del Festival.
 */

export interface Film2024 {
  title: string;
  director: string;
  country: string;
  category: string;
  duration: string;
  description: string;
  /** Ruta de la imagen/poster asociado al cortometraje (public/imgs/edicion_2024/optimized). */
  image: string;
  winner: boolean;
}

import type { ComponentType } from 'react';

export interface Highlight2024 {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}

const IMG_BASE = '/imgs/edicion_2024/optimized';

export const selectedFilms2024: Film2024[] = [
  { title: "Petricor", director: "Juan José Arias Gil", country: "", category: "", duration: "", description: "", image: `${IMG_BASE}/petricor.jpg`, winner: true },
  { title: "Degenere", director: "Sara Asprilla", country: "", category: "", duration: "", description: "", image: `${IMG_BASE}/degenere.jpg`, winner: true },
  { title: "Exento", director: "Otto Morales", country: "", category: "", duration: "", description: "", image: `${IMG_BASE}/exento.jpg`, winner: true },
  { title: "Al final de un sueño", director: "Esteban Quintero", country: "", category: "", duration: "", description: "", image: `${IMG_BASE}/al-final-de-un-sueno.jpg`, winner: false },
  { title: "Hariaren Amaieran", director: "Aitor Molina", country: "", category: "", duration: "", description: "", image: `${IMG_BASE}/hariaren-amaieran.jpg`, winner: false },
  { title: "Erosismo: liberación energética", director: "Francisco Quijano", country: "", category: "", duration: "", description: "", image: `${IMG_BASE}/erosismo.jpg`, winner: false },
  { title: "In TRANSIT", director: "Katto Devia y Santana", country: "", category: "", duration: "", description: "", image: `${IMG_BASE}/in-transit.jpg`, winner: false },
  { title: "Ni negros ni maricas", director: "Jhan Ascencio", country: "", category: "", duration: "", description: "", image: `${IMG_BASE}/ni-negros-ni-maricas.jpg`, winner: false },
  { title: "A través de su imaginación", director: "", country: "", category: "", duration: "", description: "", image: `${IMG_BASE}/a-traves-de-su-imaginacion.jpg`, winner: false },
  { title: "Desarraigo", director: "", country: "", category: "", duration: "", description: "", image: `${IMG_BASE}/desarraigo.jpg`, winner: false },
  { title: "Dicotomía", director: "", country: "", category: "", duration: "", description: "", image: `${IMG_BASE}/dicotomia.jpg`, winner: false },
  { title: "El mejor día de mi vida", director: "", country: "", category: "", duration: "", description: "", image: `${IMG_BASE}/el-mejor-dia-de-mi-vida.jpg`, winner: false },
  { title: "El orgullo de papá", director: "", country: "", category: "", duration: "", description: "", image: `${IMG_BASE}/el-orgullo-de-papa.jpg`, winner: false },
  { title: "Me entiendes", director: "", country: "", category: "", duration: "", description: "", image: `${IMG_BASE}/me-entindes.jpg`, winner: false },
  { title: "My History", director: "", country: "", category: "", duration: "", description: "", image: `${IMG_BASE}/my-history.jpg`, winner: false }
];

export const galleryImages2024 = [
  "/2024/1.jpg",
  "/2024/2.jpg",
  "/2024/3.jpg",
  "/2024/4.jpg"
];

/** Poster oficial de la II Edición (2024). */
export const posterImage2024 = `${IMG_BASE}/poster.jpg`;

/** Fechas oficiales de realización de la II Edición. */
export const festivalDates2024 = {
  rangeLabel: '22 al 26 de Octubre',
  year: '2024',
  location: 'Barranquilla, Colombia',
};

/** Párrafos de la reseña oficial de la II Edición (2024). */
export const festivalDescription2024: string[] = [
  "La segunda edición del Festival Internacional de Cine Diverso representó un momento de crecimiento y consolidación para el proyecto. Si en nuestro primer año nos enfocamos en abrir un espacio para las narrativas diversas, en esta ocasión quisimos ampliar la experiencia y fortalecer especialmente su componente formativo.",
  "A nivel gráfico, esta edición estuvo marcada por una propuesta visual inspirada en el color, la diversidad y las múltiples formas de habitar el mundo. Buscamos construir una identidad que reflejara la riqueza de nuestras comunidades y el espíritu plural que ha acompañado al festival desde sus inicios.",
  "Uno de los avances más importantes fue el fortalecimiento de los espacios de formación. Realizamos talleres de creación audiovisual enfocados en filminutos, generando oportunidades para que nuevas personas pudieran acercarse al lenguaje audiovisual desde la práctica, la experimentación y la creación colectiva.",
  "También fue una edición significativa porque por primera vez contamos con la participación de cortometrajes internacionales, ampliando el diálogo entre distintas realidades y contextos. A esto se sumaron encuentros y conversaciones con directores y directoras de cine que compartieron sus experiencias creativas y reflexiones sobre la importancia de las narrativas diversas en el panorama audiovisual contemporáneo.",
  "Más de 300 personas participaron en las diferentes actividades del festival, consolidando una comunidad cada vez más amplia y comprometida con estos espacios de encuentro. Además, logramos construir alianzas significativas con cineastas y agentes culturales de distintos países, permitiendo que el proyecto comenzara a expandirse más allá de su territorio de origen.",
  "Al finalizar esta segunda edición entendimos que el festival estaba creciendo. No solo en número de asistentes o en alcance internacional, sino también en su capacidad para formar, conectar personas y generar conversaciones necesarias alrededor de la diversidad, la memoria y el poder transformador del cine."
];
