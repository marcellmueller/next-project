import { getStaticPage } from '@/api';

import { Layout } from '@/components';

const Contact = ({ data }) => {
  const { page, site } = data;
  return <Layout site={site}>Contact</Layout>;
};

export const getStaticProps = async () => {
  const query = /* groq */ `
  *[_type == 'pageContact'] | order(_updatedAt desc)[0] {
    ...
  }
`;
  const data = await getStaticPage(query);

  return {
    props: { data },
    revalidate: 60,
  };
};

export default Contact;
