import React, { PureComponent } from 'react'
import './Square.css'
import PropTypes from 'prop-types'

class Square extends PureComponent {
  static propTypes = {
    value: PropTypes.number.isRequired
  }

  render () {
    return (
      <div className="Square" value={this.props.value}>
      </div>
    )
  }
}

export default Square
