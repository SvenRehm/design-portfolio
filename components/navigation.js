import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { useNavContext } from "../context/navigation"
import { motion, AnimatePresence } from "framer-motion"
import HamburgerMenu from "./hamburgerMenu"
import { usePageContext } from "../context/page"

const transition = { duration: 1, ease: [0.6, -0.05, 0.01, 0.9] }

// const clickHandler = this.state.readyToView ? this.handleLink : null

const goToPage = (pageNumber) => {
   reactPageScroller.goToPage(pageNumber)
}
export default function Navigation({}) {
   const [menuOpen, setMenuOpen, modalOpen, setModalOpen] = useNavContext()
   const [page, setPage] = usePageContext()
   const [disablemenu, setDisableMenu] = useState(false)
   const router = useRouter()

   useEffect(() => {
      if (menuOpen) {
         setMenuOpen(false)
      }
   }, [router.asPath])

   return (
      <>
         <nav className="absolute top-0 left-0 right-0 z-50 w-full">
            <ul className="flex justify-between  mx-auto my-0 px-[70px] pt-5 ">
               <li
                  onClick={() => {
                     if (menuOpen) {
                        setMenuOpen(false)
                     }
                  }}
               >
                  {/* TODO on logo click go to top when at home use the pagescoll*/}
                  <div>
                     <Link href="/" className="text-lg font-roboto">
                        SR
                     </Link>
                  </div>
               </li>
               <li
                  onClick={() => {
                     if (disablemenu) return
                     setDisableMenu(true)
                     setModalOpen(false)
                     setMenuOpen(!menuOpen)
                  }}
                  className="cursor-pointer"
               >
                  <HamburgerMenu disablemenu={disablemenu} />
               </li>
            </ul>
         </nav>
         <AnimatePresence>
            {menuOpen && (
               <motion.ul
                  variants={parent}
                  initial={{ opacity: 0 }}
                  animate={{
                     opacity: 1,
                     transition: { delay: 0, ...transition },
                  }}
                  exit={{ opacity: 0, transition: { delay: 1, ...transition } }}
                  transition={transition}
                  className="flex flex-col justify-center h-[100vh] absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40  pointer-events-none bg-transparent"
               >
                  <div class="overflow-hidden">
                     <motion.li
                        onAnimationComplete={() => setDisableMenu(false)}
                        initial={{ y: 80 }}
                        animate={{
                           y: 0,
                           transition: { delay: 0, ...transition },
                        }}
                        exit={{
                           y: 80,
                           transition: { delay: 0.5, ...transition },
                        }}
                        className="relative p-2 my-4 text-6xl font-semibold text-center pointer-events-auto button"
                     >
                        <Link
                           href="/"
                           onClick={() => {
                              setPage(1)
                              setMenuOpen(false)
                           }}
                        >
                           Portfolio
                        </Link>
                     </motion.li>
                  </div>
                  <div class="overflow-hidden">
                     <motion.li
                        initial={{ y: 80 }}
                        animate={{
                           y: 0,
                           transition: { delay: 0.3, ...transition },
                        }}
                        exit={{
                           y: 80,
                           transition: { delay: 0.3, ...transition },
                        }}
                        className="relative p-2 my-4 text-6xl font-semibold text-center pointer-events-auto button"
                     >
                        <Link href="/about">About</Link>
                     </motion.li>
                  </div>

                  <div class="overflow-hidden">
                     <motion.li
                        onClick={() => {
                           setMenuOpen(false)
                           setModalOpen(!modalOpen)
                        }}
                        initial={{ y: 80 }}
                        animate={{
                           y: 0,
                           transition: { delay: 0.5, ...transition },
                        }}
                        exit={{
                           y: 80,
                           transition: { delay: 0, ...transition },
                        }}
                        className="relative p-2 my-4 text-6xl font-semibold text-center cursor-pointer pointer-events-auto button"
                     >
                        Contact
                     </motion.li>
                  </div>
               </motion.ul>
            )}
         </AnimatePresence>
      </>
   )
}
