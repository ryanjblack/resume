import ReactGA from 'react-ga';
import '../styles/index.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

function initializeReactGA() {
    ReactGA.initialize('UA-180730486-1');
    ReactGA.pageview('/homepage');
}