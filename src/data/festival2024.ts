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
}

import type { ComponentType } from 'react';

export interface Highlight2024 {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}

export const selectedFilms2024: Film2024[] = [
  { title: "Petricor", director: "Juan José Arias Gil", country: "", category: "", duration: "", description: "" },
  { title: "Degenere", director: "Sara Asprilla", country: "", category: "", duration: "", description: "" },
  { title: "Exento", director: "Otto Morales", country: "", category: "", duration: "", description: "" },
  { title: "Al final de un sueño", director: "Esteban Quintero", country: "", category: "", duration: "", description: "" },
  { title: "Hariaren Amaieran", director: "Aitor Molina", country: "", category: "", duration: "", description: "" },
  { title: "Erosismo: liberación energética", director: "Francisco Quijano", country: "", category: "", duration: "", description: "" },
  { title: "In TRANSIT", director: "Katto Devia y Santana", country: "", category: "", duration: "", description: "" },
  { title: "Ni negros ni maricas", director: "Jhan Ascencio", country: "", category: "", duration: "", description: "" }
];

export const galleryImages2024 = [
  "2024/1.jpg",
  "2024/2.jpg",
  "2024/3.jpg",
  "2024/4.jpg"
];
