"use client";

import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const wisataList = [
  {
    name: "Air Terjun Liu Pangie",
    image: "/at.jpg",
    link: "/situswisata/liu-pangie",
  },
  {
    name: "Lembah Cinta",
    image: "/situs.png",
    link: "/situswisata/lembah-cinta",
  },
  {
    name: "Puncak Appasarenge",
    image: "/puncak.png",
    link: "/situswisata/puncak-apasarenge",
  },
  {
    name: "Situs Budaya",
    image: "/situsbudaya.jpg",
    link: "/situswisata/situsbudaya",
  },
];

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        {/* Judul + Tombol Navigasi */}
        <div className="relative mb-6 sm:mb-10 flex items-center justify-center w-full">
          <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-black text-center">Situs Wisata</h1>
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
              href="/"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {wisataList.map((item, index) => (
            <Link key={index} href={item.link}>
              <div className="relative h-48 sm:h-60 md:h-70 rounded-lg overflow-hidden shadow-md cursor-pointer group">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay teks di bawah */}
                <div className="absolute bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.4)] text-white text-center py-1 sm:py-2">
                  <h2 className="text-xs sm:text-sm md:text-base font-semibold">{item.name}</h2>
                </div>
              </div>
            </Link>
          ))}
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
