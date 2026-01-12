import "./globals.css";
// Импортируем Header (потому что у тебя файл называется Header.js)
import Header from "./components/Header"; 
import Footer from "./components/Footer";


export const metadata = {
  title: "Ugo Visuals",
  description: "Vidéaste & Photographe à Rennes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-black text-white antialiased">
        
        {/* Вставляем Header (он сам скроется на /contact) */}
        <Header />

        {/* Контент страницы */}
        {children}

        {/* Вставляем Footer (он сам скроется на /contact) */}
        <Footer />

      </body>
    </html>
  );
}