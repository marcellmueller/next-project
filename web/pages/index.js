import { getStaticPage } from '@/api';

import { Layout } from '@/components';

const Home = ({ data }) => {
  const { page, site } = data;

  return <Layout site={site}>Home</Layout>;
};

export const getStaticProps = async () => {
  const query = /* groq */ `
    *[_type == 'pageHome'] | order(_updatedAt desc)[0] {
      ...
    }
  `;
  const data = await getStaticPage(query);

  return {
    props: { data },
    revalidate: 60,
  };
};

export default Home;
