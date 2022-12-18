import { useNavContext } from "../context/navigation"
import { useState } from "react"
import jwt from "jsonwebtoken"
import getConfig from "next/config"
import Image from "next/image"
import { TfiClose } from "react-icons/tfi"
// import { SlArrowLeft } from "react-icons/Sl"
// Only holds serverRuntimeConfig and publicRuntimeConfig
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

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
         } else {
            setStatus("error")
         }
      } catch (error) {
         setStatus("error")
      }
   }

   return (
      <div
         className={
            modalOpen
               ? "fixed top-0 left-0 z-30 w-[50%] h-full translate-x-0  transition-transform 2000ms ease-in  bg-opacity-60 backdrop-blur-sm bg-[url('/background-black.svg')]"
               : "fixed top-0 left-0 z-30 w-[50%] h-full -translate-x-full  transition-transform  2000ms ease-in "
         }
      >
         <button
            className="absolute right-16 top-16 modal__close-button"
            onClick={() => {
               setModalOpen(false)
            }}
         >
            close
            {/* <TfiClose color="white" fontSize="25px" /> */}
            {/* <SlArrowLeft color="white" fontSize="25px" /> */}
         </button>
         <div className="flex items-center h-screen">
            <div className="mx-[70px] my-auto ">
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
                  {status === "success" && <p>Thank you for your message!</p>}
                  {status === "error" && (
                     <p>
                        There was an error sending your message. Please try
                        again.
                     </p>
                  )}
                  <div>
                     <input
                        className="w-full h-[50px]   placeholder-white border-white text-xl  pl-5 border  border-solid focus:outline-0 mb-9 bg-transparent text-white"
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Name"
                     />
                  </div>

                  <div className="bg-opacity-100">
                     <input
                        className="w-full h-[50px] placeholder-white border-white text-xl pl-5 border  border-solid focus:outline-0 mb-9 bg-transparent text-white"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Email"
                     />
                  </div>

                  <div>
                     <textarea
                        className="w-full h-[160px] pl-5 pt-3 text-xl placeholder-white border-white border  border-solid focus:outline-0 mb-[62px] bg-transparent text-white"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        placeholder="Message"
                     />
                  </div>
                  <div>
                     <button
                        className="text-white border border-white bg-black px-[90px] py-[17px] text-lg uppercase hover:bg-white hover:text-black hover:border-black hover:border-solid hover:border"
                        type="submit"
                     >
                        Get in touch
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}

export default Modal
