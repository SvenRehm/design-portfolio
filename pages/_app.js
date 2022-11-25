import "../styles/globals.css"
import { NavProvider } from "../context/navigation"
import Navigation from "../components/navigation"
import { AnimatePresence } from "framer-motion"

function MyApp({ Component, pageProps, router }) {
   return (
      <NavProvider>
         <Navigation />
         <AnimatePresence exitBeforeEnter initial={false}>
            <Component {...pageProps} key={router.route} />
         </AnimatePresence>
      </NavProvider>
   )
}

export default MyApp
