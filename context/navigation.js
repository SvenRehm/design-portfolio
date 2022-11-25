import { createContext, useContext, useState } from "react"

const Context = createContext()

export function NavProvider({ children }) {
   const [menuOpen, setMenuOpen] = useState(false)
   return (
      <Context.Provider value={[menuOpen, setMenuOpen]}>
         {children}
      </Context.Provider>
   )
}

export function useNavContext() {
   return useContext(Context)
}
