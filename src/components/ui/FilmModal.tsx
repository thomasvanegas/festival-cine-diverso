import React from 'react';
import { X, Film } from 'lucide-react';
import { getCoverSrc } from '../../utils/getCoverSrc';
import type { Film as FilmType } from '../../types';

/**
 * Props para FilmModal.
 */
interface FilmModalProps {
  /** Película a mostrar; si es `null` el modal está oculto */
  film: FilmType | null;
  /** Callback para cerrar el modal */
  onClose: () => void;
}

/**
 * Modal reutilizable que muestra el detalle de una película seleccionada.
 *
 * Renderiza la portada (si existe), título, año, director y sinopsis completa.
 * Se cierra al hacer click fuera del panel o en la X.
 */
const FilmModal: React.FC<FilmModalProps> = ({ film, onClose }) => {
  if (!film) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <div className="aspect-video bg-gray-100">
            {film.enlace ? (
              <img
                src={getCoverSrc(film.enlace)}
                alt={`Portada ${film.titulo}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-200 to-purple-200">
                <Film className="w-12 h-12 text-gray-600" />
              </div>
            )}
          </div>
          <button
            type="button"
            aria-label="Cerrar"
            className="absolute top-3 right-3 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 space-y-3">
          <h3 className="text-2xl font-bold text-gray-800">
            {film.titulo}{' '}
            <span className="text-gray-500 font-medium">— {film.anio}</span>
          </h3>
          {film.director && (
            <p className="text-gray-700">
              <span className="font-semibold">por:</span> {film.director}
            </p>
          )}
          {film.sinopsis && <p className="text-gray-600">{film.sinopsis}</p>}
        </div>
      </div>
    </div>
  );
};

export default FilmModal;
