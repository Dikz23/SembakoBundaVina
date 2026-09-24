// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';

function App() {
  // 1. Informasi Utama Toko
  const NAMA_TOKO = 'Toko Sembako Bunda Vina';
  const NO_WA_TOKO = '6281290762382'; // Ganti dengan nomor WA Bunda Vina
  const ALAMAT_TOKO = 'Jl. Bojong Renged, Kp. Benda, Desa Rawarengas, Kec. Kosambi, Kabupaten Tangerang, Banten 15215';
  const JAM_OPERASIONAL = 'Senin - Minggu: 06.00 - 21.00 WIB';

  const LINK_GOOGLE_MAPS = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(`${NAMA_TOKO} ${ALAMAT_TOKO}`);

  // Data Katalog Sembako
  const produkSembako = [
    { id: 1, nama: 'Beras Premium 5kg', harga: 68000, ket: 'Pulen & Bersih' },
    { id: 2, nama: 'Minyak Goreng 2L', harga: 34000, ket: 'Jernih & Berkualitas' },
    { id: 3, nama: 'Gula Pasir 1kg', harga: 17500, ket: 'Manis Asli' },
    { id: 4, nama: 'Telur Ayam 1kg', harga: 28000, ket: 'Segar Terjamin' },
    { id: 5, nama: 'Tepung Terigu 1kg', harga: 12000, ket: 'Protein Sedang' },
    { id: 6, nama: 'Kecap Manis 520ml', harga: 20000, ket: 'Kedelai Hitam Pilihan' },
  ];

  // Helper Format Rupiah
  const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(angka);
  };

  return (
    <div className="min-h-screen bg-emerald-50/30 text-gray-800 antialiased">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-emerald-800 text-white py-12 sm:py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="bg-emerald-700 text-emerald-100 text-[11px] sm:text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
            {NAMA_TOKO} — Jujur & Terpercaya
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mt-3 sm:mt-4 mb-3 sm:mb-4 leading-tight">
            Belanja Kebutuhan Dapur Mudah & Transparan
          </h1>
          <p className="text-emerald-100 max-w-xl mx-auto mb-6 sm:mb-8 text-xs sm:text-base leading-relaxed">
            Jaminan timbangan pas dan harga jujur setiap hari. Cukup pilih produk, klik, dan pesan langsung ke WhatsApp kami.
          </p>
          <a
            href={`https://wa.me/${NO_WA_TOKO}?text=Halo%20${encodeURIComponent(NAMA_TOKO)},%20saya%20mau%20tanya%20stok%20produk`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition text-xs sm:text-sm"
          >
            Hubungi Toko Langsung 💬
          </a>
        </div>
      </section>

      {/* Section Keunggulan */}
      <section id="keunggulan" className="py-10 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl sm:text-3xl font-bold text-center text-emerald-800 mb-8 sm:mb-12">
            Mengapa Memilih Kami?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50/50 border border-emerald-100 text-center">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">⚖️</div>
              <h3 className="text-base sm:text-lg font-bold text-emerald-800 mb-1">Timbangan Pas</h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                Kami menjamin takaran dan berat barang sesuai tanpa pengurangan sedikit pun.
              </p>
            </div>
            <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50/50 border border-emerald-100 text-center">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🏷️</div>
              <h3 className="text-base sm:text-lg font-bold text-emerald-800 mb-1">Harga Transparan</h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                Tidak ada biaya tersembunyi. Harga yang tertera adalah harga jujur pasaran.
              </p>
            </div>
            <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50/50 border border-emerald-100 text-center sm:col-span-2 lg:col-span-1">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🚚</div>
              <h3 className="text-base sm:text-lg font-bold text-emerald-800 mb-1">Pesan Cepat via WA</h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                Tidak perlu ribet daftar akun, cukup klik tombol dan langsung terhubung dengan admin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Katalog Produk */}
      <section id="produk" className="py-10 sm:py-16 max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-3xl font-bold text-emerald-800">Daftar Harga Sembako Hari Ini</h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2">Klik tombol di bawah produk untuk memesan via WhatsApp</p>
        </div>

        {/* Responsive Grid: 1 Kolom (HP), 2 Kolom (Tablet), 3 Kolom (Laptop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {produkSembako.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              formatRupiah={formatRupiah}
              noWA={NO_WA_TOKO}
              namaToko={NAMA_TOKO}
            />
          ))}
        </div>
      </section>

      {/* Section Lokasi & Alamat Toko */}
      <section id="lokasi" className="py-10 sm:py-16 bg-white border-t border-emerald-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl sm:text-3xl font-bold text-center text-emerald-800 mb-8 sm:mb-12">
            Kunjungi Toko Fisik Kami
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Kartu Informasi Alamat */}
            <div className="space-y-4 sm:space-y-6 bg-emerald-50/50 p-5 sm:p-8 rounded-2xl border border-emerald-100">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="text-xl sm:text-2xl p-2 bg-emerald-100 rounded-lg">📍</div>
                <div>
                  <h3 className="font-bold text-gray-800 text-sm sm:text-lg">Alamat Lengkap</h3>
                  <p className="text-gray-600 text-xs sm:text-sm mt-0.5 sm:mt-1">{ALAMAT_TOKO}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="text-xl sm:text-2xl p-2 bg-emerald-100 rounded-lg">⏰</div>
                <div>
                  <h3 className="font-bold text-gray-800 text-sm sm:text-lg">Jam Operasional</h3>
                  <p className="text-gray-600 text-xs sm:text-sm mt-0.5 sm:mt-1">{JAM_OPERASIONAL}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="text-xl sm:text-2xl p-2 bg-emerald-100 rounded-lg">📱</div>
                <div>
                  <h3 className="font-bold text-gray-800 text-sm sm:text-lg">Kontak / WhatsApp</h3>
                  <p className="text-gray-600 text-xs sm:text-sm mt-0.5 sm:mt-1">+{NO_WA_TOKO}</p>
                </div>
              </div>

              <a
                href={LINK_GOOGLE_MAPS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center py-2.5 sm:py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-xl transition text-xs sm:text-sm"
              >
                Buka Rute di Google Maps App 🗺️
              </a>
            </div>

            {/* Peta Google Maps Embed */}
            <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-md border border-gray-200">
              <iframe
                title="Peta Lokasi Toko Sembako Bunda Vina"
                src="https://maps.google.com/maps?q=Jalan%20Bojong%20Renged,%20Rawarengas,%20Kosambi,%20Tangerang&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontak" className="bg-emerald-900 text-white py-6 sm:py-8 text-center text-xs sm:text-sm">
        <div className="max-w-6xl mx-auto px-4">
          <p className="font-bold text-sm sm:text-base mb-1">{NAMA_TOKO}</p>
          <p className="text-emerald-300 text-[11px] sm:text-xs mb-2 max-w-md mx-auto">{ALAMAT_TOKO}</p>
          <p className="text-emerald-300 text-[11px] sm:text-xs mb-4">Melayani Dengan Hati & Transparansi</p>
          <p className="text-[10px] sm:text-xs text-gray-400">&copy; 2026 {NAMA_TOKO}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;