import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { transition } from "../helper/transitions"
import { useNavContext } from "../context/navigation"
// import { variants } from "../helper/variants"

export default function Landing({}) {
   const [menuOpen, setMenuOpen] = useNavContext()

   console.log(menuOpen)

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
                     className="font-bold text-7xl"
                  >
                     HALLO,
                     <span className="mb-10 text-6xl font-normal">
                        {" "}
                        mein name ist
                     </span>
                  </motion.h1>
                  <motion.h1
                     animate={menuOpen ? "open" : "closed"}
                     variants={variants}
                     className="mb-10 text-[90px] font-bold"
                  >
                     SVEN REHM
                  </motion.h1>
               </div>
               <div className="mb-10 overflow-hidden">
                  <motion.h3
                     animate={menuOpen ? "open" : "closed"}
                     variants={variants}
                     className="text-3xl leading-normal font-opensans"
                  >
                     Ich bin ein{" "}
                     <span className="font-bold">Webdesigner/Entwickler</span>
                     <br></br>
                     mit einer passion für die erschaffung von atemberaubenden
                     Webseiten.
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
                        Portfolio
                     </Link>
                  </motion.div>
               </motion.div>
               <motion.div className="inline-block overflow-hidden">
                  <motion.div
                     animate={menuOpen ? "open" : "closed"}
                     variants={variants}
                  >
                     <Link
                        href="/portfolio"
                        className="relative ml-10 text-3xl meins"
                     >
                        Portfolio
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
