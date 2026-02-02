export default function Contact() {
  return (
    <main className="relative min-h-screen text-white px-6 md:px-12 pt-48 md:pt-32 pb-20 flex flex-col justify-center">
      
      {/* --- 1. ФОНОВОЕ ВИДЕО --- */}
      <div className="fixed inset-0 w-full h-full -z-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="/hero-bg.mp4" 
        />
      </div>

      {/* --- 2. ЗАТЕМНЕНИЕ ФОНА --- */}
      <div className="fixed inset-0 w-full h-full bg-black/95 -z-10" />

      {/* --- 3. КОНТЕНТ --- */}
      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        
        {/* БЛОК 1: ЗАГОЛОВОК И ТЕКСТ */}
        <div className="md:col-start-1 md:row-start-1 text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter mb-6">
            Contact
          </h1>
          <p className="text-gray-300 text-base md:text-xl font-light leading-relaxed max-w-md mx-auto md:mx-0">
            Un projet en tête ? Une question ? <br />
            N'hésitez pas à m'écrire. Je réponds généralement sous 24h.
          </p>
        </div>

        {/* БЛОК 2: ФОРМА ПОДКЛЮЧЕННАЯ К FORMSPREE */}
        <div className="w-full md:col-start-2 md:row-start-1 md:row-span-2 flex flex-col justify-center mt-8 md:mt-0">
          <form 
            action="https://formspree.io/f/xkoonzwa" 
            method="POST" 
            className="space-y-8 md:space-y-10"
          >
            
            {/* Поле: ИМЯ */}
            <div className="relative">
              <input 
                name="name"
                type="text" 
                placeholder="Votre Nom"
                className="w-full bg-transparent border-b border-gray-500/50 py-4 md:py-6 text-white text-base md:text-lg outline-none focus:border-white transition-colors placeholder-gray-400 text-center md:text-left"
                required
              />
            </div>

            {/* Поле: EMAIL */}
            <div className="relative">
              <input 
                name="email"
                type="email" 
                placeholder="Votre Email"
                className="w-full bg-transparent border-b border-gray-500/50 py-4 md:py-6 text-white text-base md:text-lg outline-none focus:border-white transition-colors placeholder-gray-400 text-center md:text-left"
                required
              />
            </div>

            {/* Поле: СООБЩЕНИЕ */}
            <div className="relative">
              <textarea 
                name="message"
                rows="4"
                placeholder="Votre message..."
                className="w-full bg-transparent border-b border-gray-500/50 py-4 md:py-6 text-white text-base md:text-lg outline-none focus:border-white transition-colors placeholder-gray-400 resize-none text-center md:text-left"
                required
              ></textarea>
            </div>

            {/* Кнопка */}
            <div className="pt-6 text-center md:text-left">
              <button 
                type="submit"
                className="bg-white text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors w-full md:w-auto text-sm md:text-base"
              >
                Envoyer le message
              </button>
            </div>

          </form>
        </div>

        {/* БЛОК 3: ИНФО (EMAIL, SOCIALS) */}
        <div className="md:col-start-1 md:row-start-2 md:self-end space-y-10 mt-12 md:mt-0 text-center md:text-left">
          
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-3">
              Email
            </h3>
            <a 
              href="mailto:ugovisualsproduction@gmail.com" 
              className="text-xl md:text-2xl border-b border-gray-600 hover:border-white transition-all pb-1 break-all"
            >
              ugovisualsproduction@gmail.com
            </a>
          </div>

          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-3">
              Réseaux Sociaux
            </h3>
            <div className="flex gap-8 text-lg text-gray-300 justify-center md:justify-start">
              <a href="https://www.instagram.com/ugo.visuals/" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">YouTube</a>
              <a href="https://www.linkedin.com/in/ugo-pichon-130aa4253/?originalSubdomain=fr" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-3">
              Localisation
            </h3>
            <p className="text-xl text-gray-300">Rennes, France</p>
          </div>

        </div>

      </div>
    </main>
  );
}