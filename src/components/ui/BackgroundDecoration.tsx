import React from 'react';

/**
 * Variantes de fondo disponibles para la decoración de secciones.
 */
type BgVariant = 'default' | 'pink' | 'blue' | 'green';

interface BackgroundDecorationProps {
  /** Variante de color para los círculos de desenfoque */
  variant?: BgVariant;
  /** Opacidad global del contenedor (0–1) */
  opacity?: number;
  /** Imagen de fondo a mostrar con opacidad 10% (por defecto '/Fondo.png') */
  bgImage?: string;
  /** Clases adicionales de Tailwind */
  className?: string;
}

/**
 * Componente reutilizable que renderiza el patrón de decoración de fondo
 * usado en múltiples páginas (Hero, AboutUs, Filmmakers, Festival2023, etc.).
 *
 * Incluye gradientes, círculos de desenfoque (blur), nubes, confeti y destellos.
 * Se posiciona absolutamente y debe usarse dentro de un contenedor `relative`.
 */
const BackgroundDecoration: React.FC<BackgroundDecorationProps> = ({
  variant = 'default',
  opacity = 0.8,
  bgImage = '/Fondo.png',
  className = '',
}) => {
  const colorMap: Record<BgVariant, { from: string; via: string; to: string; bounce1: string; bounce2: string; bounce3: string; blur1: string; blur2: string }> = {
    default: {
      from: 'from-purple-200/80',
      via: 'via-pink-200/60',
      to: 'to-yellow-100/60',
      bounce1: 'bg-yellow-400',
      bounce2: 'bg-pink-400',
      bounce3: 'bg-purple-400',
      blur1: 'bg-white',
      blur2: 'bg-yellow-200',
    },
    pink: {
      from: 'from-pink-200/80',
      via: 'via-purple-200/60',
      to: 'to-yellow-100/60',
      bounce1: 'bg-green-400',
      bounce2: 'bg-purple-400',
      bounce3: 'bg-pink-400',
      blur1: 'bg-white',
      blur2: 'bg-yellow-200',
    },
    blue: {
      from: 'from-yellow-100/80',
      via: 'via-pink-100/60',
      to: 'to-blue-100/60',
      bounce1: 'bg-yellow-300',
      bounce2: 'bg-pink-300',
      bounce3: 'bg-blue-400',
      blur1: 'bg-white',
      blur2: 'bg-yellow-200',
    },
    green: {
      from: 'from-pink-200/80',
      via: 'via-green-100/60',
      to: 'to-purple-100/60',
      bounce1: 'bg-green-400',
      bounce2: 'bg-purple-400',
      bounce3: 'bg-pink-400',
      blur1: 'bg-white',
      blur2: 'bg-green-200',
    },
  };

  const c = colorMap[variant as BgVariant];

  return (
    <div
      className={`absolute inset-0 pointer-events-none -z-10 ${className}`}
      style={{ opacity }}
    >
      {/* Gradiente base */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${c.from} ${c.via} ${c.to}`}
      />
      {/* Fondo texturizado */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-[url('${bgImage}')] bg-cover bg-center opacity-10`}
      />
      {/* Nubes */}
      <img
        src="/Nubes.png"
        alt=""
        className="absolute top-0 left-0 w-1/2 opacity-60 animate-float-slow"
      />
      <img
        src="/Nubes.png"
        alt=""
        className="absolute top-10 right-0 w-1/3 opacity-40 animate-float-slow delay-500"
      />
      {/* Confeti */}
      <div
        className={`absolute top-10 left-1/4 w-2 h-2 ${c.bounce1} rounded-full animate-bounce`}
      />
      <div
        className={`absolute top-20 right-1/3 w-2 h-2 ${c.bounce2} rounded-full animate-bounce delay-500`}
      />
      <div
        className={`absolute bottom-10 left-1/3 w-2 h-2 ${c.bounce3} rounded-full animate-bounce delay-700`}
      />
      {/* Destellos */}
      <div className={`absolute top-1/4 right-1/4 w-8 h-8 ${c.blur1} rounded-full blur-2xl opacity-40 animate-pulse`} />
      <div className={`absolute top-1/2 left-1/3 w-6 h-6 ${c.blur2} rounded-full blur-xl opacity-30 animate-pulse delay-300`} />
    </div>
  );
};

export default BackgroundDecoration;
