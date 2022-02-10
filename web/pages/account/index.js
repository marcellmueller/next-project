import { getStaticPage } from '@/api';

import { Layout } from '@/components';
import { AccountTabs } from '@/components/account';
const Account = ({ data }) => {
  const { page, site } = data;
  return (
    <Layout site={site}>
      <AccountTabs />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const data = await getStaticPage();

  return {
    props: { data },
    revalidate: 60,
  };
};

export default Account;
