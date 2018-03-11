const Sequelize = require('sequelize')
const sequelize = require('../db')

const Game = sequelize.define('Game', {
    board: {
      type: Sequelize.STRING,
    },
    locked: {
      type: Sequelize.STRING,
    },
    sidebar: {
      type: Sequelize.BOOLEAN
    },
}, {
    tableName: 'products',
    timestamps: false
})

module.exports = Game
