import cx from 'classnames';

import styles from './select.module.css';

const Select = ({ field, size, ...props }) => (
  <div
    className={cx(styles.container, {
      [styles.small]: size === 'small',
      [styles.disabled]: props.disabled,
    })}
  >
    <select className={styles.input} {...field} {...props} />
    <span
      className={cx(styles.icon, {
        [styles.disabled]: props.disabled,
      })}
    >
      <DropDownArrow />
    </span>
  </div>
);

function DropDownArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 10L12 15L17 10H7Z" fill="currentColor" />
    </svg>
  );
}

export default Select;
