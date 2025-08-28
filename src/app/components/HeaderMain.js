  "use client";
  import { useState, useEffect } from "react";
  import Link from "next/link";

  export default function HeaderMain() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isTop, setIsTop] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);

        setIsTop(window.scrollY <= 10);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div
          className={`${
            isTop ? "bg-transparent" : "bg-[#FAE8B4]/90 backdrop-blur-md shadow-lg"
          } w-full max-w-7xl mx-auto flex justify-between items-center px-5 md:px-15 py-2 rounded-b-2xl transition-colors duration-300`}
        >
          {/* Logo */}
          <div className="flex items-center">
            <img src="/icon1.png" 
            alt="Logo Desa" 
            className="h-10 md:h-16 w-10 md:w-16 object-contain" />
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-white text-[17px]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>

          {/* Menu Navigasi Desktop */}
          <nav className={`hidden md:flex space-x-6 font-semibold transition-colors duration-300 ${ isTop ? "text-[#fffbee]" : "text-[#574A24]"}`}
>
            <Link href="/">Beranda</Link>
            <Link href="#profil">Profil Desa</Link>
            <Link href="#informasi">Lokasi</Link>
            <Link href="#produk">Produk</Link>
          </nav>
        </div>

        
        {/* Menu Navigasi Mobile */}
        {isOpen && (
          <div className="md:hidden flex justify-center">
              <div className="bg-[#D6B588]/95 text-white flex flex-col items-center 
                      space-y-4 py-4 px-8 w-4/5 max-w-sm rounded-xl shadow-lg">
                <Link href="/" onClick={() => setIsOpen(false)}>Beranda</Link>
                <Link href="/profil" onClick={() => setIsOpen(false)}>Profil Desa</Link>
                <Link href="/informasi" onClick={() => setIsOpen(false)}>Lokasi</Link>
                <Link href="/produk" onClick={() => setIsOpen(false)}>Produk</Link>
              </div>
          </div>
        )}
      </header>
    );
  }
