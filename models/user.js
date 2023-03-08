'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      });

      User.hasMany(models.User, {
        foreignKey: 'userId',
        as: 'users',
      }); 

      User.hasMany(models.Department, {
        foreignKey: 'userId',
        as: 'departments',
      }); 

      User.hasMany(models.Department, {
        foreignKey: 'userId',
        as: 'contacts',
      }); 
    }
  }
  User.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    middleName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false,
      validate: {
        is: /^[0-9a-f]{64}$/i
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: true,
  });
  return User;
};