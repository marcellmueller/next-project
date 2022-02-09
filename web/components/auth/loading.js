import { Spinner } from '@/icons';
import styles from './loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <Spinner />
    </div>
  );
};
export default Loading;
