import { StoreContextProvider } from '@/context';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <StoreContextProvider>
      <Component {...pageProps} />
    </StoreContextProvider>
  );
}

export default MyApp;
