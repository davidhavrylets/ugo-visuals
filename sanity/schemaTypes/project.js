import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Project Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' }
    }),
    defineField({
      name: 'image',
      title: 'Cover Image (Thumbnail)',
      description: 'Upload a cover photo. For videos, upload a screenshot or a GIF.',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        }
      ]
    }),
    // --- Выбор категории (Видео или Фото) ---
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Video Project', value: 'video' },
          { title: 'Photo Project', value: 'photo' },
        ],
        layout: 'radio'
      },
      initialValue: 'video'
    }),
    // --- Ссылка на Vimeo ---
    defineField({
      name: 'vimeoUrl',
      title: 'Vimeo URL',
      type: 'url',
      description: 'Paste the full link like https://vimeo.com/123456789',
      hidden: ({ document }) => document?.category !== 'video'
    }),
    
    // --- НОВОЕ ПОЛЕ: ГАЛЕРЕЯ (СЕТКА) ---
    defineField({
      name: 'gallery',
      title: 'Project Gallery',
      description: 'Upload multiple images for the grid inside the project',
      type: 'array', // Это массив (список)
      of: [{ type: 'image', options: { hotspot: true } }], // Состоит из картинок
      options: {
        layout: 'grid' // В админке будет красивая сетка
      }
    }),

    // --- Описание (Контент) ---
    defineField({
      name: 'content',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }]
    }),
  ],
})