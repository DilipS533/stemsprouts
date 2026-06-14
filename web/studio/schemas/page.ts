export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'slug', type: 'slug', title: 'Slug' },
    { name: 'body', type: 'array', of: [{ type: 'block' }] }
  ]
}
