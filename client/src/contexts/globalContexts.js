import { createContext, useState } from "react";

export const GlobalContext = createContext()

function MyContext({ children }) {
  const [black, setBlack] = useState(true)

  const btnHandler = () => {
    setBlack(!black)
  }
  return (
    <GlobalContext.Provider value={{ btnHandler, black }}>{children}</GlobalContext.Provider>
  )
}
export default MyContext;
