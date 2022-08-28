import React, { useContext } from "react"
import FeedBackContext from "../context/FeedBackContext"

const FeedBackReviews = () => {
  const { feedback } = useContext(FeedBackContext)
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating
    }, 0) / feedback.length

  average = average.toFixed(1)

  return (
    <div className="feedback-stats">
      <h3>{feedback.length} Reviews</h3>
      <h3>Average Rating: {isNaN(average) ? 0 : average}</h3>
    </div>
  )
}

export default FeedBackReviews
