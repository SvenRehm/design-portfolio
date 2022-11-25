import Head from "next/head"
import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const transition = { duration: 1.4, ease: [0.6, 0.1, -0.05, 0.9] }
export default function Home({}) {
   //click
   function clicky() {}
   let options = {
      animationTimer: 850,
      animationTimerBuffer: 0,
      renderAllPagesOnFirstRender: true,
   }

   return (
      <>
         <Head>
            <title>HomePage portfolio</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div className="relative h-[100vh]">
            <motion.div
               initial={{
                  width: 1100,
                  height: 450,
                  top: "50%",
                  left: "50%",
                  x: "-50%",
                  y: "-50%",
               }}
               animate={{
                  top: 250,
                  left: "50%",
                  height: 350,
                  width: "100%",
                  transition: { delay: 0.3, ...transition },
               }}
               className="w-[100%] h-[450px] relative transform -translate-x-1/2 -translate-y-1/2  overflow-hidden"
               //    className="w-[1100px] h-[450px] relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden"
            >
               <motion.img
                  initial={{ scale: 1.1 }}
                  animate={{
                     y: -80,
                     transition: { delay: 0.2, ...transition },
                  }}
                  src="/image.png"
                  alt="image"
                  className="object-cover object-bottom w-full"
               />
               {/* <Image alt="me" src="/img1.jpg" width={"100%"} height={500}></Image> */}
            </motion.div>

            <div class="overflow-hidden">
               <motion.h1
                  initial={{ y: 80 }}
                  animate={{
                     y: 0,
                     transition: { delay: 1.6, ...transition },
                  }}
                  className="font-bold text-7xl mt-[200px]"
               >
                  Hello
               </motion.h1>
            </div>
         </div>
      </>
   )
}

export async function getStaticProps() {
   return {
      props: {},
   }
}
