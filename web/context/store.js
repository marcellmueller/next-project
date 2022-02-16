import React, { useContext, useEffect, useState } from 'react';
import { firebase } from '@/clients';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  logInWithEmailAndPassword,
  retrieveUserData,
  signInWithGoogle,
  logout,
} from 'lib/auth';
import { changeTheme } from '@/lib/tools';
import { dark, light } from '@/themes';

const initialState = {
  initialized: false,
  authModal: false,
  allowCookies: false,
  user: {
    email: '',
    displayName: '',
    accountCreated: '',
    photoURL: '',
    theme: '',
  },
};

const StoreContext = React.createContext({
  store: initialState,
  setStore: () => null,
});

const StoreContextProvider = ({ children }) => {
  const [store, setStore] = useState(initialState);
  const [user, userLoading] = useAuthState(firebase.auth());

  const {
    user: { theme },
  } = store;
  useEffect(() => {
    //Leave here for development to monitor state
    console.log(store);
    if (!store.initialized) {
      firebase.auth().onAuthStateChanged((data) => {
        const user = data?._delegate;

        if (user) {
          // Retrieve additional user data from firestore
          retrieveUserData().then((res) => {
            const { displayName, email, photoURL } = user;
            const { theme } = res;
            setStore((prev) => ({
              ...prev,
              user: {
                displayName: displayName,
                email: email,
                accountCreated: user.metadata.creationTime,
                photoURL: photoURL,
                theme: theme,
              },
            }));
          });
        }
      });
      setStore((prev) => ({
        ...prev,
        initialized: true,
      }));
    }
  }, [store]);

  useEffect(() => {
    console.log('change theme!');
    if (theme === 'dark') {
      changeTheme(dark);
    } else {
      changeTheme(light);
    }
  }, [theme, store]);

  return (
    <StoreContext.Provider value={{ store, setStore }}>
      {children}
    </StoreContext.Provider>
  );
};

const useStore = () => {
  const { store } = useContext(StoreContext);
  return store;
};

const useSignIn = () => {
  const [loading, setLoading] = useState(false);
  const { setStore } = useContext(StoreContext);
  const closeAuthModal = useCloseAuthModal();

  async function signIn(email, password) {
    setLoading(true);

    const setUser = (user) => {
      // Retrieve additional user data from firestore
      retrieveUserData().then((res) => {
        const { displayName, email, metadata, photoURL } = user;
        const { theme } = res;
        setStore((prev) => ({
          ...prev,
          user: {
            displayName: displayName,
            email: email,
            accountCreated: metadata.creationTime,
            photoURL: photoURL,
            theme: theme,
          },
        }));
        setLoading(false);
        closeAuthModal();
      });
    };

    if (email && password) {
      try {
        await logInWithEmailAndPassword(email, password).then((res) => {
          setUser(res.user);
        });
      } catch (err) {
        setLoading(false);
      }
    } else {
      try {
        await signInWithGoogle().then((res) => {
          setUser(res.user);
        });
      } catch (err) {
        setLoading(false);
      }
    }
  }

  return { signIn, loading };
};

const useSignOut = () => {
  const { setStore } = useContext(StoreContext);
  const [loading, setLoading] = useState(false);

  async function signOut() {
    setLoading(true);

    const res = await logout()
      .then(() => {
        setStore(initialState);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });

    return;
  }

  return { signOut, loading };
};

const useOpenAuthModal = () => {
  const { setStore } = useContext(StoreContext);

  async function openAuthModal() {
    setStore((prevState) => ({
      ...prevState,
      authModal: true,
    }));
  }
  return openAuthModal;
};

const useCloseAuthModal = () => {
  const { setStore } = useContext(StoreContext);

  async function closeAuthModal() {
    setStore((prevState) => ({
      ...prevState,
      authModal: false,
    }));
  }

  return closeAuthModal;
};

const useSwitchTheme = () => {
  const { setStore } = useContext(StoreContext);

  async function switchTheme(theme) {
    setStore((prevState) => ({
      ...prevState,
      user: {
        ...prevState.user,
        theme: theme,
      },
    }));
  }

  return switchTheme;
};

export {
  StoreContextProvider,
  useCloseAuthModal,
  useOpenAuthModal,
  useSignIn,
  useSignOut,
  useStore,
  useSwitchTheme,
};
