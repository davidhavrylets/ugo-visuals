import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

// --- ФУНКЦИЯ-ПОМОЩНИК (для Vimeo) ---
const getVimeoEmbedUrl = (url) => {
  if (!url) return null;
  const match = url.match(/vimeo\.com\/(\d+)/);
  const videoId = match ? match[1] : null;
  return videoId ? `https://player.vimeo.com/video/${videoId}?autoplay=1&loop=1&autopause=0&muted=1` : null;
};

export default async function Project({ params }) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return <div className="text-white text-center mt-40">Project not found</div>;
  }

  const embedUrl = getVimeoEmbedUrl(project.vimeoUrl);

  return (
    // ИЗМЕНЕНИЕ ЗДЕСЬ: pt-32 -> pt-48 (чтобы не наезжало на меню)
    <main className="bg-black min-h-screen text-white pt-48 px-6 flex flex-col items-center">
      
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center"> 
        
        {/* КНОПКА "RETOUR" */}
        <div className="w-full text-left mb-6"> 
          <Link 
            href="/" 
            className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors uppercase tracking-widest z-50 relative"
          >
             <span className="mr-2">←</span> Retour aux projets
          </Link>
        </div>

        {/* Заголовок */}
        <h1 className="text-4xl md:text-7xl font-bold uppercase mb-8 tracking-wider text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          {project.name}
        </h1>

        {/* --- ЗОНА ВИДЕО --- */}
        {embedUrl ? (
           <div className="w-full aspect-video relative border border-gray-800 shadow-2xl overflow-hidden rounded-xl mb-10">
             <iframe
               src={embedUrl}
               className="absolute top-0 left-0 w-full h-full"
               frameBorder="0"
               allow="autoplay; fullscreen; picture-in-picture"
               allowFullScreen
               title={project.name}
             />
           </div>
        ) : (
          project.image && (
            <div className="w-full rounded-xl overflow-hidden border border-gray-800 shadow-2xl mb-10">
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-auto object-cover"
              />
            </div>
          )
        )}

        {/* КОНТЕНТ (Описание) */}
        <div className="prose prose-invert prose-lg max-w-3xl text-center text-gray-300 mb-12">
           <PortableText value={project.content} />
        </div>

        {/* --- ГАЛЕРЕЯ --- */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="w-full border-t border-gray-800 pt-10 mb-20">
            <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest text-white text-center">
              Gallery
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.gallery.map((imgUrl, index) => (
                <div 
                  key={index} 
                  className="relative aspect-square overflow-hidden rounded-lg border border-gray-800 bg-gray-900 hover:border-white transition-all duration-300 group"
                >
                  <img 
                    src={imgUrl} 
                    alt={`${project.name} gallery ${index}`} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

    </main>
  );
}