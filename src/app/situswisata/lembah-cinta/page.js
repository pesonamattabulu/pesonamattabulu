"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LembahCintaPage() {
  const [activeTab, setActiveTab] = useState("deskripsi");

  const images = ["/L1.jpg", "/L2.jpg", "/L3.jpg", "/situs.png"];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow mx-auto px-4 sm:px-6 py-6 sm:py-8 w-full max-w-4xl">
        <div className="flex justify-end space-x-2 mb-4 sm:mb-6">
          <Link
            href="/"
            title="Home"
            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[#62BEDD] text-white rounded-full shadow hover:bg-[#4aaac2] transition"
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
            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[#62BEDD] text-white rounded-full shadow hover:bg-[#4aaac2] transition"
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

        <div className="mb-6 sm:mb-10 overflow-hidden">
          <Slider {...sliderSettings}>
            {images.map((src, idx) => (
              <div key={idx} className="w-full">
                <img
                  src={src}
                  alt={`Lembah Cinta ${idx + 1}`}
                  className="w-full h-auto aspect-[16/9] rounded-lg shadow-md object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="flex overflow-x-auto space-x-2 sm:space-x-4 mb-4">
          <button
            className={`flex-shrink-0 px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base font-semibold rounded-t-md ${
              activeTab === "deskripsi"
                ? "bg-[#FFF9DC] text-black"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setActiveTab("deskripsi")}
          >
            Deskripsi
          </button>
          <button
            className={`flex-shrink-0 px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base font-semibold rounded-t-md ${
              activeTab === "lokasi"
                ? "bg-[#FFF9DC] text-black"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setActiveTab("lokasi")}
          >
            Lokasi
          </button>
        </div>

        <div className="bg-[#FFF9DC] p-4 sm:p-6 rounded-lg text-justify text-gray-800 shadow-sm">
          {activeTab === "deskripsi" && (
            <>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
                Lembah Cinta
              </h1>
              <p className="text-sm sm:text-base mb-4 indent-8">
                Lembah Cinta Desa Mattabulu adalah destinasi wisata alam yang
                memukau di Kabupaten Soppeng, Sulawesi Selatan, Indonesia.
                Terletak di Desa Mattabulu, Kecamatan Lalabata, tempat ini
                dikenal dengan keindahan hutan pinus yang asri dan panorama
                bukit-bukit hijau. Lembah Cinta menawarkan suasana sejuk dan
                damai, cocok untuk melepas penat dari rutinitas sehari-hari.
                Destinasi ini juga memiliki cerita romantis sejak awal
                pembuatannya, yang menambah daya tarik tersendiri.
              </p>
              <p className="text-sm sm:text-base mb-4 indent-8">
                Fasilitas di Lembah Cinta Desa Mattabulu cukup lengkap untuk
                menjamin kenyamanan pengunjung. Terdapat area parkir untuk
                kendaraan pribadi, warung yang menyediakan makanan dan minuman,
                serta bangku-bangku untuk bersantai. Pengelolaan destinasi ini
                dilakukan oleh Badan Usaha Milik Desa (BUMDes) Pada Ati Desa
                Mattabulu, memastikan fasilitas dan wahana terus dikembangkan
                untuk kenyamanan pengunjung. Kawasan ini dilengkapi dengan
                berbagai wahana outbound dan spot foto estetik, menjadikannya
                favorit bagi keluarga dan pecinta petualangan.
              </p>
              <p className="text-sm sm:text-base font-semibold mb-2">
                Aktivitas yang Dapat Dilakukan:
              </p>
              <ol className="list-decimal list-inside space-y-1 pl-4 mb-4 text-sm sm:text-base">
                <li>
                  Outbound: Nikmati flying fox, sepeda gantung, dan halang
                  rintang untuk pengalaman seru.
                </li>
                <li>
                  Camping: Dirikan tenda di area camping ground dan saksikan
                  matahari terbit atau terbenam.
                </li>
                <li>
                  Fotografi: Abadikan momen di spot seperti pintu langit dan
                  rumah pohon.
                </li>
                <li>
                  Trekking: Jelajahi jalur pendakian ringan dengan pemandangan
                  daun berguguran yang indah.
                </li>
              </ol>
            </>
          )}

          {activeTab === "lokasi" && (
            <>
              <h2 className="text-base sm:text-lg md:text-xl font-bold mb-4">
                Lokasi dan Akses
              </h2>
              <p className="text-sm sm:text-base mb-4 indent-8">
                Lembah Cinta terletak di Desa Mattabulu, Kecamatan Lalabata,
                Kabupaten Soppeng, Sulawesi Selatan. Jaraknya sekitar 7-10 km
                dari pusat kota Watansoppeng, dapat ditempuh dalam 15-30 menit
                dengan kendaraan roda dua atau roda empat. Jalur menuju lokasi
                cukup baik, meski disarankan menggunakan kendaraan roda dua
                untuk akses yang lebih mudah karena beberapa bagian jalannya
                sempit.
              </p>
              <p className="text-sm sm:text-base font-semibold mb-2">Rute:</p>
              <ol className="list-decimal list-inside space-y-1 pl-4 mb-4 text-sm sm:text-base">
                <li>
                  Dari Kota Watansoppeng, arahkan perjalanan ke Kecamatan
                  Lalabata.
                </li>
                <li>Ikuti petunjuk menuju Desa Mattabulu.</li>
                <li>Cari tanda menuju Lembah Cinta.</li>
              </ol>

              <div className="mt-4 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1989.0912885777939!2d119.81557334442749!3d-4.376870899999991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d95f50e8068cb19%3A0xb40360aa545b5310!2sWisata%20Alam%20Lembah%20Cinta!5e0!3m2!1sid!2sid!4v1754144328087!5m2!1sid!2sid"
                  className="w-full h-[200px] sm:h-[300px] md:h-[400px] rounded-lg shadow"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <a
                  href="https://maps.app.goo.gl/NJwb1NbqN4LMFatk7"
                  target="_blank"
                  className="text-blue-700 text-sm sm:text-base font-semibold mt-2 inline-block"
                  rel="noopener noreferrer"
                >
                  📍 Lihat Lokasi
                </a>
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />

      <style jsx global>{`
        html,
        body,
        #__next {
          overflow-x: hidden;
        }
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        @media (max-width: 640px) {
          .slick-slider {
            width: 100% !important;
            overflow: hidden;
          }
          .slick-list {
            width: 100% !important;
          }
          main {
            padding: 1rem;
          }
          .bg-[#FFF9DC] {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
}