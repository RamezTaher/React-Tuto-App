import React, { useContext } from "react"
import Card from "./shared/Card"
import PropTypes from "prop-types"
import { FaEdit, FaTimes } from "react-icons/fa"
import FeedBackContext from "../context/FeedBackContext"

const FeedBackItem = ({ item }) => {
  const { deleteFeedback, updateFeedBack } = useContext(FeedBackContext)
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes color="purple" size={20} />
      </button>
      <button className="edit">
        <FaEdit color="purple" size={20} onClick={() => updateFeedBack(item)} />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedBackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedBackItem
