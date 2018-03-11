'use strict';
module.exports = (sequelize, DataTypes) => {
  var Game = sequelize.define('Game', {
    row: DataTypes.INTEGER,
    column: DataTypes.INTEGER,
    value: DataTypes.INTEGER,
    locked: DataTypes.BOOLEAN
  }, {
    timestamps: false
  });
  Game.associate = function(models) {
    // associations can be defined here
  };
  return Game;
};
