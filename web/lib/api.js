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

export async function getAllDocumentSlugs(docType) {
  const query = /* groq */ `
    *[_type == $type].slug.current
  `;
  return await sanity.fetch(query, { type: docType });
}

export async function getProjectPage(slug) {
  const query = /* groq */ `
    {
      'page': *[_type == 'project' && slug.current == $slug][0] {
        ...,
      },
      ${site}
    }
  `;

  return await sanity.fetch(query, { slug });
}
