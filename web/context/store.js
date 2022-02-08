import React, { useContext, useEffect, useState } from 'react';
import { firebase } from '@/clients';
import { useAuthState } from 'react-firebase-hooks/auth';

const initialState = {
  initialized: false,
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

const useDismissAuthModal = () => {
  const { setStore } = useContext(StoreContext);

  async function dismissAuthModal() {
    setStore((prevState) => ({
      ...prevState,
      authModal: false,
    }));
  }

  return dismissAuthModal;
};

export {
  StoreContextProvider,
  useDismissAuthModal,
  useOpenAuthModal,
  useStore,
};
