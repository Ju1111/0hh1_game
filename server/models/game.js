'use strict';
module.exports = (sequelize, DataTypes) => {
  var Game = sequelize.define('Game', {
    board: DataTypes.STRING,
    locked: DataTypes.STRING,
    sidebar: DataTypes.BOOLEAN
  }, {
    timestamps: false
  });
  Game.associate = function(models) {
    // associations can be defined here
  };
  return Game;
};
