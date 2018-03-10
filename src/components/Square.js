import React, { PureComponent } from 'react'
import './Square.css'
import PropTypes from 'prop-types'

class Square extends PureComponent {
  static propTypes = {
    value: PropTypes.number.isRequired
  }

  render () {
    const { value } = this.props
    return (
      <div
     className={`Square fill-${value || 0}`}
   />
    )
  }
}

export default Square
