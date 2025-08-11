import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#62BEDD] h-20 sm:h-30 px-4 sm:px-6 flex items-center justify-center">
      <img
        src="/icon1.png"
        alt="Pesona Mattabulu"
        className="h-full max-h-full object-contain"
      />
    </header>
  );
}