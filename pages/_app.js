import globalStore from '../store/globalStore';
import '../styles/globals.css';
import { K_STORE_KEY_URL } from '../constants/storeConstants'

const store = {
  url: "./mock-api.json"
};

export default function App({ Component, pageProps }) {
  globalStore.set(K_STORE_KEY_URL, store.url)

  return <Component {...pageProps} />;
}
