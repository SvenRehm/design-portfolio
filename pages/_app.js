import "../styles/globals.css"
import { NavProvider } from "../context/navigation"
import { PageProvider } from "../context/page"
import { AnimatePresence } from "framer-motion"
import Navigation from "../components/navigation"
import Modal from "../components/modal"

function MyApp({ Component, pageProps, router }) {
   return (
      <NavProvider>
         <PageProvider>
            <Navigation />
            <AnimatePresence mode="wait" initial={false}>
               <Modal />
               <Component {...pageProps} key={router.route} />
            </AnimatePresence>
         </PageProvider>
      </NavProvider>
   )
}

export default MyApp
