import { useState } from 'react';
import cx from 'classnames';
import { Account, Profile, Settings } from '@/components/account';

import styles from './accountTabs.module.css';

const AccountTabs = () => {
  const [activeTab, setActiveTab] = useState('Profile');
  const tabs = ['Profile', 'Account', 'Settings'];

  return (
    <div className={styles['account-container']}>
      <div className={styles.tabs}>
        {tabs.map((tab, i) => {
          return (
            <div
              className={cx(styles.tab, {
                [styles.active]: activeTab === tab,
              })}
              key={i}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          );
        })}
      </div>
      <div className={styles.main}>
        {activeTab === 'Profile' && <Profile />}
        {activeTab === 'Account' && <Account />}
        {activeTab === 'Settings' && <Settings />}
      </div>
    </div>
  );
};

export default AccountTabs;
