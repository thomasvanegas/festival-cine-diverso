import type { RawFilm, Film } from '../types';

/**
 * Normaliza un objeto RawFilm a la interfaz Film con nombres de campo consistentes.
 *
 * Los datasets históricos del festival usan convenciones mezcladas
 * (español e inglés, distintos nombres de campo). Esta función
 * unifica cualquier entrada en un objeto predecible para la UI.
 *
 * @param raw - Película en cualquiera de los formatos crudos soportados
 * @returns Película normalizada con campos `titulo`, `anio`, `director`, `pais`, `sinopsis`, `enlace`
 */
export function normalizeFilm(raw: RawFilm): Film {
  return {
    titulo: raw.titulo ?? raw.title ?? 'Sin título',
    anio: raw.año ?? raw.anio ?? raw.year ?? '',
    director: raw.director ?? raw.por ?? 'Desconocido',
    pais: raw.pais ?? '',
    sinopsis: raw.sinopsis ?? raw.description ?? '',
    enlace: raw.enlace ?? raw.link ?? raw.url ?? '',
  };
}
