import { useStore, useSwitchDarkMode } from '@/context';

import { Toggle } from '@/components/form';
import styles from './settings.module.css';

const Settings = () => {
  const {
    user: { darkMode },
  } = useStore();
  const switchDarkMode = useSwitchDarkMode();

  return (
    <>
      <div className={styles.option}>
        <Toggle
          description="Enable dark mode"
          checked={darkMode}
          onChange={() => {
            switchDarkMode();
          }}
        />
      </div>
    </>
  );
};

export default Settings;
