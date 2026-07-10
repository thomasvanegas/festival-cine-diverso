import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 300); // 300ms delay to make it smooth and prevent disappearing too fast
  };

  // Limpiar timeout al desmontar
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-black/95 border-b border-festivalRed/30 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
        }`}>
        <nav className="flex justify-between items-center p-6 md:p-8 max-w-7xl mx-auto">
          <NavLink to="/" className="flex items-center space-x-2 group">
            <img src="/2026/FICIDI_IV_PIEZAS_GRAFICAS/Logotipos/ICONO ROJO.png" alt="Colibrí Logo" className="h-16 w-auto" />
            <span className={`font-bold text-xl transition-colors duration-300 ${isScrolled ? 'text-festivalRed' : 'text-white'
              } group-hover:text-festivalRed`}>
              FICIDI
            </span>
          </NavLink>

          <div className="hidden md:flex items-center space-x-8 font-medium">
            {/* Dropdown de Ediciones */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`flex items-center gap-1 transition-all duration-300 hover:scale-105 transform hover:font-bold ${dropdownOpen ? 'text-festivalRed' : 'text-white/90 hover:text-festivalRed'
                  }`}
              >
                Ediciones
                <ChevronDown className="w-4.5 h-4.5" />
              </button>

              {dropdownOpen && (
                <div
                  className="absolute left-0 mt-2 w-48 bg-black/95 backdrop-blur-md rounded-xl shadow-xl border border-festivalRed/30 py-2 z-50 animate-fade-in"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                      `block px-4 py-2.5 text-sm transition-colors ${isActive ? 'font-bold text-festivalRed bg-purple-950/40' : 'text-white/80 hover:text-festivalRed'
                      }`
                    }
                  >
                    IV Edición (2026)
                  </NavLink>
                  <NavLink
                    to="/2025"
                    className={({ isActive }) =>
                      `block px-4 py-2.5 text-sm transition-colors ${isActive ? 'font-bold text-festivalRed bg-purple-950/40' : 'text-white/80 hover:text-festivalRed'
                      }`
                    }
                  >
                    III Edición (2025)
                  </NavLink>
                  <NavLink
                    to="/2024"
                    className={({ isActive }) =>
                      `block px-4 py-2.5 text-sm transition-colors ${isActive ? 'font-bold text-festivalRed bg-purple-950/40' : 'text-white/80 hover:text-festivalRed'
                      }`
                    }
                  >
                    II Edición (2024)
                  </NavLink>
                  <NavLink
                    to="/2023"
                    className={({ isActive }) =>
                      `block px-4 py-2.5 text-sm transition-colors ${isActive ? 'font-bold text-festivalRed bg-purple-950/40' : 'text-white/80 hover:text-festivalRed'
                      }`
                    }
                  >
                    I Edición (2023)
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink
              to="/filmmakers"
              className={({ isActive }) => `transition-all duration-300 hover:scale-105 transform ${isActive
                ? 'text-festivalRed font-bold'
                : 'text-white/90 hover:text-festivalRed'
                }`}
            >
              Hacedores de Cine
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `transition-all duration-300 hover:scale-105 transform ${isActive
                ? 'text-festivalRed font-bold'
                : 'text-white/90 hover:text-festivalRed'
                }`}
            >
              Una Carta para Quienes Llegan Aquí
            </NavLink>
            <NavLink
              to="/patrocinadores"
              className={({ isActive }) => `transition-all duration-300 hover:scale-105 transform ${isActive
                ? 'text-festivalRed font-bold'
                : 'text-white/90 hover:text-festivalRed'
                }`}
            >
              Patrocinadores
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 focus:outline-none text-white hover:text-festivalRed"
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
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={handleOverlayClick}
        >
          <aside
            className="fixed top-0 right-0 h-full w-72 max-w-full bg-black/95 border-l border-festivalRed/20 shadow-xl p-6 flex flex-col gap-6 transition-transform duration-300 transform translate-x-0"
            style={{ transition: 'transform 0.3s' }}
          >
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-lg text-festivalRed">Menú</span>
              <button
                className="p-2 text-white hover:text-festivalRed"
                aria-label="Cerrar menú"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-4 font-medium">
              {/* Accordion para Ediciones en Móvil */}
              <div className="flex flex-col">
                <button
                  type="button"
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  className="flex items-center justify-between text-white/90 hover:text-festivalRed py-2 transition-colors text-left"
                >
                  <span>Ediciones</span>
                  {mobileDropdownOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {mobileDropdownOpen && (
                  <div className="flex flex-col gap-3 pl-4 border-l border-festivalRed/30 mt-1 mb-2">
                    <NavLink
                      to="/"
                      end
                      className={({ isActive }) =>
                        `text-sm py-1 transition-colors ${isActive ? 'text-festivalRed font-bold' : 'text-white/70 hover:text-festivalRed'
                        }`
                      }
                      onClick={() => setSidebarOpen(false)}
                    >
                      IV Edición (2026)
                    </NavLink>
                    <NavLink
                      to="/2025"
                      className={({ isActive }) =>
                        `text-sm py-1 transition-colors ${isActive ? 'text-festivalRed font-bold' : 'text-white/70 hover:text-festivalRed'
                        }`
                      }
                      onClick={() => setSidebarOpen(false)}
                    >
                      III Edición (2025)
                    </NavLink>
                    <NavLink
                      to="/2024"
                      className={({ isActive }) =>
                        `text-sm py-1 transition-colors ${isActive ? 'text-festivalRed font-bold' : 'text-white/70 hover:text-festivalRed'
                        }`
                      }
                      onClick={() => setSidebarOpen(false)}
                    >
                      II Edición (2024)
                    </NavLink>
                    <NavLink
                      to="/2023"
                      className={({ isActive }) =>
                        `text-sm py-1 transition-colors ${isActive ? 'text-festivalRed font-bold' : 'text-white/70 hover:text-festivalRed'
                        }`
                      }
                      onClick={() => setSidebarOpen(false)}
                    >
                      I Edición (2023)
                    </NavLink>
                  </div>
                )}
              </div>

              <NavLink
                to="/filmmakers"
                className={({ isActive }) =>
                  `transition-colors duration-200 py-2 ${isActive ? 'text-festivalRed font-bold' : 'text-white/90 hover:text-festivalRed'
                  }`
                }
                onClick={() => setSidebarOpen(false)}
              >
                Hacedores de Cine
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `transition-colors duration-200 py-2 ${isActive ? 'text-festivalRed font-bold' : 'text-white/90 hover:text-festivalRed'
                  }`
                }
                onClick={() => setSidebarOpen(false)}
              >
                Quiénes Somos
              </NavLink>
              <NavLink
                to="/patrocinadores"
                className={({ isActive }) =>
                  `transition-colors duration-200 py-2 ${isActive ? 'text-festivalRed font-bold' : 'text-white/90 hover:text-festivalRed'
                  }`
                }
                onClick={() => setSidebarOpen(false)}
              >
                Patrocinadores
              </NavLink>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
};

export default Header;
