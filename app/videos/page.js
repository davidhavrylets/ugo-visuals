import Link from "next/link";

// 1. Временные данные (потом это придет из Sanity)
// Мы добавляем поле 'orientation', чтобы знать формат видео
const dummyVideos = [
  {
    id: 1,
    title: "Fashion Campaign 2024",
    category: "Commercial",
    orientation: "horizontal", // Горизонтальное
    color: "bg-blue-900",      // Временный цвет фона вместо картинки
  },
  {
    id: 2,
    title: "Wedding Highlights",
    category: "Mariage",
    orientation: "horizontal",
    color: "bg-purple-900",
  },
  {
    id: 3,
    title: "Sport Promo",
    category: "Sport",
    orientation: "vertical",   // Вертикальное (Reels)
    color: "bg-red-900",
  },
  {
    id: 4,
    title: "Travel Vlog Teaser",
    category: "Lifestyle",
    orientation: "vertical",
    color: "bg-green-900",
  },
  {
    id: 5,
    title: "Corporate Event",
    category: "Event",
    orientation: "horizontal",
    color: "bg-indigo-900",
  },
];

export default function Videos() {
  // 2. Фильтруем видео на две кучки
  const horizontalVideos = dummyVideos.filter(v => v.orientation === "horizontal");
  const verticalVideos = dummyVideos.filter(v => v.orientation === "vertical");

  return (
    <main className="min-h-screen bg-black text-white p-8 pt-32">
      
      {/* Заголовок страницы */}
      <h1 className="text-4xl md:text-6xl font-bold mb-12 uppercase tracking-tighter">
        Projets Vidéo
      </h1>

      {/* --- СЕКЦИЯ 1: ГОРИЗОНТАЛЬНЫЕ (FILMS) --- */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-6 text-gray-400 uppercase tracking-widest border-b border-gray-800 pb-2">
          Films & Clips
        </h2>
        
        {/* Grid: 1 колонка на мобильном, 2 на планшете, 3 на ПК */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {horizontalVideos.map((video) => (
            <div key={video.id} className="group cursor-pointer">
              {/* Карточка видео */}
              {/* aspect-video делает блок 16:9 */}
              <div className={`w-full aspect-video ${video.color} rounded-lg mb-4 overflow-hidden relative`}>
                {/* Оверлей при наведении */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="flex items-center justify-center h-full text-white/50">
                  PLACEHOLDER IMAGE
                </div>
              </div>
              
              <h3 className="text-xl font-medium group-hover:text-gray-300 transition-colors">
                {video.title}
              </h3>
              <p className="text-sm text-gray-500 uppercase mt-1">
                {video.category}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- СЕКЦИЯ 2: ВЕРТИКАЛЬНЫЕ (SHORTS) --- */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-400 uppercase tracking-widest border-b border-gray-800 pb-2">
          Shorts & Reels
        </h2>

        {/* Grid: Здесь карточки уже, поэтому можно больше колонок (до 4) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {verticalVideos.map((video) => (
            <div key={video.id} className="group cursor-pointer">
              {/* Карточка видео */}
              {/* aspect-[9/16] делает блок вертикальным как телефон */}
              <div className={`w-full aspect-[9/16] ${video.color} rounded-lg mb-4 overflow-hidden relative`}>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="flex items-center justify-center h-full text-white/50 rotate-90 md:rotate-0">
                  9:16
                </div>
              </div>
              
              <h3 className="text-lg font-medium group-hover:text-gray-300 transition-colors">
                {video.title}
              </h3>
              <p className="text-xs text-gray-500 uppercase mt-1">
                {video.category}
              </p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}