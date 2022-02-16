import { useStore, useSwitchTheme } from '@/context';

import { Toggle } from '@/components/form';
import styles from './settings.module.css';

const Settings = () => {
  const {
    user: { theme },
  } = useStore();
  const switchTheme = useSwitchTheme();

  return (
    <div className={styles.settings}>
      <div className={styles.option}>
        <Toggle
          description="Enable dark mode"
          checked={theme === 'dark'}
          onChange={() => {
            switchTheme(theme === 'dark' ? 'light' : 'dark');
          }}
        />
      </div>
    </div>
  );
};

export default Settings;
