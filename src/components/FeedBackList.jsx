import React, { useContext } from "react"
import FeedBackItem from "./FeedBackItem"
import { motion, AnimatePresence } from "framer-motion"

import FeedBackContext from "../context/FeedBackContext"
import Spinner from "./shared/Spinner"

const FeedBackList = () => {
  const { feedback, isLoading } = useContext(FeedBackContext)

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback available for now.</p>
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedBackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default FeedBackList
