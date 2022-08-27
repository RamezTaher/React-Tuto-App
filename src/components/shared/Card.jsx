import React from "react"
import PropTypes from "prop-types"

const Card = ({ children, isReverse }) => {
  return (
    <div
      className="card"
      style={{
        backgroundColor: isReverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: isReverse ? "#fff" : "#000",
      }}
    >
      {children}
    </div>
  )
}

Card.defaultProps = {
  isReverse: false,
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  isReverse: PropTypes.bool,
}

export default Card
