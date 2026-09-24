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
        <span>Beli via WhatsApp</span> 💬
      </a>
    </div>
  );
}

export default ProductCard;