import cx from 'classnames';
import styles from './button.module.css';

const Button = ({
  basic,
  children,
  dark,
  outline,
  plain,
  small,
  warning,
  ...props
}) => {
  return (
    <button
      className={cx(styles.button, {
        [styles.regular]: !small,
        [styles.small]: small,
        [styles.dark]: dark,
        [styles.outline]: outline,
        [styles.warning]: warning,
        [styles.basic]: basic,
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
