import  { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Íconos para el menú móvil
import Productos from './Pages/Productos/Index';
import Facturacion from './Pages/Facturacion/Index';
import Cotizaciones from './Pages/Cotizaciones/Index';
import Inventario from './Pages/Inventario/Index';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#ef59a0] p-4 shadow-md w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center">
          <img src="/images/Camille.jpg" alt="Logo" className="h-14 w-auto mr-4" />
        </Link>

        {/* Menú Desktop */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/productos" className="text-white font-semibold hover:underline">Productos</Link></li>
          <li><Link to="/facturacion" className="text-white font-semibold hover:underline">Facturación</Link></li>
          <li><Link to="/cotizaciones" className="text-white font-semibold hover:underline">Cotizaciones</Link></li>
          <li><Link to="/inventario" className="text-white font-semibold hover:underline">Inventario</Link></li>
        </ul>

        {/* Botón de menú hamburguesa en móviles */}
        <button className="md:hidden text-[#ef59a0]" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Menú Móvil */}
      <div
        className={`absolute top-full left-0 w-full bg-[#ef59a0] transition-all duration-300 ease-in-out ${
          menuOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col space-y-4 p-4">
          <li><Link to="/productos" className="text-white font-semibold block" onClick={() => setMenuOpen(false)}>Productos</Link></li>
          <li><Link to="/facturacion" className="text-white font-semibold block" onClick={() => setMenuOpen(false)}>Facturación</Link></li>
          <li><Link to="/cotizaciones" className="text-white font-semibold block" onClick={() => setMenuOpen(false)}>Cotizaciones</Link></li>
          <li><Link to="/inventario" className="text-white font-semibold block" onClick={() => setMenuOpen(false)}>Inventario</Link></li>
        </ul>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="mt-20 p-4">
        <Routes>
          <Route path="/productos" element={<Productos />} />
          <Route path="/facturacion" element={<Facturacion />} />
          <Route path="/cotizaciones" element={<Cotizaciones />} />
          <Route path="/inventario" element={<Inventario />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
