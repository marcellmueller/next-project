export default {
  name: 'settingsHeader',
  title: 'Header settings',
  type: 'document',
  fields: [
    {
      name: 'navItems',
      type: 'array',
      of: [
        {
          type: 'link',
        },
      ],
      validation: (Rule) => Rule.max(7),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Header settings',
      };
    },
  },
};
