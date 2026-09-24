// src/components/ProductCard.jsx
import React from 'react';

function ProductCard({ item, formatRupiah, noWA, namaToko }) {
  const pesanWA = `Halo ${namaToko}, saya mau pesan: ${item.nama} (${formatRupiah(item.harga)})`;
  const linkWA = `https://wa.me/${noWA}?text=${encodeURIComponent(pesanWA)}`;

  return (
    <div className="bg-white p-4 sm:p-5 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition flex flex-col justify-between h-full">
      <div>
        <span className="text-[10px] sm:text-xs text-emerald-600 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full inline-block mb-2">
          {item.ket}
        </span>
        <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-1 line-clamp-2">{item.nama}</h3>
        <p className="text-xl sm:text-2xl font-extrabold text-emerald-700 my-2">{formatRupiah(item.harga)}</p>
      </div>

      <a
        href={linkWA}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full mt-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold rounded-xl text-xs sm:text-sm transition text-center flex items-center justify-center gap-2 shadow-sm"
      >
        <span>Beli via WhatsApp</span>
        {/* SVG Icon WhatsApp / Chat */}
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
        </svg>
      </a>
    </div>
  );
}

export default ProductCard;