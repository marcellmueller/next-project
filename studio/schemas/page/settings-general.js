import React from 'react';

export default {
  name: 'settingsGeneral',
  title: 'General settings',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'string',
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
