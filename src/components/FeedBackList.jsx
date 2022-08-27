import React from "react"
import FeedBackItem from "./FeedBackItem"
import PropTypes from "prop-types"
import { motion, AnimatePresence } from "framer-motion"

const FeedBackList = ({ feedback, handleDelete }) => {
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

FeedBackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
}

export default FeedBackList
