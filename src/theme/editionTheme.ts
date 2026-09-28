import { useLocation } from 'react-router-dom';

/**
 * Identidad visual de Header y Footer por edición del festival.
 *
 * El sitio usa componentes globales (Header, Footer) que antes tenían
 * siempre los colores de la edición vigente (2026 / "festivalRed", fondo
 * negro). Este módulo permite que cada edición histórica tenga su propia
 * identidad de color -incluyendo el FONDO- en esos componentes compartidos,
 * sin afectar a las demás rutas.
 *
 * Para agregar la identidad de otra edición en el futuro, se agrega
 * una nueva entrada a `editionThemes` con el prefijo de ruta correspondiente.
 */
export interface EditionTheme {
  // Header
  headerIdleBg: string;
  headerScrolledBg: string;
  /** Franja decorativa inferior del header (cadena vacía = no se renderiza). */
  headerStripe: string;
  logoIdleText: string;
  logoScrolledText: string;
  logoHoverText: string;
  navText: string;
  navHoverText: string;
  navActiveText: string;
  dropdownPanelBg: string;
  dropdownItemText: string;
  dropdownItemHover: string;
  dropdownItemActive: string;
  sidebarBg: string;
  sidebarBorder: string;
  sidebarTitleText: string;
  sidebarCloseText: string;
  sidebarCloseHoverText: string;
  mobileAccordionBorder: string;
  mobileTextPrimary: string;
  mobileTextSecondary: string;
  mobileHoverText: string;
  mobileActiveText: string;

  // Footer
  footerBg: string;
  /** Clase completa (posición + gradiente) de la barra superior del footer. */
  footerTopBar: string;
  footerHeadlineText: string;
  footerBodyText: string;
  footerHeading: string;
  footerIcon: string;
  /** Colores del botón circular de redes sociales (borde + texto + hover). */
  footerSocialColors: string;
  /** Clase completa reutilizada por los enlaces de las columnas del footer. */
  footerLinkClasses: string;
  footerDivider: string;
  /** Color base para el copyright y los enlaces legales. */
  footerMutedText: string;
  footerLinkHover: string;
}

/** Tema por defecto: identidad gráfica vigente (IV Edición, 2026). */
const defaultTheme: EditionTheme = {
  headerIdleBg: 'bg-transparent',
  headerScrolledBg: 'bg-black/95 border-b border-festivalRed/30 backdrop-blur-md shadow-lg',
  headerStripe: '',
  logoIdleText: 'text-white',
  logoScrolledText: 'text-festivalRed',
  logoHoverText: 'group-hover:text-festivalRed',
  navText: 'text-white/90',
  navHoverText: 'hover:text-festivalRed',
  navActiveText: 'text-festivalRed',
  dropdownPanelBg: 'bg-black/95 backdrop-blur-md rounded-xl shadow-xl border border-festivalRed/30',
  dropdownItemText: 'text-white/80',
  dropdownItemHover: 'hover:text-festivalRed',
  dropdownItemActive: 'font-bold text-festivalRed bg-purple-950/40',
  sidebarBg: 'bg-black/95',
  sidebarBorder: 'border-festivalRed/20',
  sidebarTitleText: 'text-festivalRed',
  sidebarCloseText: 'text-white',
  sidebarCloseHoverText: 'hover:text-festivalRed',
  mobileAccordionBorder: 'border-festivalRed/30',
  mobileTextPrimary: 'text-white/90',
  mobileTextSecondary: 'text-white/70',
  mobileHoverText: 'hover:text-festivalRed',
  mobileActiveText: 'text-festivalRed',

  footerBg: 'bg-black text-white',
  footerTopBar: 'absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-festivalRed/60 to-transparent',
  footerHeadlineText: 'text-white',
  footerBodyText: 'text-zinc-400',
  footerHeading: 'text-festivalRed',
  footerIcon: 'text-festivalRed',
  footerSocialColors: 'border-zinc-700 text-zinc-400 hover:border-festivalRed hover:text-festivalRed',
  footerLinkClasses: 'text-zinc-400 hover:text-white transition-colors text-sm',
  footerDivider: 'border-zinc-900',
  footerMutedText: 'text-zinc-500',
  footerLinkHover: 'hover:text-festivalRed',
};

/**
 * Tema de la I Edición (2023), basado en la paleta oficial:
 * Rojo Chile #E5331A, Naranja Pinta #F6A61C, Verde Manzana #8BBE26,
 * Verdigris #1AB6BA, Ciruela #954695.
 *
 * A diferencia de la edición vigente (fondo negro), esta edición usa
 * fondo claro en Header y Footer para que se lea como una identidad
 * propia y no una variación del negro/rojo de 2026. Rojo Chile y Ciruela
 * se usan como texto/acento porque son los únicos dos tonos de la
 * paleta con contraste suficiente sobre blanco; Naranja Pinta, Verde
 * Manzana y Verdigris se reservan para la franja decorativa (donde el
 * contraste de texto no aplica).
 */
const festival2023Theme: EditionTheme = {
  headerIdleBg: 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-[#E5331A]/15',
  headerScrolledBg: 'bg-white backdrop-blur-md shadow-md border-b border-[#E5331A]/20',
  headerStripe: 'absolute bottom-0 left-0 right-0 h-1 bg-[linear-gradient(to_right,#E5331A,#F6A61C,#8BBE26,#1AB6BA,#954695)]',
  logoIdleText: 'text-[#E5331A]',
  logoScrolledText: 'text-[#E5331A]',
  logoHoverText: 'group-hover:text-[#954695]',
  navText: 'text-gray-700',
  navHoverText: 'hover:text-[#954695]',
  navActiveText: 'text-[#E5331A]',
  dropdownPanelBg: 'bg-white backdrop-blur-md rounded-xl shadow-xl border border-[#E5331A]/15',
  dropdownItemText: 'text-gray-700',
  dropdownItemHover: 'hover:text-[#954695]',
  dropdownItemActive: 'font-bold text-[#E5331A] bg-[#954695]/10',
  sidebarBg: 'bg-white',
  sidebarBorder: 'border-[#E5331A]/15',
  sidebarTitleText: 'text-[#E5331A]',
  sidebarCloseText: 'text-gray-700',
  sidebarCloseHoverText: 'hover:text-[#E5331A]',
  mobileAccordionBorder: 'border-[#E5331A]/20',
  mobileTextPrimary: 'text-gray-700',
  mobileTextSecondary: 'text-gray-500',
  mobileHoverText: 'hover:text-[#954695]',
  mobileActiveText: 'text-[#E5331A]',

  footerBg: 'bg-white text-gray-900',
  footerTopBar: 'absolute top-0 left-0 right-0 h-1 bg-[linear-gradient(to_right,transparent,#E5331A,#F6A61C,#8BBE26,#1AB6BA,#954695,transparent)]',
  footerHeadlineText: 'text-gray-900',
  footerBodyText: 'text-gray-600',
  footerHeading: 'text-[#E5331A]',
  footerIcon: 'text-[#E5331A]',
  footerSocialColors: 'border-gray-300 text-gray-600 hover:border-[#954695] hover:text-[#954695]',
  footerLinkClasses: 'text-gray-600 hover:text-[#954695] transition-colors text-sm',
  footerDivider: 'border-gray-200',
  footerMutedText: 'text-gray-500',
  footerLinkHover: 'hover:text-[#954695]',
};

/** Mapa de prefijos de ruta a tema. El primero que haga match (startsWith) gana. */
const editionThemes: Array<{ prefix: string; theme: EditionTheme }> = [
  { prefix: '/2023', theme: festival2023Theme },
];

/**
 * Hook que devuelve el tema de Header/Footer correspondiente a la ruta actual.
 * Debe usarse dentro de componentes montados bajo <Router> (Header, Footer).
 */
export function useEditionTheme(): EditionTheme {
  const location = useLocation();
  const match = editionThemes.find(({ prefix }) => location.pathname.startsWith(prefix));
  return match ? match.theme : defaultTheme;
}
