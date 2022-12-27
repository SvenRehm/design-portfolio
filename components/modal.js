import { useNavContext } from "../context/navigation"
import { useState } from "react"
import jwt from "jsonwebtoken"
import getConfig from "next/config"
import { motion } from "framer-motion"
import { SlArrowLeft } from "react-icons/sl"
// Only holds serverRuntimeConfig and publicRuntimeConfig
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

const variants = {
   open: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] },
   },
   closed: {
      opacity: 0,
      x: -1000,
      transition: { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] },
   },
}
const transition = { duration: 1, ease: [0.6, -0.05, 0.01, 0.9] }

function Modal({ isOpen, closeModal, children }) {
   const [menuOpen, setMenuOpen, modalOpen, setModalOpen] = useNavContext()
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [message, setMessage] = useState("")
   const [status, setStatus] = useState(null)

   const handleSubmit = async (event) => {
      event.preventDefault()

      const payload = { name, email, message }

      //from next.config
      const secret = publicRuntimeConfig.mySecret
      //generate token payload with secret
      const token = jwt.sign(payload, secret)

      try {
         const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ name, email, message }),
         })
         const json = await res.json()
         if (res.ok) {
            setStatus("success")
            setName("")
            setEmail("")
            setMessage("")
         } else {
            setStatus("error")
         }
      } catch (error) {
         setStatus("error")
      }
   }

   return (
      <motion.div
         className="fixed top-0 left-0 z-30 h-full w-[50%] bg-opacity-60 backdrop-blur-sm bg-[url('/background-black.svg')]"
         initial={{ opacity: 0, x: 0 }}
         exit={{ opacity: 0, x: 0 }}
         animate={modalOpen ? "open" : "closed"}
         variants={variants}
      >
         <button
            className="absolute right-16 top-16 modal__close-button"
            onClick={() => {
               setModalOpen(false)
            }}
         >
            {/* <TfiClose color="white" fontSize="25px" /> */}
            <SlArrowLeft color="white" fontSize="25px" />
         </button>
         <div className="flex items-center h-screen">
            <div className="mx-[70px] mt-[50px]">
               <h1 className="mb-[70px] font-bold leading-normal text-white text-4xl">
                  Your success is my top priority – <br></br>let&apos;s create a
                  website that helps you thrive.
               </h1>
               {/* <h3 className="text-2xl mb-[50px] mt-[10px] lg:text-xl text-white">
                  Experience the power of a professionally designed website.
               </h3> */}
               <form
                  className="xl:w-[500px] lg:w-[480px] 2xl:w-[600px]"
                  onSubmit={handleSubmit}
               >
                  {status === "success" && (
                     <p className="mb-[70px] font-bold leading-normal text-green-500 text-lg">
                        Thank you for your message!
                     </p>
                  )}
                  {status === "error" && (
                     <p className="mb-[70px] font-bold leading-normal text-red-500 text-lg">
                        There was an error sending your message. Please try
                        again.
                     </p>
                  )}
                  <div>
                     <input
                        className="w-full h-[46px]   placeholder-white border-white text-lg  pl-5 border  border-solid focus:outline-0 mb-6 bg-transparent text-white"
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Name"
                     />
                  </div>

                  <div className="bg-opacity-100">
                     <input
                        className="w-full h-[46px] placeholder-white border-white text-lg pl-5 border  border-solid focus:outline-0 mb-6 bg-transparent text-white"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Email"
                     />
                  </div>

                  <div>
                     <textarea
                        className="w-full h-[150px] pl-5 pt-3 text-lg placeholder-white border-white border  border-solid focus:outline-0 mb-[60px] bg-transparent text-white"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        placeholder="Message"
                     />
                  </div>
                  <div>
                     <button
                        //className="text-white border border-white bg-black px-[90px] py-[17px] text-lg uppercase hover:bg-white hover:text-black hover:border-black hover:border-solid hover:border"
                        className="relative text-3xl text-white button"
                        type="submit"
                     >
                        Get in touch
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </motion.div>
   )
}

export default Modal
