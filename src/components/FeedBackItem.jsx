import React, { useState } from "react"

const FeedBackItem = () => {
  const [rating, setRating] = useState(7)
  const [feedbackText, setFeedbackText] = useState("This My first FeedBack")
  const handleClick = () => {
    setRating((prev) => {
      console.log(prev)
      return prev + 1
    })
  }
  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{feedbackText}</div>
      <button onClick={() => handleClick()}>+</button>
    </div>
  )
}

export default FeedBackItem
