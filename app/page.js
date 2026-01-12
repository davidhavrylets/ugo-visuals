import Link from "next/link";
import { getProjects } from "@/sanity/sanity-utils";

export default async function Home() {
  // 1. Получаем проекты
  const projects = await getProjects();

  // 2. Разделяем их
  const videoProjects = projects.filter((p) => p.category === 'video' || !p.category);
  const photoProjects = projects.filter((p) => p.category === 'photo');

  return (
    <main className="w-full bg-black min-h-screen">
      
      {/* ========================================= */}
      {/* HERO SECTION (Видео фон)                  */}
      {/* ========================================= */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay loop muted playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase mb-4 text-white">
            Ugo Visuals
          </h1>
          <p className="text-sm md:text-xl text-gray-200 tracking-widest uppercase max-w-lg">
            Videographer & Photographer <br /> based in Rennes
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />
      </section>


      {/* ========================================= */}
      {/* СЕКЦИЯ 1: VIDÉOS                          */}
      {/* ========================================= */}
      {/* scroll-mt-32 нужен, чтобы меню не перекрывало заголовок при прокрутке */}
      {videoProjects.length > 0 && (
        <section 
          id="videos" 
          className="relative z-20 px-6 py-20 max-w-7xl mx-auto border-b border-gray-900 scroll-mt-32"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 uppercase tracking-wide text-center">
            Vidéos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoProjects.map((project) => (
              <Link key={project._id} href={`/project/${project.slug.current}`} className="group">
                <div className="border border-gray-800 rounded-xl overflow-hidden bg-gray-900/50 hover:border-gray-500 transition-all duration-300">
                  {/* Обложка видео */}
                  {project.image && (
                    <div className="h-64 overflow-hidden relative">
                      <img 
                        src={project.image} 
                        alt={project.name} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Иконка Play */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-black/50 p-3 rounded-full border border-white">
                             <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                          </div>
                      </div>
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-gray-300 uppercase tracking-wider">
                      {project.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}


      {/* ========================================= */}
      {/* СЕКЦИЯ 2: PHOTOS                          */}
      {/* ========================================= */}
      {photoProjects.length > 0 && (
        <section 
          id="photos" 
          className="relative z-20 px-6 py-20 max-w-7xl mx-auto scroll-mt-32"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 uppercase tracking-wide text-center">
            Photos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photoProjects.map((project) => (
              <Link key={project._id} href={`/project/${project.slug.current}`} className="group">
                <div className="border border-gray-800 rounded-xl overflow-hidden bg-gray-900/50 hover:border-white transition-all duration-300">
                  {/* Обложка фото */}
                  {project.image && (
                    <div className="h-80 overflow-hidden relative">
                      <img 
                        src={project.image} 
                        alt={project.name} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                      />
                    </div>
                  )}
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-white group-hover:text-gray-300 uppercase tracking-wider">
                      {project.name}
                    </h3>
                    <p className="text-xs text-gray-400 mt-2 uppercase tracking-widest">Voir la galerie</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Кнопка в самом низу */}
      <div className="pb-20 text-center">
        <Link 
          href="/projects" 
          className="inline-block px-8 py-4 border border-white text-white uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300"
        >
          Voir tous les projets
        </Link>
      </div>

    </main>
  );
}