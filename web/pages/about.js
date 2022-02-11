import { getStaticPage } from '@/api';

import { Layout } from '@/components';

const About = ({ data }) => {
  const { page, site } = data;
  return <Layout site={site}>About</Layout>;
};

export const getStaticProps = async () => {
  const query = /* groq */ `
  *[_type == 'pageAbout'] | order(_updatedAt desc)[0] {
    ...
  }
`;
  const data = await getStaticPage(query);

  return {
    props: { data },
    revalidate: 60,
  };
};

export default About;
