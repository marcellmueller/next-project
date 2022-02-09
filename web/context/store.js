import React, { useContext, useEffect, useState } from 'react';
import { firebase } from '@/clients';
import { useAuthState } from 'react-firebase-hooks/auth';
import { logInWithEmailAndPassword, signInWithGoogle } from 'lib/auth';

const initialState = {
  initialized: false,
  accessToken: '',
  authModal: false,
  allowCookies: false,
  authPending: true,
  email: undefined,
};

const StoreContext = React.createContext({
  store: initialState,
  setStore: () => null,
});

const StoreContextProvider = ({ children }) => {
  const [store, setStore] = useState(initialState);
  const [initialized, setInitialized] = useState(false);
  const [user, userLoading] = useAuthState(firebase.auth());

  useEffect(() => {
    //Leave here for development to monitor state
    console.log(store);
    if (!initialized) {
      //Do stuff
      setInitialized(true);
      setStore((prev) => ({
        ...prev,
        initialized: true,
      }));
    }
  }, [initialized, store]);

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

function useSignIn() {
  const [loading, setLoading] = useState(false);
  const { setStore } = useContext(StoreContext);
  const closeAuthModal = useCloseAuthModal();

  async function signIn(email, password) {
    setLoading(true);

    const setUser = (user) => {
      setStore((prev) => ({
        ...prev,
        email: user.email,
      }));
      setLoading(false);
      closeAuthModal();
    };

    if (email && password) {
      try {
        const res = await logInWithEmailAndPassword(email, password);
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
}

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

const useInitUser = () => {
  const { setStore } = useContext(StoreContext);

  async function initUser(user) {
    const { accessToken, email } = user;
    setStore((prevState) => ({
      ...prevState,
      accessToken: accessToken,
      email: email,
    }));
  }

  return initUser;
};

export {
  StoreContextProvider,
  useCloseAuthModal,
  useInitUser,
  useOpenAuthModal,
  useSignIn,
  useStore,
};
