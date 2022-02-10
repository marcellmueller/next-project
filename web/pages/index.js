import { getHomePage } from '@/api';

import { Layout } from '@/components';
import { Modules } from '@/components/home';
import { Demo } from '@/components/scenes';
const Home = ({ data }) => {
  const { page, site } = data;
  const { modules } = page;
  return (
    <Layout site={site}>
      <Demo />
      {modules &&
        modules.map((module) => {
          return <Modules module={module} />;
        })}
    </Layout>
  );
};

export const getStaticProps = async () => {
  const data = await getHomePage();

  return {
    props: { data },
    revalidate: 60,
  };
};

export default Home;
