import { sanity } from '@/clients';
import { site } from '@/lib/fragments';

export async function getStaticPage(payload) {
  const query = /* groq */ `
    {
      'page': ${payload},
      ${site}
    }
  `;

  return await sanity.fetch(query);
}

export async function getHomePage() {
  const query = /* groq */ `
    {
      'page': *[_type == 'pageHome'][0] {
        ...,
        "modules": modules[] {
          ...,
          _type == 'headline' => {
            title
          },
          _type == 'flickerText' => {
            ...
          },
        },
      },
      ${site}
    }
  `;

  const data = await sanity.fetch(query);

  return data;
}
