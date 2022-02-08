import { useEffect, useRef } from 'react';
import cx from 'classnames';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import styles from './modal.module.css';

const Modal = ({ children, closeModal, modalState }) => {
  const ref = useRef(null);

  useEffect(() => {
    modalState && disableBodyScroll(ref.current);

    return () => clearAllBodyScrollLocks();
  }, [modalState]);

  return (
    <div
      ref={ref}
      className={cx(styles.overlay, {
        [styles.active]: modalState,
        [styles.disabled]: !modalState,
      })}
      onClick={() => {
        closeModal && closeModal();
      }}
    >
      <div
        className={cx(styles.modal, {
          [styles.enter]: modalState,
          [styles.leave]: !modalState,
        })}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
