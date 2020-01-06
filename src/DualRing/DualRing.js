import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const DualRing = props => {
  const { color = 'black', style } = props

  return (
    <div
      className="rpcl-dual-ring"
      style={{
        '--rpcl-dual-ring-color': color,
        ...style
      }}
    ></div>
  )
}

DualRing.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object
}

export default DualRing
