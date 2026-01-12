import { project } from "./project";
import { page } from "./page"; // <--- Добавили импорт

export const schema = {
  types: [project, page], // <--- Добавили в список
}