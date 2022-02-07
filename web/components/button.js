import styles from './button.module.css';

const Button = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
