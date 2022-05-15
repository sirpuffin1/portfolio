import '../styles/globals.css'
import { useEffect } from "react"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const devIconLink = document.createElement("link");
    devIconLink.setAttribute("id", "devIconLink");
    devIconLink.rel = 'stylesheet';
    devIconLink.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css'
    document.getElementsByTagName("head")[0].appendChild(devIconLink);
    return () => {
      if (devIconLink) {
        devIconLink.remove();
      }
    };
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
