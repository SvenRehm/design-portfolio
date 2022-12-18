import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { transition } from "../helper/transitions"
import { useNavContext } from "../context/navigation"
import { variants, variants2 } from "../helper/variants"

export default function Section1({}) {
   const [menuOpen, setMenuOpen] = useNavContext()

   return (
      <>
         <section className="h-[100vh] section relative">
            <div
               className="relative overflow-hidden hiddenbyme top-1/2 left-1/2 
                  w-[1100px]
                  h-[450px] transform -translate-x-1/2 -translate-y-1/2 "
               // className="width-[1100px] heigth-[450px] top-1/2 left-1/2 relative transform -translate-x-1/2 -translate-y-1/2 overflow-hidden "
            >
               <motion.div
                  animate={menuOpen ? "open" : "closed"}
                  variants={variants2}
                  //need w and h
                  className="w-[1100px] h-[450px] relative transform -translate-x-1/2 -translate-y-1/2 left-1/2  overflow-hidden"
               >
                  <Link href="/project" scroll={false}>
                     <motion.h1
                        exit={{ opacity: 0 }}
                        transition={transition}
                        className="absolute z-50 text-5xl text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                     >
                        Portfolio
                     </motion.h1>

                     {/* <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={transition}
                        src="/image.png"
                        alt="bla"
                     /> */}
                     <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={transition}
                        src="/fate.jpeg"
                        alt="bla"
                     />
                  </Link>
               </motion.div>
            </div>
         </section>
      </>
   )
}
