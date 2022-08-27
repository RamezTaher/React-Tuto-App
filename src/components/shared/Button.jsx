import React from "react"
import PropTypes from "prop-types"
import { isDisabled } from "@testing-library/user-event/dist/utils"

const Button = ({ children, type, version, isDisabled }) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
}

export default Button
