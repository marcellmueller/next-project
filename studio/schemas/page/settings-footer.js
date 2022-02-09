export default {
  name: 'settingsFooter',
  title: 'Footer settings',
  type: 'document',
  fields: [
    {
      name: 'footerLinks',
      type: 'array',
      of: [{ type: 'link' }],
      validation: (Rule) => Rule.max(5),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'General settings',
      };
    },
  },
};
