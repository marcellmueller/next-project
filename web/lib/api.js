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
