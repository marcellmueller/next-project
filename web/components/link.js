import Link from 'next/link';

const LinkComponent = ({ children, href, ...props }) => {
  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
};

export default LinkComponent;
