import { useState } from "react"
import FeedBackItem from "./components/FeedBackItem"
import FeedBackList from "./components/FeedBackList"
import Header from "./components/Header"
import FeedBack from "./data/FeedBack"

function App() {
  const [feedback, setFeeback] = useState(FeedBack)
  return (
    <>
      <Header />
      <div className="container">
        <FeedBackList feedback={feedback} />
      </div>
    </>
  )
}

export default App
