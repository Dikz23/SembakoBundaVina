// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';

function App() {
  const NAMA_TOKO = 'Toko Sembako Bunda Vina';
  const NO_WA_TOKO = '6281290762382'; // Ganti dengan nomor WA Bunda Vina
  const ALAMAT_TOKO = 'Jl. Bojong Renged, Kp. Benda, Desa Rawarengas, Kec. Kosambi, Kabupaten Tangerang, Banten 15215';
  const JAM_OPERASIONAL = 'Senin - Minggu: 06.00 - 21.00 WIB';

  const LINK_GOOGLE_MAPS = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(`${NAMA_TOKO} ${ALAMAT_TOKO}`);

  const produkSembako = [
    { id: 1, nama: 'Beras Premium 5kg', harga: 68000, ket: 'Pulen & Bersih' },
    { id: 2, nama: 'Minyak Goreng 2L', harga: 34000, ket: 'Jernih & Berkualitas' },
    { id: 3, nama: 'Gula Pasir 1kg', harga: 17500, ket: 'Manis Asli' },
    { id: 4, nama: 'Telur Ayam 1kg', harga: 28000, ket: 'Segar Terjamin' },
    { id: 5, nama: 'Tepung Terigu 1kg', harga: 12000, ket: 'Protein Sedang' },
    { id: 6, nama: 'Kecap Manis 520ml', harga: 20000, ket: 'Kedelai Hitam Pilihan' },
  ];

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
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition text-xs sm:text-sm"
          >
            <span>Hubungi Toko Langsung</span>
            {/* SVG Icon WhatsApp Hero */}
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
            </svg>
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
            {/* Keunggulan 1: Timbangan Pas */}
            <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50/50 border border-emerald-100 text-center flex flex-col items-center">
              <div className="p-3 bg-emerald-100 rounded-xl mb-3 text-emerald-700">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7h6m6 0l-3 1m0 0l3 9a5.002 5.002 0 01-6.001 0M18 7l-3 9m3-9h-6M6 7H3m15 0h3" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-emerald-800 mb-1">Timbangan Pas</h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                Kami menjamin takaran dan berat barang sesuai tanpa pengurangan sedikit pun.
              </p>
            </div>

            {/* Keunggulan 2: Harga Transparan */}
            <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50/50 border border-emerald-100 text-center flex flex-col items-center">
              <div className="p-3 bg-emerald-100 rounded-xl mb-3 text-emerald-700">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5a1 1 0 01.707.293l7 7a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A1 1 0 013 12V5a2 2 0 012-2z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-emerald-800 mb-1">Harga Transparan</h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                Tidak ada biaya tersembunyi. Harga yang tertera adalah harga jujur pasaran.
              </p>
            </div>

            {/* Keunggulan 3: Pesan via WA */}
            <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50/50 border border-emerald-100 text-center sm:col-span-2 lg:col-span-1 flex flex-col items-center">
              <div className="p-3 bg-emerald-100 rounded-xl mb-3 text-emerald-700">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
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
              {/* Alamat */}
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-sm sm:text-lg">Alamat Lengkap</h3>
                  <p className="text-gray-600 text-xs sm:text-sm mt-0.5 sm:mt-1">{ALAMAT_TOKO}</p>
                </div>
              </div>

              {/* Jam Operasional */}
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-sm sm:text-lg">Jam Operasional</h3>
                  <p className="text-gray-600 text-xs sm:text-sm mt-0.5 sm:mt-1">{JAM_OPERASIONAL}</p>
                </div>
              </div>

              {/* Kontak */}
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-sm sm:text-lg">Kontak / WhatsApp</h3>
                  <p className="text-gray-600 text-xs sm:text-sm mt-0.5 sm:mt-1">+{NO_WA_TOKO}</p>
                </div>
              </div>

              {/* Tombol Maps */}
              <a
                href={LINK_GOOGLE_MAPS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full text-center py-2.5 sm:py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-xl transition text-xs sm:text-sm"
              >
                <span>Buka Rute di Google Maps</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
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