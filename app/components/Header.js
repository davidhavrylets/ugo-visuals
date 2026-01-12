"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  // УДАЛЕНО: Блок проверки pathname === "/contact"

  return (
    <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference py-6 flex flex-col items-center text-white">
      
      {/* Логотип */}
      <Link 
        href="/" 
        className="text-2xl font-bold uppercase tracking-wider mb-4 hover:opacity-70 transition-opacity"
      >
        Ugo Visuals
      </Link>

      {/* Навигация */}
      <nav className="flex gap-8">
        
        <Link 
          href="/#videos" 
          className="text-xs font-medium uppercase tracking-widest hover:text-gray-400 transition-colors"
        >
          Vidéos
        </Link>
        
        <Link 
          href="/#photos" 
          className="text-xs font-medium uppercase tracking-widest hover:text-gray-400 transition-colors"
        >
          Photos
        </Link>

        <Link 
          href="/about" 
          className={`text-xs font-medium uppercase tracking-widest hover:text-gray-400 transition-colors ${
             pathname === "/about" ? "text-white underline underline-offset-4" : ""
          }`}
        >
          À propos
        </Link>
        
        <Link 
          href="/contact" 
          className={`text-xs font-medium uppercase tracking-widest hover:text-gray-400 transition-colors ${
             pathname === "/contact" ? "text-white underline underline-offset-4" : ""
          }`}
        >
          Contact
        </Link>

      </nav>
    </header>
  );
}