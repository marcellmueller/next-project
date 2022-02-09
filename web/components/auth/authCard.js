import styles from './authCard.module.css';

const AuthCard = ({ children, error, title }) => {
  return (
    <div className={styles['auth-card']}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.error}>{error}</div>
      {children}
    </div>
  );
};

export default AuthCard;
