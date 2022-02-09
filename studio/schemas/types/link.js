import React from 'react';
import { BiLinkAlt } from 'react-icons/bi';

export default {
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    {
      type: 'string',
      name: 'label',
      title: 'Label',
    },
    {
      type: 'string',
      name: 'path',
      title: 'Path',
    },
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'path',
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title,
        subtitle: subtitle
          ? subtitle[0].toUpperCase() + subtitle.slice(1)
          : null,
        media: <BiLinkAlt />,
      };
    },
  },
};
