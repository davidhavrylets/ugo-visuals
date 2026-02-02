import Link from "next/link";
import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

export default async function About() {
  // 1. Получаем страницу "about" из Sanity
  const page = await getPage("a-propos");

  // Если страницы нет, покажем сообщение
  if (!page) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Please create a page with slug "about" in Sanity Studio
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-8 pt-32">
      
      {/* Контейнер: на мобильном 1 колонка, на ПК 2 колонки */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* --- ЛЕВАЯ ЧАСТЬ: ФОТО --- */}
        <div className="relative w-full">
          {/* Убрали grayscale (чб).
             Оставили overflow-hidden, чтобы при зуме картинка не вылезала за края.
          */}
          <div className="h-[50vh] md:h-[70vh] w-full bg-gray-900 rounded-lg overflow-hidden relative">
            
            {page.image ? (
              <img 
                src={page.image} 
                alt={page.title}
                // ДОБАВЛЕНО: transition-transform duration-500 hover:scale-105
                // Плавный зум на 5% при наведении
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            ) : (
              <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-500">No Image</div>
            )}

          </div>
          
          {/* Декоративный элемент (рамка сзади) */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border border-gray-700 rounded-lg -z-10 hidden md:block" />
        </div>

        {/* --- ПРАВАЯ ЧАСТЬ: ТЕКСТ --- */}
        <div className="space-y-6">
          
          {/* Имя (Заголовок из Sanity) */}
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
            {page.title}
          </h1>
          
          {/* Подзаголовок */}
          <h2 className="text-xl text-gray-400 uppercase tracking-widest">
            Vidéaste & Photographe
          </h2>

          {/* Текст (Из Sanity) */}
          <div className="prose prose-invert prose-lg text-gray-300 font-light leading-relaxed">
            <PortableText value={page.content} />
          </div>

          {/* Статистика */}
          <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-800 my-6">
            <div>
              <span className="block text-3xl font-bold">2+</span>
              <span className="text-xs text-gray-500 uppercase">Années d'expérience</span>
            </div>
            <div>
              <span className="block text-3xl font-bold">100+</span>
              <span className="text-xs text-gray-500 uppercase">Projets réalisés</span>
            </div>
            <div>
              <span className="block text-3xl font-bold">10+</span>
              <span className="text-xs text-gray-500 uppercase">Pays visités</span>
            </div>
          </div>

          {/* Кнопка призыва к действию */}
          <Link 
            href="/contact" 
            // ИЗМЕНЕНО: добавлен hover:scale-105 и transition-all
            className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-gray-200 hover:scale-105 transition-all duration-300"
          >
            Travailler avec moi
          </Link>
        </div>

      </div>
    </main>
  );
}