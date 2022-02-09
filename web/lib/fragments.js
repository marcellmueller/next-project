export const site = /* groq */ `
  'site': {
    'header': *[_type == 'settingsHeader'] | order(_updatedAt desc)[0] {
     ...
    },
    'footer': *[_type == 'settingsFooter'] | order(_updatedAt desc)[0] {
     ...
    },
  }
`;
