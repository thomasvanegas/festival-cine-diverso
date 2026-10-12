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
  /** Ruta pública del logo (colibrí) que se muestra en el header. */
  logoSrc: string;
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
  /** Ruta pública del logo (colibrí) del footer; debe contrastar con `footerBg`. */
  footerLogoSrc: string;
  footerBg: string;
  /** Capa de textura sobre el footer (clases completas; cadena vacía = sin textura). */
  footerTexture: string;
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
  logoSrc: '/2026/FICIDI_IV_PIEZAS_GRAFICAS/Logotipos/ICONO ROJO.png',
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

  footerLogoSrc: '/2026/FICIDI_IV_PIEZAS_GRAFICAS/Logotipos/ICONO ROJO.png',
  footerBg: 'bg-black text-white',
  footerTexture: 'absolute inset-0 bg-texture-238 opacity-[0.10] pointer-events-none mix-blend-overlay',
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
  logoSrc: '/2026/FICIDI_IV_PIEZAS_GRAFICAS/Logotipos/ICONO ROJO.png',
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

  footerLogoSrc: '/2026/FICIDI_IV_PIEZAS_GRAFICAS/Logotipos/ICONO ROJO.png',
  footerBg: 'bg-white text-gray-900',
  footerTexture: 'absolute inset-0 bg-texture-238 opacity-[0.10] pointer-events-none mix-blend-overlay',
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

/**
 * Tema de la II Edición (2024), basado en la paleta oficial de esa edición:
 * Azul #0033FF, Amarillo #FFCC00, Rojo #FF3300, Verde #00CC33, Cian #00CCFF,
 * Naranja #FF6600, Rosa #FF99CC.
 *
 * Mismo criterio que en 2023: fondo claro en Header y Footer para que se lea
 * como identidad propia (no una variación del negro/rojo de 2026). De los 7
 * colores, solo Azul (#0033FF) y Rojo (#FF3300) tienen contraste suficiente
 * para usarse como texto sobre blanco; el resto de la paleta (amarillo, verde,
 * cian, naranja, rosa) se reserva para la franja decorativa multicolor.
 */
const festival2024Theme: EditionTheme = {
  logoSrc: '/2026/FICIDI_IV_PIEZAS_GRAFICAS/Logotipos/ICONO ROJO.png',
  headerIdleBg: 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-[#0033FF]/15',
  headerScrolledBg: 'bg-white backdrop-blur-md shadow-md border-b border-[#0033FF]/20',
  headerStripe: 'absolute bottom-0 left-0 right-0 h-1 bg-[linear-gradient(to_right,#0033FF,#00CCFF,#00CC33,#FFCC00,#FF6600,#FF3300,#FF99CC)]',
  logoIdleText: 'text-[#0033FF]',
  logoScrolledText: 'text-[#0033FF]',
  logoHoverText: 'group-hover:text-[#FF3300]',
  navText: 'text-gray-700',
  navHoverText: 'hover:text-[#FF3300]',
  navActiveText: 'text-[#0033FF]',
  dropdownPanelBg: 'bg-white backdrop-blur-md rounded-xl shadow-xl border border-[#0033FF]/15',
  dropdownItemText: 'text-gray-700',
  dropdownItemHover: 'hover:text-[#FF3300]',
  dropdownItemActive: 'font-bold text-[#0033FF] bg-[#0033FF]/10',
  sidebarBg: 'bg-white',
  sidebarBorder: 'border-[#0033FF]/15',
  sidebarTitleText: 'text-[#0033FF]',
  sidebarCloseText: 'text-gray-700',
  sidebarCloseHoverText: 'hover:text-[#0033FF]',
  mobileAccordionBorder: 'border-[#0033FF]/20',
  mobileTextPrimary: 'text-gray-700',
  mobileTextSecondary: 'text-gray-500',
  mobileHoverText: 'hover:text-[#FF3300]',
  mobileActiveText: 'text-[#0033FF]',

  footerLogoSrc: '/2026/FICIDI_IV_PIEZAS_GRAFICAS/Logotipos/ICONO ROJO.png',
  footerBg: 'bg-white text-gray-900',
  footerTexture: 'absolute inset-0 bg-texture-238 opacity-[0.10] pointer-events-none mix-blend-overlay',
  footerTopBar: 'absolute top-0 left-0 right-0 h-1 bg-[linear-gradient(to_right,transparent,#0033FF,#00CCFF,#00CC33,#FFCC00,#FF6600,#FF3300,#FF99CC,transparent)]',
  footerHeadlineText: 'text-gray-900',
  footerBodyText: 'text-gray-600',
  footerHeading: 'text-[#0033FF]',
  footerIcon: 'text-[#0033FF]',
  footerSocialColors: 'border-gray-300 text-gray-600 hover:border-[#FF3300] hover:text-[#FF3300]',
  footerLinkClasses: 'text-gray-600 hover:text-[#FF3300] transition-colors text-sm',
  footerDivider: 'border-gray-200',
  footerMutedText: 'text-gray-500',
  footerLinkHover: 'hover:text-[#FF3300]',
};

/**
 * Tema de la III Edición (2025) — "Historias que nos habitan".
 *
 * Paleta oficial (public/imgs/edicion_2025/Códigos de color.jpg): rosas y
 * morados del roble morado, amarillos y naranjas del roble amarillo, marrones
 * del tronco y la tierra. Usa los tokens de Tailwind `edicion25.*`.
 *
 * - Header claro (crema del cielo del poster) con texto ciruela; el logo es el
 *   colibrí morado oficial. Franja inferior con el degradé rosa → morado → naranja.
 * - Footer oscuro `subsuelo` (el mismo tono de la tierra del poster, para que la
 *   escena de cierre de /2025 se funda con él) con texto crema/amarillo. Como el
 *   colibrí morado no se vería sobre fondo oscuro, usa la variante crema.
 * - Contraste (WCAG): ciruela/violeta sobre crema ≥ 8:1; crema/mantequilla sobre
 *   subsuelo ≥ 12:1; magenta sobre crema ≈ 5:1 (solo hover/activo).
 */
const festival2025Theme: EditionTheme = {
  logoSrc: '/imgs/edicion_2025/decor/colibri.png',
  headerIdleBg: 'bg-edicion25-crema/90 backdrop-blur-sm shadow-sm border-b border-edicion25-tierra/15',
  headerScrolledBg: 'bg-edicion25-crema backdrop-blur-md shadow-md border-b border-edicion25-tierra/20',
  headerStripe: 'absolute bottom-0 left-0 right-0 h-1 bg-[linear-gradient(to_right,#c55eb6,#9740ab,#69268e,#3c0e4e,#e7be3c,#d5942d,#a76019)]',
  logoIdleText: 'text-edicion25-violeta',
  logoScrolledText: 'text-edicion25-violeta',
  logoHoverText: 'group-hover:text-edicion25-magenta',
  navText: 'text-edicion25-ciruela',
  navHoverText: 'hover:text-edicion25-magenta',
  navActiveText: 'text-edicion25-violeta',
  dropdownPanelBg: 'bg-edicion25-papel backdrop-blur-md rounded-xl shadow-xl border border-edicion25-violeta/20',
  dropdownItemText: 'text-edicion25-ciruela',
  dropdownItemHover: 'hover:text-edicion25-magenta',
  dropdownItemActive: 'font-bold text-edicion25-violeta bg-edicion25-rosa/15',
  sidebarBg: 'bg-edicion25-papel',
  sidebarBorder: 'border-edicion25-violeta/20',
  sidebarTitleText: 'text-edicion25-violeta',
  sidebarCloseText: 'text-edicion25-ciruela',
  sidebarCloseHoverText: 'hover:text-edicion25-magenta',
  mobileAccordionBorder: 'border-edicion25-violeta/25',
  mobileTextPrimary: 'text-edicion25-ciruela',
  mobileTextSecondary: 'text-edicion25-tierra',
  mobileHoverText: 'hover:text-edicion25-magenta',
  mobileActiveText: 'text-edicion25-violeta',

  footerLogoSrc: '/imgs/edicion_2025/decor/colibri-crema.png',
  footerBg: 'bg-edicion25-subsuelo text-edicion25-crema',
  footerTexture: '',
  footerTopBar: 'absolute top-0 left-0 right-0 h-1 bg-[linear-gradient(to_right,transparent,#c55eb6,#9740ab,#e7be3c,#d5942d,transparent)]',
  footerHeadlineText: 'text-edicion25-crema',
  footerBodyText: 'text-edicion25-mantequilla/80',
  footerHeading: 'text-edicion25-sol',
  footerIcon: 'text-edicion25-sol',
  footerSocialColors: 'border-edicion25-magenta text-edicion25-mantequilla hover:border-edicion25-sol hover:text-edicion25-sol',
  footerLinkClasses: 'text-edicion25-mantequilla/80 hover:text-edicion25-sol transition-colors text-sm',
  footerDivider: 'border-edicion25-violeta/40',
  footerMutedText: 'text-edicion25-arena/70',
  footerLinkHover: 'hover:text-edicion25-sol',
};

/** Mapa de prefijos de ruta a tema. El primero que haga match (startsWith) gana. */
const editionThemes: Array<{ prefix: string; theme: EditionTheme }> = [
  { prefix: '/2023', theme: festival2023Theme },
  { prefix: '/2024', theme: festival2024Theme },
  { prefix: '/2025', theme: festival2025Theme },
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
