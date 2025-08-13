"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function AirTerjunPage() {
  const [activeTab, setActiveTab] = useState("deskripsi");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

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
                Air Terjun Liu Pangie, terletak di Desa Mattabulu, Kecamatan Lalabata, Kabupaten Soppeng, Sulawesi Selatan, adalah destinasi wisata alam yang memikat dengan keindahan air terjunnya yang jernih dan suasana hutan pinus yang asri. Berjarak hanya sekitar 600 meter dari Lembah Cinta, air terjun ini menjadi salah satu permata wisata Desa Mattabulu yang menawarkan kesegaran dan ketenangan bagi pengunjung.
              </p>
              <p className="text-sm sm:text-base mb-4 indent-8">
                Air Terjun Liu Pangie memiliki ketinggian beberapa meter dengan aliran air yang bersusun dua, mengalir dari sumber alami di kaki pegunungan Desa Mattabulu. Airnya yang jernih dan sejuk, dikelilingi oleh vegetasi hijau dan hutan pinus, menciptakan suasana yang menenangkan. Pengunjung dapat berenang di kolam alami air terjun atau sekadar menikmati pemandangan alam yang eksotis. Lokasinya yang strategis, mudah diakses melalui jalan poros desa, menjadikannya destinasi ideal untuk wisata keluarga atau liburan akhir pekan.
              </p>
              <p className="text-sm sm:text-base mb-4 indent-8">
                Bagi masyarakat Desa Mattabulu, Air Terjun Liu Pangie bukan hanya destinasi wisata, tetapi juga simbol kebanggaan akan kekayaan alam desa mereka. Diresmikan oleh Bupati Soppeng pada 23 September 2020, air terjun ini menjadi bagian dari upaya desa untuk mempromosikan pariwisata dan meningkatkan kesejahteraan melalui pengelolaan BUMDes. Keindahan alamnya yang terjaga mencerminkan komitmen masyarakat untuk melestarikan lingkungan.
              </p>
              <p className="text-sm sm:text-base indent-8">
                Air Terjun Liu Pangie adalah destinasi yang sempurna bagi mereka yang mencari ketenangan dan petualangan di tengah alam Sulawesi Selatan. Dengan fasilitas yang memadai dan pesona alam yang memukau, air terjun ini menjanjikan pengalaman wisata yang tak terlupakan di Desa Mattabulu.
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
                  className="sm:h-250 md:h-100"
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
      <Footer />

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