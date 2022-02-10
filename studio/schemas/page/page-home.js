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
      name: 'modules',
      title: 'Modules',
      type: 'array',
      of: [{ type: 'headline' }, { type: 'flickerText' }],
      options: {
        editModal: 'dialog',
      },
    },
  ],
};
