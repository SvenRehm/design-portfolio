import { createContext, useContext, useState } from "react"

const Context = createContext()

export function PageProvider({ children }) {
   const [page, setPage] = useState()

   return (
      <Context.Provider value={[page, setPage]}>{children}</Context.Provider>
   )
}

export function usePageContext() {
   return useContext(Context)
}
