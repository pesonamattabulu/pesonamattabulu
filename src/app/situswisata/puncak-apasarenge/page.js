"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function PuncakAppasarengePage() {
  const [activeTab, setActiveTab] = useState("deskripsi");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 pt-20 md:pt-28">
        {/* Tombol Home dan Kembali */}
        <div className="flex justify-end space-x-2 mb-4 sm:mb-6">
          <Link
            href="/situswisata"
            title="Kembali"
            className="w-6 h-6 sm:w-10 sm:h-10 flex items-center justify-center bg-[#574A24] text-white rounded-full shadow hover:bg-[#80775c] transition"
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
            src="/puncakapasarenge.png"
            alt="Puncak Appasarenge"
            className="w-full h-48 sm:h-64 md:h-80 rounded-lg shadow-md object-cover"
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

        {/* Konten Tab */}
        <div className="bg-[#FFF9DC] p-4 sm:p-6 rounded-lg text-justify text-gray-800 shadow-sm">
          {activeTab === "deskripsi" && (
            <>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">Puncak Appasarenge</h1>
              <p className="text-sm sm:text-base mb-4 indent-8">
                Puncak Appasarenge, terletak di Desa Mattabulu, Kecamatan Lalabata, Kabupaten Soppeng, Sulawesi Selatan, adalah destinasi wisata alam yang menawarkan keindahan panorama pegunungan. Dengan ketinggian sekitar 1.070 meter di atas permukaan laut, puncak ini menjadi salah satu daya tarik utama bagi wisatawan yang mencari ketenangan dan pemandangan spektakuler di tengah udara sejuk khas dataran tinggi.
                Dikelilingi oleh hamparan hutan pinus dan udara yang sejuk, Puncak Appasarenge menjadi tempat favorit untuk berkemah dan bersantai.
              </p>
              <p className="text-sm sm:text-base mb-4 indent-8">
                Puncak Appasarenge menawarkan pengalaman mendaki yang relatif mudah diakses, dengan jalur yang dapat dilalui menggunakan kendaraan hingga titik tertentu. Dari puncaknya, pengunjung dapat menikmati pemandangan hamparan hijau perbukitan dan lembah di sekitar Desa Mattabulu, menjadikannya tempat ideal untuk fotografi, berkemah, atau sekadar menikmati suasana alam yang damai.
              </p>
              <p className="text-sm sm:text-base mb-4  indent-8">
                Bagi masyarakat Desa Mattabulu, Puncak Appasarenge bukan hanya destinasi wisata, tetapi juga bagian dari identitas alam desa mereka. Puncak ini mencerminkan kekayaan alam Sulawesi Selatan yang masih alami, sekaligus menjadi simbol potensi wisata yang terus dikembangkan oleh BUMDes Pada Ati untuk meningkatkan perekonomian lokal melalui UMKM dan kegiatan pariwisata.
              </p>
              <p className="text-sm sm:text-base indent-8">
                Puncak Appasarenge adalah destinasi yang wajib dikunjungi bagi siapa saja yang ingin merasakan pesona alam Desa Mattabulu. Dengan akses yang relatif mudah dan pemandangan yang menawan, puncak ini menjanjikan pengalaman wisata yang tak terlupakan di jantungan Sulawesi Selatan.
              </p>
            </>
          )}

          {activeTab === "lokasi" && (
            <>
              <h2 className="text-base sm:text-lg md:text-xl font-bold mb-4">Lokasi dan Akses</h2>
              <p className="text-sm sm:text-base mb-4 indent-8">
                Puncak Appasarenge terletak di wilayah Desa Mattabulu, Kecamatan Lalabata, Kabupaten Soppeng, Sulawesi Selatan. Lokasi ini memiliki akses jalan yang cukup baik dan bisa dijangkau dengan kendaraan roda dua maupun roda empat.
              </p>

              <p className="text-sm sm:text-base font-semibold mb-2">Rute:</p>
              <ol className="list-decimal list-inside space-y-1 pl-4 mb-4 text-sm sm:text-base">
                <li>
                  Dari pusat kota Watansoppeng, kamu dapat menempuh perjalanan sekitar 40–50 menit menuju Desa Mattabulu.
                </li>
                <li>
                  Setelah itu, jalur menuju puncak bisa dilalui dengan trekking ringan yang menambah pengalaman seru.
                </li>
                <li>
                  Ikuti petunjuk menuju jalur pendakian atau lokasi puncak.
                </li>
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