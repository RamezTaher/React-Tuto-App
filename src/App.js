import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import FeedBackForm from "./components/FeedBackForm"
import FeedBackList from "./components/FeedBackList"
import FeedBackReviews from "./components/FeedBackReviews"
import Header from "./components/Header"
import About from "./pages/About"
import AboutIconLink from "./components/AboutIconLink"
import { FeedBackProvider } from "./context/FeedBackContext"

function App() {
  return (
    <>
      <FeedBackProvider>
        <Router>
          <Header />

          <div className="container">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <FeedBackForm />
                    <FeedBackReviews />
                    <FeedBackList />
                    <AboutIconLink />
                  </>
                }
              />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      </FeedBackProvider>
    </>
  )
}

export default App
