import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Pesona Mattabulu</title>
      </Head>

      {/* Header (biru) */}
      <header className="bg-[#62BEDD] h-20 sm:h-30 px-4 sm:px-6 flex items-center justify-center">
        <img src="/icon1.png" alt="Pesona Mattabulu" className="h-full max-h-full object-contain" />
      </header>

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
      <footer className="bg-[#62BEDD] text-white px-4 sm:px-6 mt-auto overflow-hidden">
        <div className="max-w-7xl mx-auto h-full flex flex-col md:flex-col lg:flex-row justify-center md:justify-center lg:justify-between items-center space-y-4 md:space-y-4 lg:space-y-0 py-4 md:py-4 lg:py-0 text-center md:text-center lg:text-left">
          {/* Logo kiri */}
          <div className="h-full flex items-center">
            <img src="/icon1.png" alt="Pesona Mattabulu" className="h-16 md:h-20 lg:h-30 object-contain" />
          </div>

          {/* Location + Sosmed di kanan */}
          <div className="flex flex-col md:flex-col lg:flex-row lg:items-start lg:space-x-12 text-xs md:text-sm">
            {/* Location */}
            <div className="text-center md:text-center lg:text-left">
              <p className="font-semibold">Location</p>
              <p>
                Desa Mattabulu, Kecamatan Lalabata,<br />
                Kabupaten Soppeng, Sulawesi Selatan<br />
                90811.
              </p>
            </div>

            {/* Sosmed */}
            <div className="mt-4 md:mt-4 lg:mt-0 text-center md:text-center lg:text-left">
              <p className="font-semibold mb-2">Find us on...</p>
              <div className="flex justify-center md:justify-center lg:justify-start space-x-3">
                <a href="#"><img src="/facebook.png" alt="Facebook" className="h-5 md:h-6 lg:h-6 w-5 md:w-6 lg:w-6" /></a>
                <a href="#"><img src="/instagram.png" alt="Instagram" className="h-5 md:h-6 lg:h-6 w-5 md:w-6 lg:w-6" /></a>
                <a href="#"><img src="/yt.png" alt="YouTube" className="h-5 md:h-6 lg:h-6 w-5 md:w-6 lg:w-6" /></a>
                <a href="#"><img src="/tiktok.png" alt="TikTok" className="h-5 md:h-6 lg:h-6 w-5 md:w-6 lg:w-6" /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}