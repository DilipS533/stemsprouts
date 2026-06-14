export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    { name: 'quote', title: 'Quote', type: 'text' },
    { name: 'author', title: 'Author', type: 'string' },
    { name: 'role', title: 'Role', type: 'string' },
    { name: 'photo', title: 'Photo', type: 'image' }
  ]
};
