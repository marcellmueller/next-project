import { AccountMenu } from '@/components/site';
import styles from './nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div>Nav</div>
        <AccountMenu />
      </div>
    </nav>
  );
};

export default Nav;
