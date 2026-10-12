import React from 'react';

export type Tone = 'light' | 'dark';

interface SectionHeadingProps {
  /** Id del <h2>; la sección lo referencia con `aria-labelledby`. */
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  /** `light` para fondos claros (texto ciruela), `dark` para fondos morados (texto crema). */
  tone?: Tone;
}

const styles: Record<Tone, { eyebrow: string; title: string; description: string }> = {
  light: {
    eyebrow: 'bg-edicion25-violeta/10 text-edicion25-violeta',
    title: 'text-edicion25-ciruela',
    description: 'text-edicion25-tierra',
  },
  dark: {
    eyebrow: 'bg-edicion25-sol/15 text-edicion25-sol',
    title: 'text-edicion25-crema',
    description: 'text-edicion25-mantequilla/90',
  },
};

/** Encabezado centrado de una sección de /2025: etiqueta, título y bajada. */
const SectionHeading: React.FC<SectionHeadingProps> = ({ id, eyebrow, title, description, tone = 'light' }) => {
  const s = styles[tone];
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <span className={`mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest ${s.eyebrow}`}>
        {eyebrow}
      </span>
      <h2 id={id} className={`font-futura text-3xl font-black md:text-4xl ${s.title}`}>
        {title}
      </h2>
      {description && <p className={`mt-4 leading-relaxed md:text-lg ${s.description}`}>{description}</p>}
    </div>
  );
};

export default SectionHeading;
