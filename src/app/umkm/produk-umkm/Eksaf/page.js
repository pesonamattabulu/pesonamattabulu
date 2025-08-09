"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-[#62BEDD] h-20 sm:h-30 px-4 sm:px-6 flex items-center justify-center">
          <img
            src="/icon1.png"
            alt="Pesona Mattabulu"
            className="h-full max-h-full object-contain"
          />
      </header>

      {/* Main content */}
      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Judul + Tombol Navigasi */}
        <div className="relative mb-6 sm:mb-10 flex items-center justify-center w-full">
          <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-black text-center">Eksaf/Souvenir</h1>
          <div className="absolute right-0 flex space-x-2">
            <Link
              href="/"
              title="Home"
              className="w-6 h-6 sm:w-10 sm:h-10 flex items-center justify-center bg-[#62BEDD] text-white rounded-full shadow hover:bg-[#4aaac2] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 sm:w-5 sm:h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9L12 2l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </Link>
            <Link
              href="/umkm/produk-umkm"
              title="Kembali"
              className="w-6 h-6 sm:w-10 sm:h-10 flex items-center justify-center bg-[#62BEDD] text-white rounded-full shadow hover:bg-[#4aaac2] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 sm:w-5 sm:h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Gambar */}
          <img
            src="/eksaf.jpg"
            alt="Eksaf/Souvenir"
            className="w-full max-w-xs sm:max-w-sm mx-auto rounded shadow-md object-cover"
          />

          {/* Detail box */}
          <div className="bg-[#FFFDD0] p-4 sm:p-6 rounded shadow-md text-black">
            {/* Harga */}
            <div className="mb-4">
              <p className="text-lg sm:text-xl font-semibold mb-1">Price</p>
              <span className="bg-[#62BEDD] text-white font-bold px-3 py-1 rounded text-base sm:text-lg">
                Rp. 15.000
              </span>
            </div>

            {/* Detail */}
            <div className="mb-4">
              <p className="text-lg sm:text-xl font-light mb-2">Souvenir Khas Mattabulu</p>
            </div>

            {/* Kontak */}
            <div className="mb-4">
              <p className="text-lg sm:text-xl font-semibold">Kontak</p>
              <p className="text-base sm:text-lg font-light">083110006061</p>
            </div>

            <p className="text-sm text-blue-600 font-semibold mt-6">Dikelola oleh BUMDes</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#62BEDD] text-white px-4 sm:px-6 mt-auto overflow-hidden">
        <div className="max-w-7xl mx-auto h-full flex flex-col md:flex-col lg:flex-row justify-center md:justify-center lg:justify-between items-center space-y-4 md:space-y-4 lg:space-y-0 py-4 md:py-4 lg:py-0 text-center md:text-center lg:text-left">
          {/* Logo kiri */}
          <div className="h-full flex items-center">
            <img
              src="/icon1.png"
              alt="Pesona Mattabulu"
              className="h-16 md:h-20 lg:h-30 object-contain"
            />
          </div>

          {/* Location + Sosmed di kanan */}
          <div className="flex flex-col md:flex-col lg:flex-row lg:items-start lg:space-x-12 text-xs md:text-sm">
            {/* Location */}
            <div className="text-center md:text-center lg:text-left">
              <p className="font-semibold">Location</p>
              <p>
                Desa Mattabulu, Kecamatan Lalabata,
                <br />
                Kabupaten Soppeng, Sulawesi Selatan
                <br />
                90811.
              </p>
            </div>

            {/* Sosmed */}
            <div className="mt-4 md:mt-4 lg:mt-0 text-center md:text-center lg:text-left">
              <p className="font-semibold mb-2">Find us on...</p>
              <div className="flex justify-center md:justify-center lg:justify-start space-x-3">
                <a href="#">
                  <img src="/facebook.png" alt="Facebook" className="h-5 md:h-6 lg:h-6 w-5 md:w-6 lg:w-6" />
                </a>
                <a href="#">
                  <img src="/instagram.png" alt="Instagram" className="h-5 md:h-6 lg:h-6 w-5 md:w-6 lg:w-6" />
                </a>
                <a href="#">
                  <img src="/yt.png" alt="YouTube" className="h-5 md:h-6 lg:h-6 w-5 md:w-6 lg:w-6" />
                </a>
                <a href="#">
                  <img src="/tiktok.png" alt="TikTok" className="h-5 md:h-6 lg:h-6 w-5 md:w-6 lg:w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* CSS Global Fix */}
      <style jsx global>{`
        html, body, #__next {
          overflow-x: hidden;
        }
        *, *::before, *::after {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}