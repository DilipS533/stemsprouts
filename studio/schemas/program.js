export default {
  name: 'program',
  title: 'Program',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'summary', title: 'Summary', type: 'text' },
    { name: 'image', title: 'Image', type: 'image' }
  ]
};
