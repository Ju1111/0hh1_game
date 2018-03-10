import React, { PureComponent } from 'react'
import './Square.css'
import PropTypes from 'prop-types'
import { makeMove } from '../actions/move'
import { connect } from 'react-redux'

class Square extends PureComponent {
  static propTypes = {
    value: PropTypes.number.isRequired,
    makeMove: PropTypes.func.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }

  handleClick = () => {
    const { y, x, locked, makeMove } = this.props
    if (!locked) return makeMove(y,x)
  }

  render () {
    const { value } = this.props
    return (
      <div
     className={`Square fill-${value || 0}`} onClick={this.handleClick}
   />
    )
  }
}

const mapStateToProps = ({ locked }, { x, y }) => ({ locked: locked.filter(l => l[0] === y && l[1] === x).length > 0 })

export default connect(mapStateToProps, { makeMove })(Square)
