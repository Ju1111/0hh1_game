import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { gameFinished } from '../lib/game'
import { connect } from 'react-redux'
import CreateGameButton from './CreateGameButton'
import './GameFinished.css'

export class Finished extends PureComponent {
  static PropTypes = {
    wrong: PropTypes.bool
  }

  handleClick = () => {
    this.props.createGame()
  }

  render() {
    if (this.props.wrong) return null

    return (
      <div className="Finished">
        <div className="message">
          <p>Congrats! You have finished the game!</p>
          <div className="button">
            <CreateGameButton label="Play again" />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ board }) => ({ wrong: !gameFinished(board) })

export default connect(mapStateToProps)(Finished)
