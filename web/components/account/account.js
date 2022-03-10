import { useState } from 'react';
import { updateAccountEmail, updateAccountProfile } from '@/lib/auth';
import { useStore } from '@/context';
import { Button } from '@/components';
import { Input } from '@/components/form';
import styles from './account.module.css';

const Account = () => {
  const {
    user: { displayName, email, accountCreated, photoURL },
  } = useStore();
  const [name, setName] = useState(displayName);
  const [userEmail, setUserEmail] = useState(email);
  const [profilePhoto, setProfilePhoto] = useState(photoURL);

  const handleAccountUpdate = async (e) => {
    e.preventDefault();
    const res = updateAccountProfile(name, profilePhoto);
    console.log(res);
  };

  const handleEmailUpdate = async (e) => {
    e.preventDefault();
    const res = updateAccountEmail(userEmail);
  };

  return (
    <div>
      <form className={styles['account-update-form']}>
        <h2>Edit account details</h2>
        <label htmlFor="name">Full name</label>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name"
        />
        <label htmlFor="photo">Profile photo URL</label>
        <Input
          type="text"
          name="photo"
          value={profilePhoto}
          onChange={(e) => setProfilePhoto(e.target.value)}
          placeholder="Profile photo URL"
        />
        <Button type="submit" onClick={handleAccountUpdate}>
          Update account
        </Button>
      </form>

      <form className={styles['account-email-form']}>
        <h2>Change account email</h2>
        <label htmlFor="email">Email</label>
        <Input
          type="text"
          name="email"
          value={userEmail}
          onChange={(e) => setName(e.target.value)}
          placeholder="Email"
        />

        <Button type="submit" onClick={handleEmailUpdate}>
          Update account
        </Button>
      </form>
    </div>
  );
};

export default Account;
