import styles from './input.module.css';

// eslint-disable-next-line no-unused-vars
const Input = ({ field, form, innerRef, ...props }) => {
  return (
    <input className={styles.input} ref={innerRef} {...field} {...props} />
  );
};
export default Input;
