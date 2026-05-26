/**
 * Tipos y interfaces centralizadas del Festival Internacional de Cine Diverso.
 *
 * Este archivo unifica todas las estructuras de datos utilizadas en la aplicación,
 * eliminando el uso de `any` y documentando cada entidad del dominio.
 */

/**
 * Representa una película en su formato crudo tal como viene de los archivos de datos.
 * Soporta múltiples convenciones de nomenclatura porque los datasets históricos
 * usan distintos nombres de campo (español e inglés).
 */
export interface RawFilm {
  // -- Convención en español (selección oficial nacional) --
  titulo?: string;
  año?: number;
  director?: string;
  pais?: string;
  sinopsis?: string;
  enlace?: string;

  // -- Convención en español (selección internacional) --
  anio?: number;
  por?: string;
  link?: string;

  // -- Convención en inglés (Festival2025) --
  title?: string;
  year?: string | number;
  description?: string;
  url?: string;
}

/**
 * Película normalizada con nombres de campo consistentes en español.
 * Toda la UI debe consumir este tipo para evitar `any`.
 */
export interface Film {
  titulo: string;
  anio: number | string;
  director: string;
  pais: string;
  sinopsis: string;
  enlace: string;
}

/**
 * Item individual dentro de una sesión de programación (proyección).
 */
export interface ProgramItem {
  titulo: string;
  pais: string;
  director: string;
  duracion?: string;
}

/**
 * Sesión de proyección dentro de un día del festival.
 */
export interface Sesion {
  titulo: string;
  detalle?: string;
  items?: ProgramItem[];
}

/**
 * Día completo de programación del festival.
 */
export interface DiaProgramacion {
  nombre: string;
  fechaLugarHora: string;
  tema?: string;
  descripcion?: string;
  portada?: string;
  especial?: string;
  items?: ProgramItem[];
  sesiones?: Sesion[];
}

/**
 * Imagen de galería con ruta y texto alternativo.
 */
export interface GalleryImage {
  src: string;
  alt: string;
}

/**
 * Props que recibe el componente Gallery.
 */
export interface GalleryProps {
  images: GalleryImage[];
  title?: string;
}
