"use client";

import Slider from "react-slick";
import Link from "next/link";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const umkm2List = [
  {
    name: "Gula Semut",
    image: "/gulasemut.jpg",
    price: "Rp 15.000",
    link: "produk-umkm/GulaSemut",
  },
  {
    name: "Gula Aren Cair",
    image: "/gulaaren.jpg",
    price: "Rp 15.000",
    link: "produk-umkm/GulaAren",
  },
  {
    name: "Eksaf/Souvenir",
    image: "/eksaf.jpg",
    price: "Rp 5.000",
    link: "produk-umkm/Eksaf",
  },
  {
    name: "Kopi Mattabulu",
    image: "/kopi.jpg",
    price: "Rp 50.000",
    link: "produk-umkm/KopiMattabulu",
  },
  {
    name: "Kemiri",
    image: "/kemiri.jpg",
    price: "Rp 10.000",
    link: "produk-umkm/Kemiri",
  },
  {
    name: "Kunyit Bubuk",
    image: "/kunyit.jpg",
    price: "Rp 15.000",
    link: "produk-umkm/KunyitBubuk",
  },
  {
    name: "Kayu Secang",
    image: "/kayusecang.jpg",
    price: "Rp 20.000",
    link: "produk-umkm/KayuSecang",
  },
  {
    name: "Kopi Saset",
    image: "/kopisaset.jpg",
    price: "Rp 10,000",
    link: "produk-umkm/KopiSaset",
  },
  {
    name: "Teh Kopi",
    image: "/tehkopi.jpg",
    price: "Rp 20.000",
    link: "produk-umkm/TehKopi",
  },
  {
    name: "Air Nira",
    image: "/airnira.jpg",
    price: "Rp 15.000",
    link: "produk-umkm/AirNira",
  },
  {
    name: "Dodol Pangi",
    image: "/dodolpangi.jpg",
    price: "Rp 30.000",
    link: "produk-umkm/DodolPangi",
  },
  {
    name: "Kue Kopi",
    image: "/kuekopi.jpg",
    price: "Rp 55.000",
    link: "produk-umkm/KueKopi",
  },
  {
    name: "Keripik Pisang Madu",
    image: "/keripikpisangmadu.jpg",
    price: "Rp 20.000",
    link: "produk-umkm/KeripikPisangMadu",
  },
  {
    name: "Plakat/Piala Kayu",
    image: "/plakat.jpg",
    price: "Rp 100.000",
    link: "produk-umkm/Plakat",
  },
  {
    name: "Kuosa/Gelas Kayu",
    image: "/kuosa.jpg",
    price: "Rp 70.000",
    link: "produk-umkm/Kuosa",
  },
  {
    name: "Madu Asli Mattabulu",
    image: "/madu.jpg",
    price: "Rp 180.000",
    link: "produk-umkm/Madu",
  },
];

export default function Page() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    centerMode: false,
    variableWidth: false,
    arrows: true,
    customPaging: (i) => {
      return <button className={i < 3 ? "visible-dot" : "hidden-dot"} />;
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          customPaging: (i) => <button className={i < 3 ? "visible-dot" : "hidden-dot"} />,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          customPaging: (i) => <button className={i < 3 ? "visible-dot" : "hidden-dot"} />,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Produk UMKM - Pesona Mattabulu</title>
      </Head>

     {/* Header (biru) */}
       <Header />
  
      {/* Main content */}
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6">
        <div className="w-full max-w-5xl flex flex-col items-center">
          {/* Judul + tombol navigasi */}
          <div className="relative mb-6 sm:mb-10 flex items-center justify-center w-full">
            <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-black text-center">Produk UMKM</h1>
            <div className="absolute right-0 flex space-x-2">
              <Link href="/" title="Home" className="w-6 h-6 sm:w-10 sm:h-10 flex items-center justify-center bg-[#62BEDD] text-white rounded-full shadow hover:bg-[#4aaac2] transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M3 9L12 2l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </Link>
              <Link href="/umkm" title="Kembali" className="w-6 h-6 sm:w-10 sm:h-10 flex items-center justify-center bg-[#62BEDD] text-white rounded-full shadow hover:bg-[#4aaac2] transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Slider */}
          <div className="w-full overflow-hidden">
            <Slider {...settings}>
              {umkm2List.map((item, index) => (
                <div key={index} className="px-2">
                  <Link href={item.link}>
                    <div className="relative h-48 sm:h-60 md:h-72 rounded-lg overflow-hidden shadow-md cursor-pointer hover:opacity-90 transition">
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        className="w-full h-full object-cover block"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.6)] text-white text-center py-2 sm:py-3">
                        <h2 className="text-xs sm:text-sm md:text-base font-semibold">{item.name}</h2>
                        <p className="text-xs sm:text-sm">{item.price}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </main>

      {/* Footer (biru) */}
      <Footer />

      {/* CSS Global Fix */}
      <style jsx global>{`
        html, body, #__next {
          overflow-x: hidden;
        }
        *, *::before, *::after {
          box-sizing: border-box;
        }
        .slick-slider {
          width: 100%;
          margin: 0 auto;
          padding-bottom: 40px; /* Add space for dots below slides */
        }
        .slick-list {
          overflow: hidden !important;
          margin: 0 -8px;
        }
        .slick-track {
          display: flex !important;
          align-items: center;
        }
        .slick-slide {
          display: flex !important;
          justify-content: center;
          align-items: center;
          min-width: 0 !important;
        }
        .slick-slide > div {
          width: 100%;
          max-width: 100%;
        }
        .slick-slide img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .slick-dots {
          position: absolute;
          bottom: 0px; /* Position dots directly below slides */
          display: flex !important;
          justify-content: center;
          width: 100%;
          padding: 0;
          margin: 0;
          list-style: none;
        }
        .slick-dots li {
          width: 10px;
          margin: 0 5px;
        }
        .slick-dots li button {
          width: 10px;
          height: 10px;
          padding: 0;
        }
        .slick-dots li button:before {
          font-size: 12px !important;
          color: #000 !important;
          opacity: 0.25;
          width: 10px;
          height: 10px;
          line-height: 10px;
        }
        .slick-dots li.slick-active button:before {
          color: #000 !important;
          opacity: 1;
        }
        /* Hide dots beyond the first three */
        .slick-dots li.hidden-dot {
          display: none;
        }
        @media (max-width: 640px) {
          .slick-dots {
            bottom: -10px; /* Adjust for smaller screens */
          }
          .slick-dots li button:before {
            font-size: 10px !important;
            width: 8px;
            height: 8px;
            line-height: 8px;
          }
        }
      `}</style>
    </div>  
  );
}