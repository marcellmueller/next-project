import { useStore } from '@/context';
import styles from './profile.module.css';

const Profile = () => {
  const {
    user: { accountCreated, displayName, email, photoURL },
  } = useStore();

  return (
    <div className={styles.profile}>
      <div className={styles.image}>
        <img src={photoURL} />
      </div>
      <h2 className={styles.name}>{displayName}</h2>
      <div>{email}</div>
      <div>{accountCreated}</div>
    </div>
  );
};

export default Profile;
