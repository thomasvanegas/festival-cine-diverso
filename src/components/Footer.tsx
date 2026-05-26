import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-yellow-300">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          
          {/* Festival Info */}
          <div>
            <h3 className="text-2xl font-black text-yellow-400 mb-6">
              FESTIVAL DE CINE DIVERSO
            </h3>
            <p className="text-yellow-300 mb-6 leading-relaxed">
              Celebrando la diversidad audiovisual y promoviendo narrativas LGBTIQ+ 
              que conectan culturas y construyen puentes sociales.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/festivaldecinediverso" className="text-yellow-400 hover:text-yellow-300 transition-colors" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-yellow-400 mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><NavLink to="/about" className="text-yellow-300 hover:text-yellow-400 transition-colors">Quiénes Somos</NavLink></li>
              <li><NavLink to="/2025" className="text-yellow-300 hover:text-yellow-400 transition-colors">Festival 2025</NavLink></li>
              <li><NavLink to="/2024" className="text-yellow-300 hover:text-yellow-400 transition-colors">Edición 2024</NavLink></li>
              <li><NavLink to="/filmmakers" className="text-yellow-300 hover:text-yellow-400 transition-colors">Hacedores de Cine</NavLink></li>
              <li><a href="/#patrocinadores" className="text-yellow-300 hover:text-yellow-400 transition-colors">Patrocinadores</a></li>
              <li><NavLink to="/2025" className="text-yellow-300 hover:text-yellow-400 transition-colors">Convocatoria</NavLink></li>
            </ul>
          </div>

          {/* Participation */}
          <div>
            <h4 className="text-lg font-bold text-yellow-400 mb-6">Participación</h4>
            <ul className="space-y-3">
              <li><a href="https://filmmakers.festhome.com/festival/festival-de-cine-diverso" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-yellow-400 transition-colors">Inscríbete en Festhome</a></li>
              <li><NavLink to="/2025" className="text-yellow-300 hover:text-yellow-400 transition-colors">Bases de participación</NavLink></li>
              <li><NavLink to="/2025" className="text-yellow-300 hover:text-yellow-400 transition-colors">Fechas importantes</NavLink></li>
              <li><NavLink to="/2025" className="text-yellow-300 hover:text-yellow-400 transition-colors">Categorías</NavLink></li>
              <li><NavLink to="/2025" className="text-yellow-300 hover:text-yellow-400 transition-colors">Premios</NavLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-yellow-400 mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-yellow-300">festivaldecinediverso@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <p className="text-yellow-300">
                  Barranquilla, Colombia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-yellow-800">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-yellow-400 text-sm">
              © 2025 Festival Internacional de Cine Diverso. Todos los derechos reservados.
            </p>
            <div className="flex space-x-8 text-sm">
              <a href="/privacidad" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                Política de Privacidad
              </a>
              <a href="/terminos" className="text-yellow-400 hover:text-yellow-300 transition-colors">
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
