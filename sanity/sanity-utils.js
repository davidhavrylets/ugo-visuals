import { createClient, groq } from "next-sanity";

// --- 1. НАСТРОЙКА КЛИЕНТА ---
const client = createClient({
  projectId: "1ovyutq4", // Твой ID из прошлых сообщений
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

// --- 2. ФУНКЦИЯ: ПОЛУЧИТЬ СПИСОК ПРОЕКТОВ (ДЛЯ ГЛАВНОЙ) ---
export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug,
      "image": image.asset->url,
      vimeoUrl,
      category,  // <--- ДОБАВИЛ ВОТ ЭТУ СТРОЧКУ
      content
    }`
  );
}

// --- 3. ФУНКЦИЯ: ПОЛУЧИТЬ ОДИН ПРОЕКТ (С ГАЛЕРЕЕЙ) ---
export async function getProject(slug) {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      
      vimeoUrl,                       // Ссылка на видео
      "gallery": gallery[].asset->url, // Сетка картинок
      
      content
    }`,
    { slug }
  );
}

// --- 4. ФУНКЦИЯ: ПОЛУЧИТЬ СТРАНИЦУ (ABOUT) ---
export async function getPage(slug) {
  return client.fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      title,
      "slug": slug.current,
      "image": image.asset->url,
      content
    }`,
    { slug }
  );
}