import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  getAuth,
  sendPasswordResetEmail,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updateProfile,
} from 'firebase/auth';
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  setDoc,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { firebase } from '@/clients';

const auth = getAuth(firebase);
const db = getFirestore(firebase);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, 'users'), where('uid', '==', user.uid));
    const docs = await getDocs(q);

    if (docs.docs.length === 0) {
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
        darkMode: false,
      });
    }
    return res;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password).then(
      (user) => {
        firebase
          .auth()
          .currentUser.getIdToken(true)
          .then((token) => {
            console.log(token);
          });
        return user;
      }
    );
    return res;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  console.log('click');
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
      darkMode: false,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    return sendPasswordResetEmail(auth, email);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const updateAccountProfile = async (displayName, photoURL) => {
  updateProfile(auth.currentUser, {
    displayName: displayName,
    photoURL: photoURL,
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

const updateAccountEmail = async (email) => {
  updateEmail(auth.currentUser, email)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

const logout = async () => {
  return await signOut(auth);
};

const updateAccountSettings = async (docData = {}) => {
  const user = auth.currentUser;
  await updateDoc(doc(db, 'users', user.uid), docData);
};

export {
  auth,
  db,
  logInWithEmailAndPassword,
  logout,
  registerWithEmailAndPassword,
  sendPasswordReset,
  signInWithGoogle,
  updateAccountEmail,
  updateAccountProfile,
  updateAccountSettings,
};
