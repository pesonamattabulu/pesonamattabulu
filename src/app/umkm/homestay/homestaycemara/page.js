"use client";

import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import Head from "next/head";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomestayCemara() {
  const images = ["/h1.jpg", "/h2.jpg", "/h3.jpg", "/h4.jpg"];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Head>
        <title>Homestay Cemara - Pesona Mattabulu</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 pt-18 md:pt-28 w-full">
        
        {/* Slider Section */}
        <section className="relative pt-16 sm:pt-20 pb-6 w-full overflow-hidden">
          {/* Floating Buttons */}
          <div className="absolute top-4 right-4 z-20 flex space-x-2">
            {/* Back Button */}
            <Link
              href="/umkm/homestay"
              title="Kembali"
              className="w-6 h-6 sm:w-10 sm:h-10 flex items-center justify-center bg-[#574A24] text-white rounded-full shadow hover:bg-[#80775c]"
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

          {/* Slider Wrapper */}
          <div className="w-full overflow-hidden px-0">
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
          </div>
        </section>

        {/* Title */}
        <h1 className="text-xl sm:text-2xl font-bold text-black mb-6">
          Homestay Cemara
        </h1>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start w-full">
          {/* Image */}
          <div>
            <img
              src="/cemara.jpg"
              alt="Homestay Cemara"
              className="rounded-md shadow-lg w-full"
            />
          </div>

          {/* Info Box */}
          <div className="bg-[#62BEDD] rounded-md p-4 sm:p-6 shadow-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Price + Contact */}
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-base sm:text-lg text-black mb-1">
                    Price
                  </p>
                  <p className="bg-blue-100 text-black font-bold inline-block px-3 sm:px-4 py-1 rounded-md">
                    Rp. 250.000
                  </p>
                </div>
                <div>
                  <p className="font-bold text-base sm:text-lg text-black">
                    Kontak
                  </p>
                  <p className="mt-1 text-black text-sm sm:text-base">
                    📞 0813-5536-7552
                  </p>
                </div>
              </div>

              {/* Map */}
              <div>
                <p className="font-bold text-base sm:text-lg mb-2 text-black">
                  Lokasi
                </p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3978.265015104596!2d119.82052900000001!3d-4.361330999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwMjEnNDAuOCJTIDExOcKwNDknMTMuOSJF!5e0!3m2!1sid!2sid!4v1754901488167!5m2!1sid!2sid"
                  width="100%"
                  height="150"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <a
                  href="https://maps.app.goo.gl/pDWpTCGb4qrUSDQG8"
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
      <Footer />

      {/* Global CSS fix */}
      <style jsx global>{`
        html, body {
          overflow-x: hidden;
          width: 100%;
          margin: 0;
        }

        .slick-prev:before,
        .slick-next:before {
          color: black;
          font-size: 28px;
        }

        .slick-prev {
          left: 20px !important;
          z-index: 20;
        }
        .slick-next {
          right: 20px !important;
          z-index: 20;
        }

        .slick-list {
          margin: 0 -6px;
          overflow: hidden;
        }
        .slick-slide > div {
          margin: 0 6px;
        }
      `}</style>
    </div>
  );
}