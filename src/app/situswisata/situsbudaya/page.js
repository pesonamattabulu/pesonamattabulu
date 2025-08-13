"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function SitusBudayaPage() {
  const [activeTab, setActiveTab] = useState("bulu");

  const situsBudayaData = {
    bulu: {
      title: "Petta Bulu Matanre",
      image: "/pettabulu.jpg",
    },
    awo: {
      title: "Petta Awo",
      image: "/awo.jpg",
    },
    abbanuange: {
      title: "Petta Abbanuange",
      image: "/pettaabbanuange.jpg",
    },
  };

  const staticDescription = `
    Desa Mattabulu, yang terletak di Kecamatan Lalabata, Kabupaten Soppeng, Sulawesi Selatan, merupakan destinasi yang kaya akan warisan budaya. Desa ini dikenal karena keberadaan situs-situs budaya yang menjadi bagian penting dari sejarah dan identitas masyarakat Bugis. Tiga situs budaya utama di Desa Mattabulu adalah Petta Bulu Matanre, Petta Awo, dan Petta Abbanuange, yang masing-masing memiliki nilai sejarah dan spiritual yang mendalam bagi masyarakat setempat.
  
    Petta Bulu Matanre adalah salah satu situs budaya yang dihormati di Desa Mattabulu. Situs ini merupakan tempat ziarah yang dikaitkan dengan tokoh leluhur yang bijaksana, yang dikenal sebagai salah satu tokoh pertama yang memeluk Islam di wilayah Soppeng. Lingkungan situs ini masih alami dan tenang, menjadikannya tempat yang ideal untuk refleksi spiritual dan menghormati warisan leluhur. Petta Bulu Matanre tidak hanya menjadi simbol keimanan, tetapi juga cerminan nilai-nilai kepemimpinan dan kearifan lokal yang terus dijunjung tinggi.
  
    Selain Petta Bulu Matanre, Desa Mattabulu juga memiliki dua situs budaya penting lainnya, yaitu Petta Awo dan Petta Abbanuange. Kedua situs ini sama-sama menyimpan nilai sejarah dan budaya yang signifikan, melengkapi kekayaan warisan Desa Mattabulu. Meskipun tidak kalah penting, keduanya sering menjadi bagian dari kunjungan budaya yang memperkaya pengalaman wisatawan yang datang untuk mempelajari sejarah dan tradisi masyarakat Bugis di Soppeng.

    Ketiga situs budaya ini mencerminkan kekayaan sejarah, spiritualitas, dan tradisi masyarakat Desa Mattabulu. Mereka tidak hanya menjadi tempat ziarah, tetapi juga simbol kebanggaan budaya yang terus dilestarikan. Bagi pengunjung, situs-situs ini menawarkan wawasan tentang nilai-nilai luhur masyarakat Bugis dan peran penting Desa Mattabulu dalam sejarah Sulawesi Selatan.
    `;
  const staticMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.554374256154!2d119.88857097499358!3d-4.369233296640814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dba52b8c05f2ec1%3A0x9b90a508cc728cdf!2sMattabulu%2C%20Kec.%20Lalabata%2C%20Kabupaten%20Soppeng!5e0!3m2!1sid!2sid!4v1691234567890!5m2!1sid!2sid";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main */}
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* Tombol Navigasi */}
        <div className="flex justify-end mb-4 sm:mb-6 space-x-2">
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

        {/* Gambar */}
        <div className="mb-6 sm:mb-8">
          <img
            src={situsBudayaData[activeTab].image}
            alt={situsBudayaData[activeTab].title}
            className="w-full h-48 sm:h-64 md:h-90 rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-4 mb-4">
          {Object.keys(situsBudayaData).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base font-semibold rounded-t-md ${
                activeTab === key ? "bg-[#FFF9DC] text-black" : "bg-gray-200 text-gray-600"
              }`}
            >
              {situsBudayaData[key].title}
            </button>
          ))}
        </div>

        {/* Konten & Map */}
        <div className="bg-[#FFF9DC] p-4 sm:p-6 rounded-lg text-gray-800 shadow-sm space-y-6">
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">Situs Budaya Desa Mattabulu</h2>
            <p className="text-sm sm:text-base text-justify whitespace-pre-line leading-relaxed tracking-wide">
              {staticDescription.trim()}
            </p>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 mt-8">Kontak</h2>
            <p className="text-sm sm:text-base text-justify whitespace-pre-line leading-relaxed tracking-wide">
              Untuk Informasi Lebih Lanjut Bisa Menghubungi Lembaga Adat Desa dan BUMDes
            </p>
            <p className="text-sm sm:text-base text-blue-600 font-semibold mt-2">0852-4209-0844</p>
          </div>

          {/* Google Maps Embed */}
          <div className="w-full h-48 sm:h-64 md:h-80">
            <iframe
              src={staticMapUrl}
              className="w-full h-full rounded-md border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Petta Bulu Matanre"
            ></iframe>
          </div>
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