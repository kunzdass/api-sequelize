const controller = require('../controllers/tasks');

module.exports = (app) => {
  app.post('/tasks', controller.insertTask);
  app.get('/tasks', controller.getAllTasks);
  app.patch('/tasks/:id', controller.updateTask);
}