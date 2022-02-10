const Blue = ({ children }) => (
  <span style={{ color: 'blue' }}>{children}</span>
);

export default {
  title: 'Block Content Simple',
  name: 'blockContentSimple',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        {
          title: 'Blue',
          value: 'blue',
          blockEditor: {
            render: Blue,
          },
        },
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'path',
                type: 'url',
              },
            ],
          },
        ],
      },
    },
  ],
};
