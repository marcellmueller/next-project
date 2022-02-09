import { AccountMenu, NavItem, NavMobile } from '@/components/site';
import styles from './nav.module.css';

const Nav = ({ data }) => {
  const { navItems } = data;

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles['nav-items']}>
          {navItems &&
            navItems.map((item, i) => {
              const { label, path } = item;
              return <NavItem label={label} path={path} />;
            })}
        </div>
        <AccountMenu />
        <NavMobile />
      </div>
    </nav>
  );
};

export default Nav;
