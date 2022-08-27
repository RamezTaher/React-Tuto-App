import { useState } from "react"
import FeedBackList from "./components/FeedBackList"
import Header from "./components/Header"
import FeedBack from "./data/FeedBack"

function App() {
  const [feedback, setFeeback] = useState(FeedBack)
  const deleteFeedback = (id) => {
    if (window.confirm("Wanna Really Delete This ?")) {
      setFeeback(feedback.filter((item) => item.id !== id))
    }
  }
  return (
    <>
      <Header />
      <div className="container">
        <FeedBackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App
