import { useStore } from '@/context';
import styles from './profile.module.css';

const Profile = () => {
  const {
    user: { displayName, email, accountCreated },
  } = useStore();

  return (
    <div className={styles.profile}>
      <div>{displayName}</div>
      <div>{email}</div>
      <div>{accountCreated}</div>
    </div>
  );
};

export default Profile;
