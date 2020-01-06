import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const Ring = props => {
  const { color = 'black', style } = props
  return (
    <div
      className="rpcl-ring"
      style={{
        '--rpcl-ring-color': color,
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

Ring.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
}
export default Ring
