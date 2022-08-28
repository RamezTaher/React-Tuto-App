import React, { useContext } from "react"
import FeedBackItem from "./FeedBackItem"
import { motion, AnimatePresence } from "framer-motion"

import FeedBackContext from "../context/FeedBackContext"

const FeedBackList = ({ handleDelete }) => {
  const { feedback } = useContext(FeedBackContext)

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback available for now.</p>
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedBackItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default FeedBackList
