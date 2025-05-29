const Task = require('./Task');
const Department = require('./Department');

Task.belongsTo(Department, { foreignKey: 'id_department' });
Department.hasMany(Task, { foreignKey: 'id_department' });

module.exports = {
  Task,
  Department
}
