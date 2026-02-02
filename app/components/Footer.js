"use client";

import { Instagram, Youtube, Video, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-900 mt-0 py-12 bg-gradient-to-b from-black to-gray-950 text-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        
        <h2 className="text-2xl md:text-4xl font-bold uppercase mb-4 tracking-wide text-white">
          Travaillons ensemble
        </h2>
        <p className="text-gray-400 mb-8 text-base max-w-lg mx-auto">
          Vous avez un projet en tête ?
        </p>

        {/* Кнопка действия */}
        <a 
          href="mailto:ugovisualsproduction@gmail.com" 
          className="inline-flex items-center gap-2 px-8 py-3 border border-white text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-300 mb-10 rounded-full"
        >
          <Mail size={16} />
          Demander un devis
        </a>

        {/* Социальные сети */}
        <div className="flex justify-center gap-8 items-center">
          
          {/* INSTAGRAM */}
          <a 
            href="https://www.instagram.com/ugo.visuals/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-all transform hover:scale-110 duration-300"
          >
            <Instagram size={24} strokeWidth={1.5} />
          </a>

          {/* YOUTUBE }
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-all transform hover:scale-110 duration-300"
          >
            <Youtube size={24} strokeWidth={1.5} />
          </a>

          {/* VIMEO (используем иконку видео-камеры для стиля или иконку Video) 
          <a 
            href="https://vimeo.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-all transform hover:scale-110 duration-300"
          >
            <Video size={24} strokeWidth={1.5} />
          </a>
             /*/}
        </div>
        
        <div className="mt-10 text-[10px] text-gray-300 uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} Ugo Visuals — Tous droits réservés
        </div>
         <div className="mt-10 text-[10px] text-gray-400 uppercase tracking-[0.2em]">
          SIRET N°
98969867500018
        </div>
      </div>
    </footer>
  );
}