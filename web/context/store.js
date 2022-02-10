import React, { useContext, useEffect, useState } from 'react';
import { firebase } from '@/clients';
import { useAuthState } from 'react-firebase-hooks/auth';
import { logInWithEmailAndPassword, signInWithGoogle, logout } from 'lib/auth';

const initialState = {
  initialized: false,
  authModal: false,
  allowCookies: false,
  email: '',
  displayName: '',
  user: {
    email: '',
    displayName: '',
    accountCreated: '',
  },
};

const StoreContext = React.createContext({
  store: initialState,
  setStore: () => null,
});

const StoreContextProvider = ({ children }) => {
  const [store, setStore] = useState(initialState);
  const [user, userLoading] = useAuthState(firebase.auth());

  useEffect(() => {
    //Leave here for development to monitor state
    console.log(store);
    if (!store.initialized) {
      //Do stuff
      firebase.auth().onAuthStateChanged((data) => {
        const user = data?._delegate;

        if (user) {
          console.log(user);
          setStore((prev) => ({
            ...prev,
            user: {
              displayName: user.displayName,
              email: user.email,
              accountCreated: user.metadata.creationTime,
              photoURL: user.photoURL,
            },
          }));
        }
      });
      setStore((prev) => ({
        ...prev,
        initialized: true,
      }));
    }
  }, [store]);

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
      setStore((prev) => ({
        ...prev,
        user: {
          displayName: user.displayName,
          email: user.email,
          accountCreated: user.metadata.creationTime,
          photoURL: user.photoURL,
        },
      }));
      setLoading(false);
      closeAuthModal();
    };

    if (email && password) {
      try {
        const res = await logInWithEmailAndPassword(email, password);
        console.log(res);
        setUser(res.user);

        return res;
      } catch (err) {
        setLoading(false);
      }
    } else {
      try {
        const res = await signInWithGoogle();
        setUser(res.user);
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
        setStore((prev) => ({
          ...prev,
          user: {
            email: '',
            displayName: '',
            accountCreated: '',
          },
          allowCookies: false,
        }));
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

export {
  StoreContextProvider,
  useCloseAuthModal,
  useOpenAuthModal,
  useSignIn,
  useSignOut,
  useStore,
};
