import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Lleva la ventana al inicio cada vez que cambia la ruta.
 *
 * React Router no restablece el scroll al navegar entre páginas, así que al
 * entrar a una edición desde los enlaces del final del home o del footer la
 * página abría a la altura donde estaba el usuario. Solo reacciona al cambio
 * de `pathname`: los anclajes internos (#categoria) siguen funcionando.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 'instant' evita el `scroll-behavior: smooth` global de index.css.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
