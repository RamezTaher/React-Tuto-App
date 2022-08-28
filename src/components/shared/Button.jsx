import React, { useContext, useEffect, useState } from "react"
import PropTypes from "prop-types"
import FeedBackContext from "../../context/FeedBackContext"

const Button = ({ type, version, isDisabled }) => {
  const { feedBackUpdate } = useContext(FeedBackContext)
  const [btnText, SetbtnText] = useState("Send")

  useEffect(() => {
    if (feedBackUpdate.isOnUpdateMode) {
      SetbtnText("Update")
    }
  }, [feedBackUpdate])

  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {btnText}
    </button>
  )
}

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
}

Button.propTypes = {
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
}

export default Button
