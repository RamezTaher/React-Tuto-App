import { v4 as uuidv4 } from "uuid"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useState } from "react"
import FeedBackForm from "./components/FeedBackForm"
import FeedBackList from "./components/FeedBackList"
import FeedBackReviews from "./components/FeedBackReviews"
import Header from "./components/Header"
import FeedBack from "./data/FeedBack"
import About from "./pages/About"
import AboutIconLink from "./components/AboutIconLink"

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
      <Router>
        <Header />

        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedBackForm handleAdd={addFeedBack} />
                  <FeedBackReviews feedback={feedback} />
                  <FeedBackList
                    feedback={feedback}
                    handleDelete={deleteFeedback}
                  />
                  <AboutIconLink />
                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
