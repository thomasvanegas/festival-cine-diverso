import React from 'react';
import { Instagram, Mail, MapPin } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useEditionTheme } from '../theme/editionTheme';

const Footer = () => {
  const theme = useEditionTheme();

  return (
    <footer className={`${theme.footerBg} relative overflow-hidden`}>
      {/* Grunge Texture Overlay */}
      <div className="absolute inset-0 bg-texture-238 opacity-[0.10] pointer-events-none mix-blend-overlay" />
      {/* Barra decorativa superior */}
      <div className={theme.footerTopBar} />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Festival Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/2026/FICIDI_IV_PIEZAS_GRAFICAS/Logotipos/ICONO ROJO.png" alt="FICIDI Logo" className="h-12 w-auto" />
            </div>
            <h3 className={`text-lg font-black ${theme.footerHeadlineText} mb-4 font-futura tracking-wide uppercase`}>
              Festival de Cine Diverso
            </h3>
            <p className={`${theme.footerBodyText} mb-6 leading-relaxed text-sm font-sans font-light`}>
              Celebrando la diversidad audiovisual y promoviendo narrativas LGBTIQ+
              que conectan culturas y construyen puentes sociales.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/festivaldecinediverso"
                className={`w-9 h-9 flex items-center justify-center rounded-full border transition-colors duration-300 ${theme.footerSocialColors}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-sm font-bold ${theme.footerHeading} mb-6 font-futura tracking-widest uppercase`}>Enlaces Rápidos</h4>
            <ul className="space-y-3 font-sans">
              <li><NavLink to="/about" className={theme.footerLinkClasses}>Una Carta para Quienes Llegan Aquí</NavLink></li>
              <li><NavLink to="/" className={theme.footerLinkClasses}>Edición 2026</NavLink></li>
              <li><NavLink to="/2025" className={theme.footerLinkClasses}>Edición 2025</NavLink></li>
              <li><NavLink to="/2024" className={theme.footerLinkClasses}>Edición 2024</NavLink></li>
              <li><NavLink to="/filmmakers" className={theme.footerLinkClasses}>Hacedores de Cine</NavLink></li>
              <li><NavLink to="/patrocinadores" className={theme.footerLinkClasses}>Patrocinadores</NavLink></li>
            </ul>
          </div>

          {/* Participación */}
          <div>
            <h4 className={`text-sm font-bold ${theme.footerHeading} mb-6 font-futura tracking-widest uppercase`}>Participación</h4>
            <ul className="space-y-3 font-sans">
              <li>
                <a href="https://festhome.com/festival/festival-de-cine-diverso" target="_blank" rel="noopener noreferrer" className={theme.footerLinkClasses}>
                  Inscríbete en Festhome
                </a>
              </li>
              <li><NavLink to="/#bases" className={theme.footerLinkClasses}>Bases de participación</NavLink></li>
              <li><NavLink to="/" className={theme.footerLinkClasses}>Fechas importantes</NavLink></li>
              <li><NavLink to="/" className={theme.footerLinkClasses}>Categorías</NavLink></li>
              <li><NavLink to="/" className={theme.footerLinkClasses}>Premios</NavLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={`text-sm font-bold ${theme.footerHeading} mb-6 font-futura tracking-widest uppercase`}>Contacto</h4>
            <div className="space-y-4 font-sans">
              <div className="flex items-start gap-3">
                <Mail className={`w-4 h-4 ${theme.footerIcon} mt-0.5 flex-shrink-0`} />
                <a href="mailto:[EMAIL_ADDRESS]" className={theme.footerLinkClasses}>festivaldecinediverso@gmail.com</a>
              </div>
              <div className="flex items-start gap-3">
                <Instagram className={`w-4 h-4 ${theme.footerIcon} mt-0.5 flex-shrink-0`} />
                <a href="https://instagram.com/festivaldecinediverso" className={theme.footerLinkClasses} target="_blank">@festivaldecinediverso</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className={`w-4 h-4 ${theme.footerIcon} mt-0.5 flex-shrink-0`} />
                <a href="#  " className={theme.footerLinkClasses}>Barranquilla, Colombia</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={`border-t ${theme.footerDivider} relative z-10`}>
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`${theme.footerMutedText} text-xs font-sans text-center md:text-left`}>
              © 2026 Festival Internacional de Cine Diverso. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-xs font-sans">
              <a href="/privacidad" className={`${theme.footerMutedText} ${theme.footerLinkHover} transition-colors`}>
                Política de Privacidad
              </a>
              <a href="/terminos" className={`${theme.footerMutedText} ${theme.footerLinkHover} transition-colors`}>
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
