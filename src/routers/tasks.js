const controller = require('../controllers/tasks');

module.exports = (app) => {
  app.post('/tasks', controller.insertTask);
  app.get('/tasks', controller.getAllTasks);
  app.get('/filter-tasks', controller.getTasks);
  app.patch('/tasks/:id', controller.updateTask);
  app.delete('/tasks/:id', controller.deleteTask);
}