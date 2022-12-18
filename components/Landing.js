import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { transition } from "../helper/transitions"
import { useNavContext } from "../context/navigation"

export default function Landing({}) {
   const [menuOpen, setMenuOpen, modalOpen, setModalOpen] = useNavContext()

   const variants = {
      open: {
         opacity: 0,
         y: -500,
         transition: { duration: 2, ease: [0.43, 0.13, 0.23, 0.96] },
      },
      closed: {
         opacity: 1,
         y: 0,
         transition: { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] },
      },
   }
   return (
      <>
         <motion.div className="flex items-center justify-center h-[100vh] px-[70px] ">
            <div className="w-1/2 ">
               <div className="overflow-hidden">
                  <motion.h1
                     animate={menuOpen ? "open" : "closed"}
                     variants={variants}
                     className="text-6xl font-bold mb-14"
                  >
                     Welcome to my portfolio! My name is Sven -<br></br>I am a
                     web designer
                  </motion.h1>
               </div>
               <div className="mb-10 overflow-hidden">
                  <motion.h3
                     animate={menuOpen ? "open" : "closed"}
                     variants={variants}
                     className="ml-10 text-2xl leading-normal font-opensans"
                  >
                     I design visually appealing and user-friendly websites for
                     small businesses, startups, and entrepreneurs.<br></br> My
                     focus is on creating clean and modern websites that
                     effectively communicate the value proposition of my
                     clients.
                  </motion.h3>
               </div>
               <motion.div className="inline-block overflow-hidden">
                  <motion.div
                     animate={menuOpen ? "open" : "closed"}
                     variants={variants}
                  >
                     <Link
                        href="/portfolio"
                        className="relative text-3xl meins"
                     >
                        Explore my projects
                     </Link>
                  </motion.div>
               </motion.div>
               <motion.div className="inline-block overflow-hidden">
                  <motion.div
                     animate={menuOpen ? "open" : "closed"}
                     variants={variants}
                  >
                     <Link
                        href="/"
                        onClick={(e) => {
                           e.preventDefault()

                           setMenuOpen(false)
                           setModalOpen(!modalOpen)
                        }}
                        className="relative ml-10 text-3xl meins"
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
      </>
   )
}
