import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { getStaticPage } from '@/api';

import { Layout } from '@/components';
import { AccountTabs } from '@/components/account';

import { useStore } from '@/context';

const Account = ({ data }) => {
  const { page, site } = data;
  const {
    user: { email },
  } = useStore();
  const router = useRouter();

  useEffect(() => {
    if (!email) {
      router.push('/');
    }
  }, [email, router]);

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
