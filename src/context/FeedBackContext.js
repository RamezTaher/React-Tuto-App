import { createContext, useEffect, useState } from "react"

const FeedBackContext = createContext()

export const FeedBackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchFeedbackData()
  }, [])

  // Fetch feedback
  const fetchFeedbackData = async () => {
    try {
      const res = await fetch(`/feedback?_sort=id&order=desc`)
      const data = await res.json()
      setFeedback(data)
      setIsLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  const deleteFeedback = async (id) => {
    if (window.confirm("Wanna Really Delete This ?")) {
      await fetch(`/feedback/${id}`, { method: "DELETE" })
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedBack = async (newFeedBack) => {
    const res = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newFeedBack),
    })
    const data = await res.json()
    setFeedback([data, ...feedback])
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

  const updateFeedBackContent = async (id, newItem) => {
    const res = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })

    const data = res.json()
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    )
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
        isLoading,
      }}
    >
      {children}
    </FeedBackContext.Provider>
  )
}

export default FeedBackContext
