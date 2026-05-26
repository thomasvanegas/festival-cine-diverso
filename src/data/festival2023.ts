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
}

import type { ComponentType } from 'react';

export interface Highlight2023 {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}

export const selectedFilms2023: Film2023[] = [
  { title: "Yigayo Yuwuerane", director: "Ross Dayana López", country: "", category: "Cortometraje", duration: "", description: "", winner: true },
  { title: "Ellxs", director: "Yasser Angulo y Jhan Ascencio", country: "", category: "Cortometraje", duration: "", description: "", winner: true },
  { title: "Igualdad y Dignidad", director: "Eduardo Hernández", country: "", category: "Cortometraje", duration: "", description: "", winner: false },
  { title: "Casa Diversa", director: "Isabella Bernal", country: "", category: "Cortometraje", duration: "", description: "", winner: false },
  { title: "Reconfiguraciones", director: "Francisco Quijano", country: "", category: "Cortometraje", duration: "", description: "", winner: false },
  { title: "La noche en la que bailé con mis pensamientos y contigo", director: "Adalberto López", country: "", category: "Cortometraje", duration: "", description: "", winner: false },
  { title: "Mariposa", director: "Sangelly López", country: "", category: "Cortometraje", duration: "", description: "", winner: false },
  { title: "Mi voz soñada", director: "Melanie Palacio", country: "", category: "Cortometraje", duration: "", description: "", winner: false },
  { title: "Visual Travesti", director: "Danny González", country: "", category: "Cortometraje", duration: "", description: "", winner: false },
  { title: "Mi condena", director: "Izack Vergara", country: "", category: "Cortometraje", duration: "", description: "", winner: false },
  { title: "La Poderosa", director: "Mavis de la Ossa", country: "", category: "Cortometraje", duration: "", description: "", winner: true },
  { title: "La guerra de las gallinas", director: "(Autor/a no registrado)", country: "", category: "Cortometraje", duration: "", description: "", winner: false },
  { title: "Aipá'a Yem", director: "Luzbeidy Monterrosa", country: "", category: "Cortometraje", duration: "", description: "", winner: true },
  { title: "2323", director: "Harry Cárdenas", country: "", category: "Cortometraje", duration: "", description: "", winner: false }
];

export const galleryImages2023 = [
  "2023/1.jpg",
  "2023/2.jpg",
  "2023/3.jpg",
  "2023/4.jpg"
];
