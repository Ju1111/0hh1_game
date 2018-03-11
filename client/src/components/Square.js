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
    y: PropTypes.number.isRequired,
    locked: PropTypes.bool.isRequired,
    dupe: PropTypes.bool,
    error: PropTypes.bool
  }

  handleClick = () => {
    const { y, x, locked, makeMove } = this.props
    if (!locked) return makeMove(y,x)
  }

  changeName = () => {
    const { value, locked, dupe, error } = this.props
    let classnames = ['Square']

    classnames.push(`fill-${value || 0}`)
    if (locked) classnames.push('locked')
    if (dupe) classnames.push('dupe')
    if (error) classnames.push('error')

    return classnames.join(' ')
  }

  render () {
    return (
      <div
        className={this.changeName()}
        onClick={this.handleClick}
       />
    )
  }
}

const mapStateToProps = ({ locked }, { x, y }) => ({ locked: locked.filter(l => l[0] === y && l[1] === x).length > 0 })

export default connect(mapStateToProps, { makeMove })(Square)
