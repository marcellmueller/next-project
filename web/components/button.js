import cx from 'classnames';
import styles from './button.module.css';

const Button = ({ children, dark, outline, small, ...props }) => {
  return (
    <button
      className={cx(styles.button, {
        [styles.regular]: !small,
        [styles.small]: small,
        [styles.light]: !dark || !outline,
        [styles.dark]: dark,
        [styles.outline]: outline,
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
