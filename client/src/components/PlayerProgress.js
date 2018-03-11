import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { playerProgress } from '../lib/game'
import { connect } from 'react-redux'
import './PlayerProgress.css'

export class Progress extends PureComponent {
  static PropTypes = {
    progress: PropTypes.number.isRequired
  }

  render() {
    return(
      <div class="Progress">
        <p>Progress: <progress value={this.props.progress} max="100" /></p>
      </div>
    )
  }
}

const mapStateToProps = ({ board, locked }) => {
  return {
    progress: Math.floor(playerProgress(board, locked) * 100)
  }
}

export default connect(mapStateToProps)(Progress)
