import { createContext, useState } from "react"

const FeedBackContext = createContext()

export const FeedBackProvider = ({ children }) => {
  const [feedBack, setFeedBack] = useState([
    {
      id: 1,
      rating: 8,
      text: " This Data from the Context",
    },
  ])
  return (
    <FeedBackContext.Provider value={{ feedBack }}>
      {children}
    </FeedBackContext.Provider>
  )
}

export default FeedBackContext
