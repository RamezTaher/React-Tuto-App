import { v4 as uuidv4 } from "uuid"
import { useState } from "react"
import FeedBackForm from "./components/FeedBackForm"
import FeedBackList from "./components/FeedBackList"
import FeedBackReviews from "./components/FeedBackReviews"
import Header from "./components/Header"
import FeedBack from "./data/FeedBack"

function App() {
  const [feedback, setFeeback] = useState(FeedBack)
  const deleteFeedback = (id) => {
    if (window.confirm("Wanna Really Delete This ?")) {
      setFeeback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedBack = (newFeedBack) => {
    newFeedBack.id = uuidv4()
    setFeeback([newFeedBack, ...feedback])
  }
  return (
    <>
      <Header />
      <div className="container">
        <FeedBackForm handleAdd={addFeedBack} />
        <FeedBackReviews feedback={feedback} />
        <FeedBackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App
