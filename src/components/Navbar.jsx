// src/components/Navbar.jsx
import React from 'react';

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-emerald-100">
      {/* Mengubah px-4 menjadi px-6 di HP dan px-10 di layar sedang/besar agar tidak mepet */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-3.5 sm:py-4 flex flex-row justify-between items-center">
        {/* Logo Toko */}
        <div className="text-lg sm:text-2xl font-bold text-emerald-700 tracking-tight">Sembako<span className="text-amber-600">BundaVina</span>
        </div>

        {/* Menu Navigasi */}
        <ul className="flex space-x-4 sm:space-x-8 font-medium text-gray-600 text-xs sm:text-base">
          <li>
            <a href="#keunggulan" className="hover:text-emerald-600 transition">
              Keunggulan
            </a>
          </li>
          <li>
            <a href="#produk" className="hover:text-emerald-600 transition">
              Produk
            </a>
          </li>
          <li>
            <a href="#lokasi" className="hover:text-emerald-600 transition">
              Lokasi
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;