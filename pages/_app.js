import "../styles/globals.css"
import { NavProvider } from "../context/navigation"
import { AnimatePresence } from "framer-motion"
import Navigation from "../components/navigation"
import Modal from "../components/modal"

function MyApp({ Component, pageProps, router }) {
   return (
      <NavProvider>
         <Navigation />
         <AnimatePresence exitBeforeEnter initial={false}>
            <Modal />
            <Component {...pageProps} key={router.route} />
         </AnimatePresence>
      </NavProvider>
   )
}

export default MyApp
