import React from 'react';

function Cart({ keranjang, onTambah, onKurang, totalHarga, formatRupiah, onCheckout }) {
  return (
    <div id="keranjang" className="bg-white p-6 rounded-xl border border-emerald-100 shadow-md sticky top-24">
      <h3 className="text-xl font-bold text-emerald-800 mb-4 pb-2 border-b border-gray-100">
        🛒 Keranjang Belanja
      </h3>

      {keranjang.length === 0 ? (
        <p className="text-gray-400 text-sm text-center py-6">Keranjang masih kosong.</p>
      ) : (
        <div className="space-y-4">
          {keranjang.map((item) => (
            <div key={item.id} className="flex justify-between items-center text-sm border-b border-gray-50 pb-3">
              <div>
                <p className="font-semibold text-gray-800">{item.nama}</p>
                <p className="text-gray-500">{formatRupiah(item.harga)} x {item.jumlah}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => onKurang(item.id)}
                  className="w-6 h-6 bg-gray-200 text-gray-700 font-bold rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span className="font-bold">{item.jumlah}</span>
                <button
                  onClick={() => onTambah(item)}
                  className="w-6 h-6 bg-emerald-100 text-emerald-700 font-bold rounded hover:bg-emerald-200"
                >
                  +
                </button>
              </div>
            </div>
          ))}

          {/* Total & Tombol Checkout */}
          <div className="pt-4">
            <div className="flex justify-between items-center text-lg font-bold text-gray-800 mb-4">
              <span>Total Transparan:</span>
              <span className="text-emerald-700">{formatRupiah(totalHarga)}</span>
            </div>

            <button
              onClick={onCheckout}
              className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl shadow transition text-center block"
            >
              Pesan via WhatsApp 💬
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;