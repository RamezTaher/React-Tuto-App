import { createContext, useState } from "react"
import { v4 as uuidv4 } from "uuid"

const FeedBackContext = createContext()

export const FeedBackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 8,
      text: " This Data from the Context 1",
    },
    {
      id: 2,
      rating: 3,
      text: " This Data from the Context 2",
    },
    {
      id: 3,
      rating: 5,
      text: " This Data from the Context 3",
    },
  ])

  const deleteFeedback = (id) => {
    if (window.confirm("Wanna Really Delete This ?")) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedBack = (newFeedBack) => {
    newFeedBack.id = uuidv4()
    setFeedback([newFeedBack, ...feedback])
  }

  const [feedBackUpdate, setFeedbackUpdate] = useState({
    item: {},
    isOnUpdateMode: false,
  })

  const updateFeedBack = (item) => {
    setFeedbackUpdate({
      item,
      isOnUpdateMode: true,
    })
  }

  const updateFeedBackContent = (id, newItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...newItem } : item))
    )

    console.log(feedback)
  }

  return (
    <FeedBackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedBack,
        updateFeedBack,
        feedBackUpdate,
        updateFeedBackContent,
      }}
    >
      {children}
    </FeedBackContext.Provider>
  )
}

export default FeedBackContext
