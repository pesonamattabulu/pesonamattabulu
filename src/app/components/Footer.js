import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#FAE8B4] text-[#574A24] py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 my-2">
        {/* Left Side */}
        <p className="text-sm order-2 md:order-1">
          © 2025 Pesona Mattabulu. All rights reserved.
        </p>

        {/* Right Side (Social Media Icons) */}
        <div className="flex space-x-4 mt-2 md:mt-0 mb-4 md:mb-0 order-1 md:order-2">
          <a
            href="https://www.facebook.com/profile.php?id=100011132089325&ref=_ig_profile_ac"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://www.instagram.com/pesonamattabulu/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://www.youtube.com/@DesaMattabulu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400"
          >
            <FaYoutube size={20} />
          </a>
          <a
            href="https://www.tiktok.com/@desawisatamattabulu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400"
          >
            <FaTiktok size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}