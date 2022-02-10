export default {
  name: 'flickerText',
  title: 'Flicker Text',
  type: 'object',
  fields: [
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        editModal: 'dialog',
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title,
      };
    },
  },
};
