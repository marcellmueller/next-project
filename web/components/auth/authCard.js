import styles from './authCard.module.css';

const AuthCard = ({ children, title }) => {
  return (
    <div className={styles['auth-card']}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
};

export default AuthCard;
