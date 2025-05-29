const db = require('../configs');
const { DataTypes } = require('sequelize');

const Department = db.define(
  'Department',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      field: 'id'
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'name'
    }
  },
  {
    tableName: 'department',
    timestamps: false
  }
);

module.exports = Department;