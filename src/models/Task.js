const db = require('../configs');
const { DataTypes } = require('sequelize');

const Task = db.define(
  'Task',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      field: 'id'
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'description'
    },
    done: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: 'done'
    },
    idDepartment: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'id_department'
    }
  },
  {
    tableName: 'tasks',
    timestamps: false
  }
);

module.exports = Task