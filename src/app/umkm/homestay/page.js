import React from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const homestayList = [
  {
    name: "Homestay Cemara",
    image: "/cemara.jpg",
    link: "homestay/homestaycemara",
  },
  {
    name: "Homestay Kemiri",
    image: "/homekemiri.jpg",
    link: "homestay/homestaykemiri",
  },
];

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Metadata */}
      <Head>
        <title>Homestay - Pesona Mattabulu</title>
      </Head>

      {/* Header (biru) */}
      <Header />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 flex flex-col justify-center pt-20 md:pt-28">
        {/* Judul Homestay + Tombol Navigasi */}
        <div className="relative mb-6 sm:mb-10 flex items-center justify-center">
          <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-black text-center">
            Homestay
          </h1>
          <div className="absolute right-0 flex space-x-2">
            <Link
              href="/umkm"
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
        </div>

        {/* List Homestay */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6">
          {homestayList.map((item, index) => (
            <Link key={index} href={item.link}>
              <div className="relative h-50 sm:h-64 md:h-70 rounded-lg overflow-hidden shadow-md cursor-pointer group">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay teks di bawah */}
                <div className="absolute bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.4)] text-white text-center py-2 sm:py-3">
                  <h2 className="text-xs sm:text-sm md:text-base font-semibold">{item.name}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer (biru) */}
      <Footer />
      
    </div>
  );
}