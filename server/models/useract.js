'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserAct = sequelize.define('user_act', {
    user_id: DataTypes.INTEGER,
    act_id: DataTypes.INTEGER
  }, {underscored: true});
  UserAct.associate = function(models) {
    // associations can be defined here
    UserAct.belongsTo(models.User);
    UserAct.belongsTo(models.Act);
  }
  return UserAct;
};