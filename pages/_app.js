import globalStore from '../store/globalStore';
import '../styles/globals.css';

const store = {
  url: "./mock-api.json"
};

export default function App({ Component, pageProps }) {
  globalStore.set('url', store.url)

  return <Component {...pageProps} />;
}
