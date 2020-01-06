import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const Ellipsis = props => {
  const { color = 'black', style } = props
  return (
    <div
      className="rpcl-ellipsis"
      style={{
        '--rpcl-ellipsis-color': color,
        ...style
      }}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

Ellipsis.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
}

export default Ellipsis
