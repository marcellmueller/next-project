import React, { useEffect, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import cx from 'classnames';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';
import { Menu, X } from 'react-feather';

import { Button } from '@/components';
import { useOpenAuthModal, useSignOut, useStore } from '@/context';

import styles from './navMobile.module.css';

const NavMobile = () => {
  const [open, setOpen] = useState(false);
  const targetRef = React.createRef();
  const { email } = useStore();
  const openAuthModal = useOpenAuthModal();
  const { loading, signOut } = useSignOut();
  useEffect(() => {
    open
      ? disableBodyScroll(targetRef.current)
      : enableBodyScroll(targetRef.current);

    return () => clearAllBodyScrollLocks();
  }, [open, targetRef]);

  return (
    <div className={styles['nav-mobile']}>
      <button className={styles.icon} onClick={() => setOpen(!open)}>
        <Menu size={32} />
      </button>
      <OutsideClickHandler
        onOutsideClick={(e) => {
          e.stopPropagation();
          setOpen(false);
        }}
      >
        <>
          <div
            className={cx(styles.overlay, {
              [styles.opacity]: open,
            })}
          />

          <div
            className={cx(styles['nav-drawer'], {
              [styles.show]: open,
            })}
            ref={targetRef}
          >
            <div className={styles['nav-header']}>
              <div>{email}</div>

              <button onClick={() => setOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <div className={styles['nav-content']}>Mobile nav content</div>
            <div className={styles.account}>
              {!email && !loading ? (
                <Button
                  onClick={() => {
                    openAuthModal();
                  }}
                >
                  Sign In
                </Button>
              ) : null}
              {email && !loading && (
                <Button
                  onClick={() => {
                    signOut();
                  }}
                  warning
                >
                  Sign Out
                </Button>
              )}
            </div>
          </div>
        </>
      </OutsideClickHandler>
    </div>
  );
};

export default NavMobile;
