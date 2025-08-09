"use client";
import { useState } from "react";
import Link from "next/link";

export default function AirTerjunPage() {
  const [activeTab, setActiveTab] = useState("deskripsi");

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
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Tombol Home dan Kembali */}
        <div className="flex justify-end space-x-2 mb-4 sm:mb-6">
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
            href="/situswisata"
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

        {/* Gambar utama */}
        <div className="mb-6 sm:mb-10">
          <img
            src="/at.jpg"
            alt="Air Terjun Liu Pangie"
            className=" plotly w-full h-48 sm:h-64 md:h-80 rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 sm:space-x-4 mb-4">
          <button
            className={`px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base font-semibold rounded-t-md ${
              activeTab === "deskripsi"
                ? "bg-[#FFF9DC] text-black"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setActiveTab("deskripsi")}
          >
            Deskripsi
          </button>
          <button
            className={`px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base font-semibold rounded-t-md ${
              activeTab === "lokasi"
                ? "bg-[#FFF9DC] text-black"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setActiveTab("lokasi")}
          >
            Lokasi
          </button>
        </div>

        {/* Tab content */}
        <div className="bg-[#FFF9DC] p-4 sm:p-6 rounded-lg text-justify text-gray-800 shadow-sm">
          {activeTab === "deskripsi" && (
            <>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">Air Terjun Liu Pangie</h1>
              <p className="text-sm sm:text-base mb-4 indent-8">
                Air Terjun Liu Pangie adalah destinasi wisata alam yang memukau di Kabupaten Soppeng, Sulawesi Selatan, Indonesia. Terletak di Desa Mattabulu, Kecamatan Lalabata, air terjun ini menawarkan keindahan alam yang masih asri dengan suasana sejuk dan eksotis.
              </p>
              <p className="text-sm sm:text-base mb-4 indent-8">
                Air Terjun Liu Pangie terdiri dari dua tingkatan dengan ketinggian beberapa meter, dikelilingi hutan pinus dan panorama pegunungan yang memanjakan mata. Airnya yang jernih dan segar mengalir dari sungai di kaki Pegunungan Mattabulu, menciptakan kolam alami yang cocok untuk berenang atau sekadar berendam.
              </p>
              <p className="text-sm sm:text-base indent-8">
                Destinasi ini terletak sekitar 600 meter dari objek wisata Lembah Cinta, menjadikannya bagian dari kawasan wisata alam yang terintegrasi di Desa Mattabulu. Keunikan Air Terjun Liu Pangie terletak pada suasana tenang dan alaminya, jauh dari hiruk-pikuk kota.
              </p>
            </>
          )}

          {activeTab === "lokasi" && (
            <>
              <h2 className="text-base sm:text-lg md:text-xl font-bold mb-4">Lokasi dan Akses</h2>
              <p className="text-sm sm:text-base mb-4 indent-8">
                Air Terjun Liu Pangie terletak di Desa Mattabulu, Kecamatan Lalabata, Kabupaten Soppeng, Sulawesi Selatan. Lokasinya mudah dijangkau karena berada di jalan poros desa, tidak jauh dari objek wisata Lembah Cinta.
              </p>
              <p className="text-sm sm:text-base mb-4 indent-8">
                Dari pusat kota Soppeng, jaraknya sekitar 30–40 menit menggunakan kendaraan. Jalan menuju lokasi cukup baik, meskipun beberapa bagian memerlukan kehati-hatian.
              </p>

              <p className="text-sm sm:text-base font-semibold mb-2">Rute:</p>
              <ol className="list-decimal list-inside space-y-1 pl-4 mb-4 text-sm sm:text-base">
                <li>Dari Kota Watansoppeng, arahkan perjalanan menuju Kecamatan Lalabata.</li>
                <li>Ikuti petunjuk menuju Desa Mattabulu, lalu belok ke arah Lembah Cinta.</li>
                <li>Dari Lembah Cinta, lanjutkan sekitar 600 meter menuju air terjun.</li>
              </ol>

              {/* Embed Map */}
              <div className="mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.554374256154!2d119.88857097499358!3d-4.369233296640814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dba52b8c05f2ec1%3A0x9b90a508cc728cdf!2sMattabulu%2C%20Kec.%20Lalabata%2C%20Kabupaten%20Soppeng!5e0!3m2!1sid!2sid!4v1691234567890!5m2!1sid!2sid"
                  width="100%"
                  height="200"
                  className="sm:h-250 md:h-300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <a
                  href="https://maps.google.com/?q=Desa+Mattabulu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 text-sm sm:text-base font-semibold mt-2 inline-block"
                >
                  📍 Lihat Lokasi
                </a>
              </div>
            </>
          )}
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

          {/* Location + Sosmed */}
          <div className="flex flex-col md:flex-col lg:flex-row lg:items-start lg:space-x-12 text-xs md:text-sm">
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