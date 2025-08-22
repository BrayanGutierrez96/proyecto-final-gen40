import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Barra principal */}
      <div className="flex justify-between items-center px-6 md:px-16 py-3 border-b border-gray-300 bg-white">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-[120px] md:w-[167px] h-10" />
        </Link>

        {/* Buscador (oculto en móvil) */}
        <div className="hidden md:flex w-1/3 border border-gray-300 rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 px-4 py-2 text-sm outline-none border-none"
          />
          
          <button className="bg-[#17af26] hover:bg-green-900 text-white px-4 py-2 text-sm transition">
            🔍
          </button>
        </div>

        {/* Cuenta y carrito */}
        <div className="flex items-center gap-4">
          <Link
            to="/account"
            className="hidden md:block text-sm text-[#004d40] hover:text-green-700 no-underline"
          >
            Your Account
          </Link>
          <div className="relative text-xl">
            🛒
            <span className="absolute -top-1.5 -right-2 bg-red-600 text-white text-[10px] rounded-full px-1.5 py-0.5">
              0
            </span>
          </div>

          {/* Botón hamburguesa en móvil */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Menú inferior - Desktop */}
      <div className="hidden md:flex justify-between items-center px-16 py-6 mx-6 border border-gray-100 bg-white font-bold text-sm">
        <Link to="/shop" className="text-[#004d40] hover:text-green-700">
          Shop All
        </Link>

        {/* Flower */}
        <div className="relative group">
          <button className="text-[#004d40] hover:text-green-700">Flower ⌄</button>
          <div className="hidden group-hover:block absolute bg-white shadow-md min-w-[150px] z-10">
            <Link to="/flower/**" className="block px-3 py-2 text-[#004d40] hover:bg-gray-100">**</Link>
            <Link to="/flower/***" className="block px-3 py-2 text-[#004d40] hover:bg-gray-100">***</Link>
          </div>
        </div>

        <Link to="/edibles" className="text-[#004d40] hover:text-green-700">Edibles</Link>

        {/* Concentrates */}
        <div className="relative group">
          <button className="text-[#004d40] hover:text-green-700">Concentrates ⌄</button>
          <div className="hidden group-hover:block absolute bg-white shadow-md min-w-[150px] z-10">
            <Link to="/concentrates/**" className="block px-3 py-2 text-[#004d40] hover:bg-gray-100">**</Link>
            <Link to="/concentrates/***" className="block px-3 py-2 text-[#004d40] hover:bg-gray-100">***</Link>
          </div>
        </div>

        <Link to="/mushrooms" className="text-[#004d40] hover:text-green-700">Mushrooms</Link>

        {/* Promotions */}
        <div className="relative group">
          <button className="text-[#004d40] hover:text-green-700">Promotions/Bundles ⌄</button>
          <div className="hidden group-hover:block absolute bg-white shadow-md min-w-[150px] z-10">
            <Link to="/promotions/bundles" className="block px-3 py-2 text-[#004d40] hover:bg-gray-100">Bundles</Link>
          </div>
        </div>

        {/* Support */}
        <div className="relative group">
          <button className="text-[#004d40] hover:text-green-700">Support ⌄</button>
          <div className="hidden group-hover:block absolute bg-white shadow-md min-w-[150px] z-10">
            <Link to="/support/contact" className="block px-3 py-2 text-[#004d40] hover:bg-gray-100">Contact</Link>
          </div>
        </div>

        <Link to="/rewards" className="text-[#004d40] hover:text-green-700">Rewards</Link>
        <Link to="/blog" className="text-[#004d40] hover:text-green-700">Blog</Link>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-start px-6 py-4 border-t border-gray-200 bg-white font-bold text-sm">
          <Link to="/shop" className="py-2 text-[#004d40] hover:text-green-700">Shop All</Link>
          <Link to="/flower" className="py-2 text-[#004d40] hover:text-green-700">Flower</Link>
          <Link to="/edibles" className="py-2 text-[#004d40] hover:text-green-700">Edibles</Link>
          <Link to="/concentrates" className="py-2 text-[#004d40] hover:text-green-700">Concentrates</Link>
          <Link to="/mushrooms" className="py-2 text-[#004d40] hover:text-green-700">Mushrooms</Link>
          <Link to="/promotions/bundles" className="py-2 text-[#004d40] hover:text-green-700">Promotions/Bundles</Link>
          <Link to="/support/contact" className="py-2 text-[#004d40] hover:text-green-700">Support</Link>
          <Link to="/rewards" className="py-2 text-[#004d40] hover:text-green-700">Rewards</Link>
          <Link to="/blog" className="py-2 text-[#004d40] hover:text-green-700">Blog</Link>
        </div>
      )}
    </div>
  );
}
