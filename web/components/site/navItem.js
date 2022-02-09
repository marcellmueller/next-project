import { Link } from '@/components';
import styles from './navItem.module.css';

const NavItem = ({ label, path, ...props }) => {
  return (
    <Link href={path} className={styles['nav-item']} {...props}>
      {label}
    </Link>
  );
};

export default NavItem;
