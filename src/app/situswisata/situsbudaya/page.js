"use client";

import { useState } from "react";
import Link from "next/link";

export default function SitusBudayaPage() {
  const [activeTab, setActiveTab] = useState("bulu");

  const situsBudayaData = {
    bulu: {
      title: "Petta Bulu Matanre",
      image: "/pettabulu.jpg",
      description: `
        Petta Bulu Matanre adalah tokoh leluhur yang sangat dihormati di wilayah Soppeng. Ia dikenal sebagai pemimpin yang bijaksana dan salah satu tokoh pertama yang memeluk islam di Soppeng. Situs budaya ini menjadi tempat ziarah dan refleksi spiritual bagi masyarakat lokal, dengan lingkungan yang masih alami dan tenang.
      `,
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.554374256154!2d119.88857097499358!3d-4.369233296640814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dba52b8c05f2ec1%3A0x9b90a508cc728cdf!2sMattabulu%2C%20Kec.%20Lalabata%2C%20Kabupaten%20Soppeng!5e0!3m2!1sid!2sid!4v1691234567890!5m2!1sid!2sid",
    },
    awo: {
      title: "Petta Awo",
      image: "/awo.jpg",
      description: `
        Petta Awo merupakan salah satu tokoh berpengaruh dalam sejarah kerajaan Soppeng. Ia memiliki peran penting dalam penyebaran nilai-nilai budaya dan tradisi masyarakat Bugis. Situs Petta Awo kerap dijadikan tempat kegiatan budaya dan upacara adat.
      `,
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.554374256154!2d119.88857097499358!3d-4.369233296640814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dba52b8c05f2ec1%3A0x9b90a508cc728cdf!2sMattabulu%2C%20Kec.%20Lalabata%2C%20Kabupaten%20Soppeng!5e0!3m2!1sid!2sid!4v1691234567890!5m2!1sid!2sid",
    },
    abbanuange: {
      title: "Petta Abbanuange",
      image: "/pettaabbanuange.jpg",
      description: `
        Petta Abbanuange dikenal sebagai tokoh spiritual yang diyakini memiliki kekuatan gaib untuk menyembuhkan dan melindungi desa. Situs ini merupakan salah satu warisan budaya penting yang mencerminkan kepercayaan dan sistem nilai masyarakat setempat.
      `,
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.554374256154!2d119.88857097499358!3d-4.369233296640814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dba52b8c05f2ec1%3A0x9b90a508cc728cdf!2sMattabulu%2C%20Kec.%20Lalabata%2C%20Kabupaten%20Soppeng!5e0!3m2!1sid!2sid!4v1691234567890!5m2!1sid!2sid",
    },
  };

  const { title, image, description, mapUrl } = situsBudayaData[activeTab];

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
            src={image}
            alt={title}
            className="w-full h-48 sm:h-64 md:h-80 rounded-lg shadow-md object-cover"
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
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">{title}</h2>
            <p className="text-sm sm:text-base indent-8 text-justify whitespace-pre-line leading-relaxed tracking-wide">
              {description.trim()}
            </p>
          </div>

          {/* Google Maps Embed */}
          <div className="w-full h-48 sm:h-64 md:h-80">
            <iframe
              src={mapUrl}
              className="w-full h-full rounded-md border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Lokasi ${title}`}
            ></iframe>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#62BEDD] text-white px-4 sm:px-6 mt-auto overflow-hidden">
        <div className="max-w-7xl mx-auto h-full flex flex-col md:flex-col lg:flex-row justify-center md:justify-center lg:justify-between items-center space-y-4 md:space-y-4 lg:space-y-0 py-4 md:py-4 lg:py-0 text-center md:text-center lg:text-left">
          <div className="h-full flex items-center">
            <img
              src="/icon1.png"
              alt="Pesona Mattabulu"
              className="h-16 md:h-20 lg:h-30 object-contain"
            />
          </div>
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