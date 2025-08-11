import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Pesona Mattabulu</title>
      </Head>

      {/* Header (biru) */}
      <Header />

      {/* Hero Section (gambar dan deskripsi) */}
      <section className="relative h-[250px] sm:h-[350px] md:h-[450px]">
        {/* Gambar latar */}
        <img
          src="/latar.png"
          alt="Pemandangan Mattabulu"
          className="w-full h-full object-cover"
        />

        {/* Kotak hitam transparan di bawah */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#00000099] p-4 sm:p-6 md:p-10 text-white rounded-t-lg">
          <h1 className="text-lg sm:text-2xl md:text-3xl font-bold mb-2">Desa Mattabulu</h1>
          <p className="text-[10px] sm:text-sm md:text-base leading-relaxed">
            Desa Mattabulu Kecamatan Lalabata Kabupaten Soppeng Provinsi Sulawesi
            Selatan berada di ketinggian 1000 MDPL sehingga memiliki panorama alam
            yang indah, udara yang sejuk dan asri. Terdapat hutan pinus yang
            dijadikan objek wisata bernama <strong>LEMBAH CINTA</strong> yang memiliki
            cerita romantis dari awal pembuatannya.
          </p>
        </div>
      </section>

      <div className="flex justify-center py-4 space-x-2">
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-6 pb-10">
        {/* Card Situs Wisata */}
        <a href="/situswisata" className="relative rounded-lg overflow-hidden shadow-md group block">
          <img
            src="/situs.png"
            alt="Situs Wisata"
            className="w-full h-32 sm:h-45 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-white text-lg sm:text-2xl font-semibold">Situs Wisata</h2>
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
            <h2 className="text-white text-lg sm:text-2xl font-semibold">UMKM</h2>
          </div>
        </a>
      </section>

      {/* Footer (biru) */}
      <Footer />
    </div>
  );
}