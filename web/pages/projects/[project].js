import { getAllDocumentSlugs, getProjectPage } from '@/api';
import { useRouter } from 'next/router';
import { Layout } from '@/components';

const Project = ({ data }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { page, site } = data;
  return <Layout site={site}>Project</Layout>;
};

export const getStaticPaths = async () => {
  const projects = await getAllDocumentSlugs('project');

  return {
    paths: projects.map((project) => ({ params: { project } })),
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const data = await getProjectPage(params.project);

  if (!data.page) {
    return { notFound: true };
  } else {
    return {
      props: { data },
      revalidate: 60,
    };
  }
};

export default Project;
