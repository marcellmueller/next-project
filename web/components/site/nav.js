import { useOpenAuthModal, useStore } from '@/context';
import { User } from 'react-feather';
import { Button } from '@/components';
import styles from './nav.module.css';

const Nav = () => {
  const openAuthModal = useOpenAuthModal();
  const { email } = useStore();
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div>Nav</div>
        <div className={styles.account}>
          <User />
          {!email ? (
            <Button
              onClick={() => {
                openAuthModal();
              }}
            >
              Sign In
            </Button>
          ) : (
            <div>{email}</div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
