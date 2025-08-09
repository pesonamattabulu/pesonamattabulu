"use client";

import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import Head from "next/head";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomestayKemiri() {
  const images = ["/a1.jpg", "/a2.jpg", "/a3.jpg", "/a4.jpg"];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Homestay Kemiri - Pesona Mattabulu</title>
      </Head>

      {/* Header */}
      <header className="bg-[#62BEDD] h-20 sm:h-30 px-4 sm:px-6 flex items-center justify-center">
          <img
            src="/icon1.png"
            alt="Pesona Mattabulu"
            className="h-full max-h-full object-contain"
          />
      </header>

      {/* Slider Section */}
      <section className="relative px-4 sm:px-6 pt-16 sm:pt-20 pb-6 max-w-7xl mx-auto w-full">
        {/* Floating Buttons */}
        <div className="absolute top-4 right-4 z-20 flex space-x-2">
          <Link
            href="/"
            title="Home"
            className="w-6 h-6 sm:w-10 sm:h-10 flex items-center justify-center bg-[#62BEDD] text-white rounded-full shadow hover:bg-[#4aaac2]"
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
            href="/umkm/homestay"
            title="Kembali"
            className="w-6 h-6 sm:w-10 sm:h-10 flex items-center justify-center bg-[#62BEDD] text-white rounded-full shadow hover:bg-[#4aaac2]"
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

        <Slider {...sliderSettings}>
          {images.map((src, idx) => (
            <div key={idx} className="px-2">
              <img
                src={src}
                alt={`Slide ${idx + 1}`}
                className="w-full h-40 sm:h-52 md:h-64 object-cover rounded-md shadow-md"
              />
            </div>
          ))}
        </Slider>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pb-10">
        <h1 className="text-xl sm:text-2xl font-bold text-black mb-6">
          Homestay Kemiri
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Gambar */}
          <div>
            <img
              src="/homekemiri.jpg"
              alt="Homestay Kemiri"
              className="rounded-md shadow-lg w-full"
            />
          </div>

          {/* Info Box */}
          <div className="bg-[#62BEDD] rounded-md p-4 sm:p-6 shadow-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-base sm:text-lg text-black mb-1">
                    Price
                  </p>
                  <p className="bg-blue-100 text-black font-bold inline-block px-3 sm:px-4 py-1 rounded-md">
                    Rp. 300.000
                  </p>
                </div>
                <div>
                  <p className="font-bold text-base sm:text-lg text-black">
                    Kontak
                  </p>
                  <p className="mt-1 text-black text-sm sm:text-base">
                    📞 08132337471
                  </p>
                </div>
              </div>

              {/* Map */}
              <div>
                <p className="font-bold text-base sm:text-lg mb-2 text-black">
                  Lokasi
                </p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127244.02047050157!2d119.9466576!3d-4.3604895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbefba862cff1a3%3A0x3030bfbcaf770b0!2sMattabulu%2C%20Lalabata%2C%20Soppeng%2C%20South%20Sulawesi!5e0!3m2!1sen!2sid!4v1699999999999"
                  width="100%"
                  height="150"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <a
                  href="https://www.google.com/maps?q=Mattabulu,+Lalabata,+Soppeng,+South+Sulawesi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-blue-700 hover:underline inline-block text-sm sm:text-base"
                >
                  📍 Lihat Lokasi
                </a>
              </div>
            </div>

            {/* Fasilitas */}
            <div className="mt-6">
              <p className="font-bold text-base sm:text-lg mb-2 text-black">
                Fasilitas
              </p>
              <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-black">
                <li>✅ Kamar Mandi Bersama</li>
                <li>✅ Sarapan Pagi</li>
                <li>✅ Perlengkapan Mandi</li>
                <li>✅ Wifi Area</li>
              </ul>
            </div>
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
                  <img
                    src="/facebook.png"
                    alt="Facebook"
                    className="h-5 md:h-6 lg:h-6 w-5 md:w-6 lg:w-6"
                  />
                </a>
                <a href="#">
                  <img
                    src="/instagram.png"
                    alt="Instagram"
                    className="h-5 md:h-6 lg:h-6 w-5 md:w-6 lg:w-6"
                  />
                </a>
                <a href="#">
                  <img
                    src="/yt.png"
                    alt="YouTube"
                    className="h-5 md:h-6 lg:h-6 w-5 md:w-6 lg:w-6"
                  />
                </a>
                <a href="#">
                  <img
                    src="/tiktok.png"
                    alt="TikTok"
                    className="h-5 md:h-6 lg:h-6 w-5 md:w-6 lg:w-6"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
  html, body {
    overflow-x: hidden;
  }
  .slick-prev:before,
  .slick-next:before {
    color: black;
    font-size: 30px;
  }
  .slick-prev {
    left: -20px;
    z-index: 10;
  }
  .slick-next {
    right: -10px;
    z-index: 10;
  }
`}</style>

    </div>
  );
}
