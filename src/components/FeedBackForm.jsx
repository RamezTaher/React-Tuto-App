import React, { useState } from "react"
import Button from "./shared/Button"
import Card from "./shared/Card"

const FeedBackForm = () => {
  const [text, setText] = useState("")
  const [isBtnDisabled, setIsBtnDisabled] = useState(true)
  const [message, setMessage] = useState("")
  const handleInputChange = (e) => {
    setText(e.target.value)
    if (text === "") {
      setIsBtnDisabled(true)
      setMessage(null)
    } else if (text !== "" && text.trim().length <= 10) {
      setIsBtnDisabled(true)
      setMessage("Review must be at least 10 characters")
    } else {
      setMessage(null)
      setIsBtnDisabled(false)
    }
  }
  return (
    <Card>
      <form>
        <h2>How d u rate ur service with us ?</h2>
        {/* selects */}

        <div className="input-group">
          <input
            type="text"
            placeholder="Write a Review"
            value={text}
            onChange={handleInputChange}
          />
          <Button type="submit" isDisabled={isBtnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedBackForm
