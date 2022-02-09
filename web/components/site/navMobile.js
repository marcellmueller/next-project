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
import { NavItem } from '@/components/site';
import { useOpenAuthModal, useSignOut, useStore } from '@/context';

import styles from './navMobile.module.css';

const NavMobile = ({ data }) => {
  const { navItems } = data;
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

            <div className={styles['nav-content']}>
              <div className={styles['nav-items']}>
                {navItems &&
                  navItems.map((item, i) => {
                    const { label, path } = item;
                    return <NavItem label={label} key={i} path={path} />;
                  })}
              </div>
            </div>
            <div className={styles.account}>
              {!email && !loading ? (
                <Button
                  onClick={() => {
                    openAuthModal();
                    setOpen(false);
                  }}
                >
                  Sign In
                </Button>
              ) : null}
              {email && !loading && (
                <Button
                  onClick={() => {
                    signOut();
                    setOpen(false);
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
