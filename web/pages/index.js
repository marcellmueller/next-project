import { getHomePage } from '@/api';

import { Layout } from '@/components';
import { Modules } from '@/components/home';
const Home = ({ data }) => {
  const { page, site } = data;
  const { modules } = page;

  return (
    <Layout site={site}>
      {modules &&
        modules.map((module, i) => {
          return <Modules key={i} module={module} />;
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
