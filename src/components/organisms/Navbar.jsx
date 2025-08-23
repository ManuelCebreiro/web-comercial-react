import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Icon, Logo } from "../atoms";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Páginas que tienen fondo blanco desde el inicio
  const whiteBackgroundPages = ["/servicios", "/proyectos", "/contacto"];
  const isOnWhitePage = whiteBackgroundPages.includes(location.pathname);

  // Determinar si usar estilos oscuros (para fondos blancos)
  const useDarkStyles = isScrolled || isOnWhitePage;

  const navItems = [
    { name: "Inicio", path: "/", icon: "home" },
    { name: "Servicios", path: "/servicios", icon: "wrench" },
    { name: "Proyectos", path: "/proyectos", icon: "image" },
    { name: "Contacto", path: "/contacto", icon: "phone" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          useDarkStyles
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <Logo size="md" variant={useDarkStyles ? "default" : "white"} />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? useDarkStyles
                          ? "text-primary-600"
                          : "text-white"
                        : useDarkStyles
                        ? "text-gray-700 hover:text-primary-600"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                          useDarkStyles ? "bg-primary-600" : "bg-white"
                        }`}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant={useDarkStyles ? "primary" : "white"}
                size="sm"
                className="cursor-pointer"
                onClick={() => navigate("/contacto")}
              >
                Presupuesto Gratis
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  useDarkStyles
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <Icon name={isOpen ? "x" : "menu"} size="lg" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t border-gray-200 shadow-lg"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center px-3 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                        isActive
                          ? "bg-primary-50 text-primary-600 border-l-4 border-primary-600"
                          : "text-gray-700 hover:bg-gray-50 hover:text-primary-600"
                      }`}
                    >
                      <Icon name={item.icon} size="md" className="mr-3" />
                      {item.name}
                    </Link>
                  );
                })}

                <div className="pt-4 border-t border-gray-200">
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full cursor-pointer"
                    onClick={() => navigate("/contacto")}
                  >
                    Presupuesto Gratis
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 z-40 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
