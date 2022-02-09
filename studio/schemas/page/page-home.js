export default {
  name: 'pageHome',
  title: 'Home',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'cover',
      title: 'Cover image',
      type: 'image',
    },
  ],
};
