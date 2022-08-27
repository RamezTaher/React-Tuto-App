import React, { useState } from "react"
import Card from "./shared/Card"

const FeedBackForm = () => {
  const [text, setText] = useState("")
  const handleInputChange = (e) => {
    setText(e.target.value)
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
          <button type="submit">Send</button>
        </div>
      </form>
    </Card>
  )
}

export default FeedBackForm
