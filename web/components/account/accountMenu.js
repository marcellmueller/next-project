import { useState } from 'react';
import Link from 'next/link';
import cx from 'classnames';
import { useOpenAuthModal, useSignOut, useStore } from '@/context';
import OutsideClickHandler from 'react-outside-click-handler';
import { Tool } from 'react-feather';
import { Button } from '@/components';

import styles from './accountMenu.module.css';

const AccountMenu = () => {
  const [open, setOpen] = useState(false);
  const openAuthModal = useOpenAuthModal();
  const { signOut } = useSignOut();

  const {
    user: { displayName, email, photoURL },
  } = useStore();

  return (
    <span className={styles.container}>
      <div className={styles.account}>
        {!email ? (
          <Button
            onClick={() => {
              openAuthModal();
            }}
          >
            Sign In
          </Button>
        ) : (
          <div className={styles.account}>
            <div
              className={cx(styles.user, {
                [styles.disabled]: open,
              })}
              onMouseEnter={() => setOpen(true)}
              onClick={() => setOpen(!open)}
            >
              {photoURL ? (
                <div className={styles.image}>
                  <img alt="" src={photoURL} />
                </div>
              ) : (
                <>{displayName || email}</>
              )}
            </div>
            <Button
              onClick={() => {
                signOut();
              }}
              warning
            >
              Sign Out
            </Button>
          </div>
        )}
      </div>

      <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
        <div
          className={cx(styles.dropdown, {
            [styles.active]: open,
          })}
        >
          <Link href="/account" passHref>
            <Button basic>
              <Tool className={styles.button} /> Account settings
            </Button>
          </Link>
        </div>
      </OutsideClickHandler>
    </span>
  );
};

export default AccountMenu;
