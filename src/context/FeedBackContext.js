import { createContext, useState } from "react"

const FeedBackContext = createContext()

export const FeedBackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 8,
      text: " This Data from the Context",
    },
  ])
  return (
    <FeedBackContext.Provider value={{ feedback }}>
      {children}
    </FeedBackContext.Provider>
  )
}

export default FeedBackContext
