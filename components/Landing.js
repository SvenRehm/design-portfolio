import { delay, motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { AnimatePresence } from "framer-motion"

import { useNavContext } from "../context/navigation"

export default function Landing({ setPage }) {
   const [menuOpen, setMenuOpen, modalOpen, setModalOpen] = useNavContext()

   const variants = {
      open: {
         opacity: 0,
         y: -500,
         transition: { duration: 1 },
      },
      closed: {
         opacity: 1,
         y: 0,
      },
   }

   const transition = { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }

   return (
      <>
         <AnimatePresence mode="wait" initial={true}>
            <motion.div className="flex items-center justify-center h-[100vh] px-[70px] ">
               <div className="w-1/2 ">
                  <div className="overflow-hidden">
                     <motion.h1
                        initial="open"
                        animate={menuOpen ? "open" : "closed"}
                        variants={variants}
                        transition={{ delay: 0, ...transition }}
                        className="text-3xl font-normal "
                     >
                        Welcome to my portfolio!
                     </motion.h1>
                     <motion.h1
                        initial="open"
                        animate={menuOpen ? "open" : "closed"}
                        variants={variants}
                        transition={{ delay: 0, ...transition }}
                        className="text-6xl font-bold mb-14"
                     >
                        My name is Sven - <br></br>I am a web designer
                     </motion.h1>
                  </div>
                  <div className="mb-10 overflow-hidden">
                     <motion.h3
                        initial="open"
                        animate={menuOpen ? "open" : "closed"}
                        variants={variants}
                        transition={{ delay: 0.1, ...transition }}
                        className="text-xl leading-normal font-roboto"
                     >
                        I design visually appealing and user-friendly websites
                        for small businesses, startups, and entrepreneurs.
                        <br></br> My focus is on creating clean and modern
                        websites that effectively communicate the value
                        proposition of my clients.
                     </motion.h3>
                  </div>
                  <motion.div className="inline-block overflow-hidden">
                     <motion.div
                        initial="open"
                        animate={menuOpen ? "open" : "closed"}
                        variants={variants}
                        transition={{ delay: 0.2, ...transition }}
                     >
                        <button
                           // href="/portfolio"
                           className="relative text-2xl button"
                           onClick={() => setPage(1)}
                        >
                           Explore my projects
                        </button>
                     </motion.div>
                  </motion.div>
                  <motion.div className="inline-block overflow-hidden">
                     <motion.div
                        initial="open"
                        animate={menuOpen ? "open" : "closed"}
                        variants={variants}
                        transition={{ delay: 0.3, ...transition }}
                     >
                        <Link
                           href="/"
                           onClick={(e) => {
                              e.preventDefault()

                              setMenuOpen(false)
                              setModalOpen(true)
                           }}
                           className="relative ml-10 text-2xl button"
                        >
                           Get in touch
                        </Link>
                     </motion.div>
                  </motion.div>
               </div>

               {/* <div className="flex items-center justify-end w-1/2 ">
               <Image alt="me" src="/img1.jpg" width={600} height={600}></Image>
            </div> */}
            </motion.div>
         </AnimatePresence>
      </>
   )
}
