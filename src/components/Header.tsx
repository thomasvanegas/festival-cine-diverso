import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear scroll cuando sidebar está abierto
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [sidebarOpen]);

  // Cerrar sidebar al hacer click fuera
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setSidebarOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-purple-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <nav className="flex justify-between items-center p-6 md:p-8 max-w-7xl mx-auto">
          <NavLink to="/" className="flex items-center space-x-2 group">
            <img src="/Colibrí.png" alt="Colibrí Logo" className={`h-8 w-auto transition-colors duration-300 ${isScrolled ? '' : ''}`} />
            <span className={`font-bold text-xl transition-colors duration-300 ${
              isScrolled ? 'text-yellow-300' : 'text-purple-900'
            }`}>
              FICIDI
            </span>
          </NavLink>
          
          <div className="hidden md:flex space-x-8 font-medium">
            <NavLink 
              to="/2025" 
              className={({ isActive }) => `transition-all duration-300 hover:scale-105 transform hover:font-bold ${
                isScrolled 
                  ? 'text-yellow-300' 
                  : 'text-purple-900'
              } ${isActive ? 'font-bold' : ''}`}
            >
              Festival 2025
            </NavLink>
            <NavLink 
              to="/2024" 
              className={({ isActive }) => `transition-all duration-300 hover:scale-105 transform hover:font-bold ${
                isScrolled 
                  ? 'text-yellow-300' 
                  : 'text-purple-900'
              } ${isActive ? 'font-bold' : ''}`}
            >
              Edición 2024
            </NavLink>
            <NavLink 
              to="/2023" 
              className={({ isActive }) => `transition-all duration-300 hover:scale-105 transform hover:font-bold ${
                isScrolled 
                  ? 'text-yellow-300' 
                  : 'text-purple-900'
              } ${isActive ? 'font-bold' : ''}`}
            >
              Edición 2023
            </NavLink>
            <NavLink 
              to="/filmmakers" 
              className={({ isActive }) => `transition-all duration-300 hover:scale-105 transform hover:font-bold ${
                isScrolled 
                  ? 'text-yellow-300' 
                  : 'text-purple-900'
              } ${isActive ? 'font-bold' : ''}`}
            >
              Hacedores de Cine
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `transition-all duration-300 hover:scale-105 transform hover:font-bold ${
                isScrolled 
                  ? 'text-yellow-300' 
                  : 'text-purple-900'
              } ${isActive ? 'font-bold' : ''}`}
            >
              Quiénes Somos
            </NavLink>
            <a 
              href="/#patrocinadores" 
              className={`transition-all duration-300 hover:scale-105 transform hover:font-bold ${
                isScrolled 
                  ? 'text-yellow-300' 
                  : 'text-purple-900'
              }`}
            >
              Patrocinadores
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 focus:outline-none ${
              isScrolled ? 'text-yellow-300' : 'text-purple-300'
            }`}
            aria-label="Abrir menú"
            onClick={() => setSidebarOpen(true)}
          >
            <div className="w-6 h-0.5 bg-current mb-1"></div>
            <div className="w-6 h-0.5 bg-current mb-1"></div>
            <div className="w-6 h-0.5 bg-current"></div>
          </button>
        </nav>
      </header>

      {/* Sidebar para móvil */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity"
          onClick={handleOverlayClick}
        >
          <aside
            className="fixed top-0 right-0 h-full w-72 max-w-full bg-purple-900 shadow-xl p-6 flex flex-col gap-6 transition-transform duration-300 transform translate-x-0"
            style={{ transition: 'transform 0.3s' }}
          >
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-lg text-yellow-300">Menú</span>
              <button
                className="p-2 text-yellow-300 hover:text-yellow-400"
                aria-label="Cerrar menú"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-4 font-medium">
              <NavLink
                to="/2025"
                className={({ isActive }) =>
                  `transition-colors duration-200 ${
                    isActive ? 'text-yellow-300 font-bold' : 'text-yellow-200'
                  }`
                }
                onClick={() => setSidebarOpen(false)}
              >
                Festival 2025
              </NavLink>
              <NavLink
                to="/2024"
                className={({ isActive }) =>
                  `transition-colors duration-200 ${
                    isActive ? 'text-yellow-300 font-bold' : 'text-yellow-200'
                  }`
                }
                onClick={() => setSidebarOpen(false)}
              >
                Edición 2024
              </NavLink>
              <NavLink
                to="/2023"
                className={({ isActive }) =>
                  `transition-colors duration-200 ${
                    isActive ? 'text-yellow-300 font-bold' : 'text-yellow-200'
                  }`
                }
                onClick={() => setSidebarOpen(false)}
              >
                Edición 2023
              </NavLink>
              <NavLink
                to="/filmmakers"
                className={({ isActive }) =>
                  `transition-colors duration-200 ${
                    isActive ? 'text-yellow-300 font-bold' : 'text-yellow-200'
                  }`
                }
                onClick={() => setSidebarOpen(false)}
              >
                Hacedores de Cine
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `transition-colors duration-200 ${
                    isActive ? 'text-yellow-300 font-bold' : 'text-yellow-200'
                  }`
                }
                onClick={() => setSidebarOpen(false)}
              >
                Quiénes Somos
              </NavLink>
              <a
                href="/#patrocinadores"
                className="transition-colors duration-200 text-yellow-200 hover:text-yellow-300"
                onClick={() => setSidebarOpen(false)}
              >
                Patrocinadores
              </a>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
};

export default Header;
