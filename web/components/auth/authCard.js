import styles from './authCard.module.css';

const AuthCard = ({ children }) => {
  return <div className={styles['auth-card']}>{children}</div>;
};

export default AuthCard;
