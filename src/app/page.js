"use client";

import Head from "next/head";
import HeaderMain from "./components/HeaderMain";
import Footer from "./components/Footer";
import { Rock_Salt } from "next/font/google";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const rockSalt = Rock_Salt({
  subsets: ["latin"],
  weight: "400", // Rock Salt cuma ada regular
});

// Deskripsi jangan panjang, cukup beberapa kalimat
const produkList = [
  { id: 1, nama: "Kopi Mattabulu", deskripsi: "Kopi khas Mattabulu dengan 2 varian biji kopi", img: "/kopi.jpg", link: "/umkm/produk-umkm/KopiMattabulu" },
  { id: 2, nama: "Madu", deskripsi: "Madu asli Mattabulu dengan 3 Varian rasa", img: "/madu.jpg", link: "/umkm/produk-umkm/Madu" },
  { id: 3, nama: "Dodol Pangi", deskripsi: "Dodol khas Mattabulu", img: "/dodolpangi.jpg", link: "/umkm/produk-umkm/DodolPangi" },
];


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Pesona Mattabulu</title>
      </Head>

      {/* Header (biru) */}
      <HeaderMain />

      {/* Hero Section (gambar dan deskripsi) */}
      <section className="relative h-[350px] sm:h-[500px] md:h-[650px]">
        {/* Gambar latar */}
        <img
          src="/latar2.png"
          alt="Pemandangan Mattabulu"
          className="w-full h-full object-cover"
        />

        {/* Kotak hitam transparan*/}
        <div className="absolute inset-0 bg-[#00000099] p-4 md:p-10 text-white flex flex-col justify-center items-center text-center">
          <h1 className={`${rockSalt.className} mb-3 md:mb-5 text-xl md:text-6xl`}>Desa Mattabulu</h1>
          <p className="italic text-xs md:text-xl opacity-90">
            Pesona alam, harmoni budaya
          </p>

          <button 
          onClick={() => window.location.href = "#profil"}
          className="bg-[#493c27] hover:bg-[#80775c] text-[#fae8b4] font-light text-xs sm:text-sm md:text-base mt-5 md:mt-5 py-2 px-3 sm:py-2 sm:px-4 md:py-2 md:px-6 rounded-md shadow-lg transition duration-300">
            EXPLORE
          </button>
            
        </div>
      </section>

      <section id="profil" className="w-full bg-white py-6 px-8 md:py-12 md:px-16 mt-5 md:mt-15">
        <div className="max-w-6xl mx-auto md:grid grid-cols-2 gap-4 md:gap-8 items-center">
    
            {/* Video YouTube */}
            <div className="w-full">
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/vlADNIv7CXM?si=c9cbpXY4R254xPuH"
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Deskripsi */}
            <div className="flex flex-col mt-5 md:mt-0 bg-[#f9f3e2] md:bg-white">
                <h2 className="text-[#493c27] font-bold mb-2 text-[10px] sm:text-xl md:text-3xl">
                  Profil Desa Mattabulu
                </h2>
                <p className="leading-relaxed text-[10px] sm:text-sm md:text-base text-gray-700 text-justify">
                  Desa Mattabulu adalah desa yang terletak di Kecamatan Lalabata, Kabupaten Soppeng. 
                  Dikenal dengan keindahan alam yang menawan, budaya yang beragam, serta 
                  masyarakat yang menjunjung tinggi nilai gotong royong. 
                  Desa ini memiliki potensi unggulan dalam bidang pariwisata, pertanian, 
                  dan UMKM lokal yang terus berkembang.
                </p>
              </div>
          </div>
       </section>

       <section className="grid grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 px-10 sm:px-6 py-5 md:py-20 mx-0 md:mx-15">
        {/* Card Situs Wisata */}
        <a href="/situswisata" className="relative rounded-lg overflow-hidden shadow-md group block">
          <img
            src="/situs.png"
            alt="Situs Wisata"
            className="w-full h-32 sm:h-45 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-white text-sm sm:text-2xl font-semibold">Situs Wisata</h2>
          </div>
        </a>

      {/* Card UMKM */}
        <a href="/umkm" className="relative rounded-lg overflow-hidden shadow-md group block">
          <img
            src="/umkm.png"
            alt="UMKM"
            className="w-full h-32 sm:h-45 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-white text-sm sm:text-2xl font-semibold text-center">UMKM & Homestay</h2>
          </div>
        </a>
      </section>

      {/* Produk UMKM */}  
       <div id="produk" className="bg-[#f9f3e2] py-15 mb-15">
        <div className="container mx-auto px-20">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl md:text-3xl font-bold text-[#493c27]">Produk UMKM</h2>
              <button 
              onClick={() => window.location.href = "/umkm/produk-umkm"}
              className="bg-[#493c27] text-white px-4 py-2 text-[8px] md:text-base rounded-lg shadow hover:opacity-90">
                Lihat Semua Produk
              </button>
          </div>

          {/* Swiper */}
            <Swiper
              spaceBetween={16}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {produkList.map((produk) => (
            <SwiperSlide key={produk.id}>
              <a
                href={produk.link}
                className="group bg-[#80775C] rounded-xl shadow p-6 flex flex-col h-full min-h-[300px] md:min-h-[380px] space-y-2 transform transition-transform duration-300 hover:scale-95 justify-center"
              >
                <img
                  src={produk.img}
                  alt={produk.nama}
                  className="w-full aspect-[4/3] md:h-full object-cover rounded-lg mb-3"
                />
                <h3 className="text-sm md:text-lg font-bold text-white">{produk.nama}</h3>
                <p className="text-xs md:text-sm text-gray-200">{produk.deskripsi}</p>
                <span className="text-[#FAE8B4] mt-auto text-xs md:text-sm flex items-center gap-2">
                  👁 Lihat Produk
                </span>
              </a>
            </SwiperSlide>

              ))}
            </Swiper>
          </div>
        </div>

    {/* Destinasi Wisata */}
      <div className="bg-[#493c27] py-20 mb-10 md:mt-5">
        <div className="container mx-auto px-6 md:px-0 lg:px-25">
          <div className="grid md:grid-cols-2 gap-8 items-center">

            {/* Kiri: Deskripsi */}
            <div className="text-white mx-10">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center md:text-start">Destinasi Wisata</h2>
              <p className="text-xs md:text-lg mb-6 text-justify">
                Lembah Cinta Soppeng adalah salah satu destinasi wisata favorit yang menawarkan 
                pemandangan lembah yang hijau dan udara yang sejuk. Cocok untuk rekreasi keluarga
                atau sekadar menikmati alam.
              </p>
              <p className="text-xs md:text-lg text-justify">
                Nikmati keindahan alam dan berbagai spot foto yang instagramable. Jangan lewatkan momen matahari terbenam yang memukau di lembah ini.
              </p>
              <div className="flex items-center mt-4 gap-1">
                <span className="text-yellow-400 text-xs md:text-lg">★</span>
                <span className="text-yellow-400 text-xs md:text-lg">★</span>
                <span className="text-yellow-400 text-xs md:text-lg">★</span>
                <span className="text-yellow-400 text-xs md:text-lg">★</span>
                <span className="text-yellow-400 text-xs md:text-lg">★</span>
                <span className="text-[8px] md:text-sm text-gray-300 ml-2">4.8 (Google Maps)</span>
                <span className="text-[8px] md:text-sm text-gray-300">|</span>
                <a
                  href="https://maps.app.goo.gl/NJwb1NbqN4LMFatk7"
                  target="_blank"
                  className="text-[#FAE8B4] text-[8px] md:text-base font-semibold hover:opacity-50"
                  rel="noopener noreferrer"
                >
                📍Lihat Lokasi
                </a>
              </div>

              
            </div>
              

            {/* Kanan: Foto */}
            <div className="relative group">
              <div className="shadow-lg transform transition-transform duration-300 group-hover:scale-101">
                  {/* Label Recommended */}
              <span className="absolute top-4 right-4 bg-[#dd0000] text-white text-xs md:text-sm px-2 py-1 rounded-full z-10 shadow">
                Recommended
              </span>

              {/* Foto */}
              <img 
                src="/L1.jpg" 
                alt="Lembah Cinta Soppeng" 
                className="w-full h-45 md:h-[380px] object-cover rounded-xl "
              />
              </div>
            
              {/* Tombol Selengkapnya */}
              <div className="mt-7 flex justify-end">
                <a 
                  href="/situswisata/lembah-cinta"
                  className="bg-[#CBBD93] text-[#433e2c] px-4 py-2 rounded-lg text-xs md:text-base shadow hover:opacity-90"
                >
                  Selengkapnya
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

<section id="informasi" className="container mx-auto p-6 mt-10 mb-15 px-15">
  <h2 className="text-2xl md:text-4xl font-bold text-center md:text-center mb-10 text-[#574A24]">LOKASI</h2>
  <div className="flex flex-col md:flex-row gap-6 items-center">
    {/* Map Section */}
    <div className="w-full md:w-1/2 h-full bg-stone-800 rounded-lg overflow-hidden shadow-md">
      <div className="relative">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63651.76903020442!2d119.76006134786286!3d-4.366888920665437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d95f53ab069d80b%3A0x42229b4ad45425c8!2sMattabulu%2C%20Kec.%20Lalabata%2C%20Kabupaten%20Soppeng%2C%20Sulawesi%20Selatan!5e0!3m2!1sid!2sid!4v1756229103179!5m2!1sid!2sid"
            className="w-full h-[200px] sm:h-[300px] md:h-[500px] rounded-lg shadow"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
      </div>
    </div>

    {/* Info Section */}
    <div className="flex flex-col w-full md:w-1/2 bg-stone-900 text-white rounded-lg shadow-md px-6 md:px-15 py-8 justify-center">
      <h2 className="text-sm md:text-2xl font-bold mb-4 text-center md:text-start">Lokasi Desa Mattabulu</h2>
      <p className="text-stone-300 mb-4 md:text-base text-xs">
        Temukan posisi strategis Desa Mattabulu di peta dengan mudah dan lengkap.
      </p>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-sm md:text-base text-center md:text-start">Informasi Lokasi</h3>
          <p className="text-stone-300 mb-4 md:text-base text-xs >Detail lengkap tentang lokasi."></p>
        </div>
        <div>
          <p className="flex items-center text-xs md:text-base">
            <span className="text-amber-400 mr-2 text-x">🏠</span>
            Alamat Lengkap: Desa Mattabulu, Kecamatan Lalabata, Kabupaten Soppeng, Sulawesi Selatan, Indonesia
          </p>
        </div>
        <div>
          <p className="flex items-center text-xs md:text-base">
            <span className="text-amber-400 mr-2">📍</span>
            Koordinat GPS: 4° 22′ 21.54″ S 119° 47′ 29.65″ E-4.37265, 119.791569
          </p>
        </div>
      </div>
      <div className="flex mt-10 justify-center md:justify-start">
        <a href="https://www.google.com/maps/place/Mattabulu,+Kec.+Lalabata,+Kabupaten+Soppeng,+Sulawesi+Selatan/@-4.3623959,119.768108,15z/data=!4m6!3m5!1s0x2d95f53ab069d80b:0x42229b4ad45425c8!8m2!3d-4.3664321!4d119.8005027!16s%2Fg%2F1hm5twk02?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D" className="bg-[#fae8b4] text-[#574A24] text-xs md:text-base px-4 py-2 rounded hover:bg-[#80775c]">
          Navigasi ke Desa
        </a>
      </div>
    </div>
  </div>
</section>

    
      {/* Footer */}
      <Footer />
    </div>
  );
}