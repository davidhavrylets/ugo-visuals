"use client"; // ОБЯЗАТЕЛЬНО: Это превращает компонент в интерактивный (для работы кнопок)

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Добавим немного магии анимации

// 1. Временные данные (потом заменим на Sanity)
const dummyPhotos = [
  { id: 1, category: "Sport", src: "bg-red-800", title: "Running Man" },
  { id: 2, category: "Mariage", src: "bg-blue-800", title: "Wedding Kiss" },
  { id: 3, category: "Entreprise", src: "bg-gray-800", title: "Office Meeting" },
  { id: 4, category: "Lifestyle", src: "bg-green-800", title: "Coffee Time" },
  { id: 5, category: "Sport", src: "bg-red-700", title: "Football Match" },
  { id: 6, category: "Mariage", src: "bg-blue-700", title: "Bride Smile" },
  { id: 7, category: "Lifestyle", src: "bg-green-700", title: "Street Style" },
  { id: 8, category: "Entreprise", src: "bg-gray-700", title: "Conference" },
];

// Список категорий для кнопок
const categories = ["Tous", "Sport", "Mariage", "Entreprise", "Lifestyle"];

export default function Photos() {
  // Состояние: какая категория сейчас выбрана (по умолчанию "Tous" - Все)
  const [activeFilter, setActiveFilter] = useState("Tous");

  // Логика фильтрации:
  // Если выбрано "Tous", показываем всё. Иначе - только те, что совпадают с фильтром.
  const filteredPhotos = activeFilter === "Tous" 
    ? dummyPhotos 
    : dummyPhotos.filter((photo) => photo.category === activeFilter);

  return (
    <main className="min-h-screen bg-black text-white p-8 pt-32">
      
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6 md:mb-0">
          Photos
        </h1>

        {/* --- КНОПКИ ФИЛЬТРОВ --- */}
        <div className="flex flex-wrap gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-sm uppercase tracking-widest px-3 py-1 border rounded-full transition-all duration-300
                ${
                  activeFilter === cat
                    ? "bg-white text-black border-white"  // Активная кнопка: белая
                    : "bg-transparent text-gray-400 border-gray-800 hover:border-gray-500" // Неактивная: прозрачная
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* --- ГАЛЕРЕЯ --- */}
      {/* layout: делает анимацию перемещения элементов при фильтрации плавной */}
      <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        
        {/* AnimatePresence позволяет анимировать исчезновение элементов */}
        <AnimatePresence>
          {filteredPhotos.map((photo) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              key={photo.id}
              className="relative aspect-square overflow-hidden cursor-pointer group"
            >
              {/* Квадрат с цветом (вместо фото) */}
              <div className={`w-full h-full ${photo.src} transition-transform duration-500 group-hover:scale-110`} />
              
              {/* Название при наведении */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="uppercase tracking-widest text-sm font-bold">
                  {photo.title}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
      </motion.div>

    </main>
  );
}