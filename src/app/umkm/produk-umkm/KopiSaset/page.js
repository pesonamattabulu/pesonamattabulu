"use client";

import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { useRouter } from 'next/navigation';

export default function Page() {

     const router = useRouter();
    
      const handleBack = (e) => {
        e.preventDefault();
        if (window.history.length > 1) {
          router.back();
        } else {
          router.push('/umkm/produk-umkm'); // fallback kalau tidak ada history
        }
      };
      
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 pt-20 md:pt-28">
        {/* Judul + Tombol Navigasi */}
        <div className="relative mb-6 sm:mb-10 flex items-center justify-center w-full">
          <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-black text-center">Kopi Saset</h1>
          <div className="absolute right-0 flex space-x-2">
            <Link
              href="/umkm/produk-umkm"
              onClick={handleBack}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Gambar */}
          <img
            src="/kopisaset.jpg"
            alt="Kopi Saset"
            className="w-full max-w-xs sm:max-w-sm mx-auto rounded shadow-md object-cover"
          />

          {/* Detail box */}
          <div className="bg-[#FFFDD0] p-4 sm:p-6 rounded shadow-md text-black">
            {/* Harga */}
            <div className="mb-4">
              <p className="text-lg sm:text-xl font-semibold mb-1">Price</p>
              <span className="bg-[#574A24] text-white font-bold px-3 py-1 rounded text-base sm:text-lg">
                Rp. 10.000
              </span>
            </div>

            {/* Varian */}
            <div className="mb-4">
              <p className="text-lg sm:text-xl font-semibold mb-2">Varian</p>
              <ul className="space-y-1">
                <li><span className="text-yellow-600">✅</span> Arabica</li>
                <li><span className="text-yellow-600">✅</span> Robusta</li>
              </ul>
            </div>

            {/* Kontak */}
            <div className="mb-4">
              <p className="text-lg sm:text-xl font-semibold">Kontak</p>
              <p className="text-base sm:text-lg font-light">083110006061</p>
            </div>

            <p className="text-sm text-[#80775c] font-semibold mt-6">Dikelola oleh BUMDes</p>
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