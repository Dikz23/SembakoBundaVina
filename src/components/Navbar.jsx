// src/components/Navbar.jsx
import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-emerald-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-3.5 sm:py-4 flex justify-between items-center">
        {/* Logo Toko */}
        <div className="text-xl sm:text-2xl font-bold text-emerald-700 tracking-tight flex items-center gap-2">
          {/* SVG Icon Toko/Sembako */}
          <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
          </svg>
          <span>
            Sembako<span className="text-amber-600">BundaVina</span>
          </span>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-600 text-base">
          <li>
            <a href="#keunggulan" className="hover:text-emerald-600 transition flex items-center gap-1.5">
              Keunggulan
            </a>
          </li>
          <li>
            <a href="#produk" className="hover:text-emerald-600 transition flex items-center gap-1.5">
              Produk
            </a>
          </li>
          <li>
            <a href="#lokasi" className="hover:text-emerald-600 transition flex items-center gap-1.5">
              Lokasi
            </a>
          </li>
        </ul>

        {/* Tombol Hamburger SVG (Hanya Tampil di HP) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-emerald-700 p-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            /* SVG Icon Silang / Close */
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* SVG Icon Hamburger / Menu */
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menu Dropdown HP (Tampil saat tombol diklik) */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-emerald-100 px-6 py-4 shadow-xl">
          <ul className="flex flex-col space-y-2 font-medium text-gray-700 text-sm">
            <li>
              <a
                href="#keunggulan"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition"
              >
                {/* SVG Icon Keunggulan / Bintang */}
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Keunggulan</span>
              </a>
            </li>
            <li>
              <a
                href="#produk"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition"
              >
                {/* SVG Icon Produk / Tag */}
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5a1 1 0 01.707.293l7 7a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A1 1 0 013 12V5a2 2 0 012-2z" />
                </svg>
                <span>Daftar Produk</span>
              </a>
            </li>
            <li>
              <a
                href="#lokasi"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition"
              >
                {/* SVG Icon Lokasi / Pin Maps */}
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Lokasi Toko</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;