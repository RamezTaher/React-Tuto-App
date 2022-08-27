import React from "react"
import Card from "./shared/Card"
import PropTypes from "prop-types"
import { FaTimes } from "react-icons/fa"

const FeedBackItem = ({ item, handleDelete }) => {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => handleDelete(item.id)}>
        <FaTimes color="purple" size={20} />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedBackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedBackItem
