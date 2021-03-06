import '../styles/globals.css'
import { useEffect } from "react"
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
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
  return (
  <>
  <Navbar/>
  <motion.div
  key={router.route}
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
      }}>
  <Component {...pageProps} />
  </motion.div>
  </>
  )
}

export default MyApp
