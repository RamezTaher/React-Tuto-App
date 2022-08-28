import { createContext } from "react"

const FeedBackContext = createContext()

export const FeedBackProvider = ({ children }) => {
  return (
    <FeedBackContext.Provider value={{}}>{children}</FeedBackContext.Provider>
  )
}
