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
              return <NavItem label={label} key={i} path={path} />;
            })}
        </div>
        <AccountMenu />
        <NavMobile data={data} />
      </div>
    </nav>
  );
};

export default Nav;
