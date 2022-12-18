import { useNavContext } from "../context/navigation"

function Modal({ isOpen, closeModal, children }) {
   const [menuOpen, setMenuOpen, modalOpen, setModalOpen] = useNavContext()

   return (
      <div
         className={
            modalOpen
               ? "fixed top-0 left-0 z-30 w-[50%] h-full translate-x-0  transition-transform 2000ms ease-in bg-slate-900 bg-opacity-60 backdrop-blur-lg"
               : "fixed top-0 left-0 z-30 w-[50%] h-full -translate-x-full  transition-transform  2000ms ease-in bg-slate-900 bg-opacity-60 backdrop-blur-lg"
         }
      >
         <button
            className="mt-[200px] mtl-[200px] modal__close-button"
            onClick={() => {
               setModalOpen(false)
            }}
         >
            Close
         </button>
         <div className="w-[80%]">{children}</div>
      </div>
   )
}

export default Modal
