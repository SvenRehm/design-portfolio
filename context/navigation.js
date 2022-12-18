import { createContext, useContext, useState } from "react"

const Context = createContext()

export function NavProvider({ children }) {
   const [menuOpen, setMenuOpen] = useState(false)
   const [modalOpen, setModalOpen] = useState(false)
   return (
      <Context.Provider
         value={[menuOpen, setMenuOpen, modalOpen, setModalOpen]}
      >
         {children}
      </Context.Provider>
   )
}

export function useNavContext() {
   return useContext(Context)
}
