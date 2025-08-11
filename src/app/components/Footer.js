export default function Footer() {
  return (
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
         {/* Sosmed */}
          <div className="mt-4 md:mt-4 lg:mt-0 text-center md:text-center lg:text-left">
            <p className="font-semibold mb-2">Find us on...</p>
            <div className="flex justify-center md:justify-center lg:justify-start space-x-3">
              <a href="https://web.facebook.com/profile.php?id=100011132089325&ref=_ig_profile_ac&_rdc=1&_rdr#  " target="_blank" rel="noopener noreferrer">
                <img src="/facebook.png" alt="Facebook" className="h-5 md:h-6 lg:h-6 w-5 md:w-6 lg:w-6" />
              </a>
              <a href="https://www.instagram.com/pesonamattabulu?igsh=MWhmNnd5YjlkazUwaQ==" target="_blank" rel="noopener noreferrer">
                <img src="/instagram.png" alt="Instagram" className="h-5 md:h-6 lg:h-6 w-5 md:w-6 lg:w-6" />
              </a>
              <a href="https://www.youtube.com/@DesaMattabulu" target="_blank" rel="noopener noreferrer">
                <img src="/yt.png" alt="YouTube" className="h-5 md:h-6 lg:h-6 w-5 md:w-6 lg:w-6" />
              </a>
              <a href="https://www.tiktok.com/@desawisatamattabulu?_t=ZS-8ymbPY1SUBs&_r=1" target="_blank" rel="noopener noreferrer">
                <img src="/tiktok.png" alt="TikTok" className="h-5 md:h-6 lg:h-6 w-5 md:w-6 lg:w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}