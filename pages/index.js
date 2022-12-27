import Head from "next/head"
import { useState, useEffect } from "react"
//TODO
import Image from "next/image"
import Link from "next/link"
import ReactPageScroller from "react-page-scroller"
import { motion } from "framer-motion"
import Landing from "../components/Landing"
import Section1 from "../components/Section1"
import Section2 from "../components/Section2"

import { usePageContext } from "../context/page"

import { useInView } from "framer-motion"

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

export default function Home({}) {
   const [page, setPage] = usePageContext()

   useEffect(() => {
      console.log("Element is in view: ")
   }, [])

   //option for the scrolling
   let options = {
      animationTimer: 850,
      animationTimerBuffer: 0,
      renderAllPagesOnFirstRender: true,
      onBeforePageScroll: () => {
         //TODO
         console.log("before scroll add state to component with animation")
      },
   }

   const handlePageChange = (number) => {
      setPage(number)
   }

   return (
      <>
         <Head>
            <title>Portfolio | Sven Rehm</title>
            <meta
               name="Portfolio | Sven Rehm"
               content="I design visually appealing and user-friendly websites for small businesses, startups, and entrepreneurs.
               My focus is on creating clean and modern websites that effectively communicate the value proposition of my clients."
            />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         {/* background lines */}

         {/* <div className="bg-lines">
            <svg>
               <line x1="20%" y1="100%" x2="80%" y2="0" />
               <line x1="80%" y1="100%" x2="20%" y2="0" />
            </svg>
         </div> */}

         {/* scrolleffect */}
         <ReactPageScroller
            {...options}
            customPageNumber={page}
            pageOnChange={handlePageChange}
            ref={(c) => (this.reactPageScroller = c)}
         >
            <Landing setPage={setPage} />
            <Section1 />
            <Section2 />
         </ReactPageScroller>
      </>
   )
}

//get data
export async function getStaticProps() {
   return {
      props: {},
   }
}
