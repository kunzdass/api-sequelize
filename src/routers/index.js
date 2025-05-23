const exampleRoute = require('./example');
const tasksRoute = require('./tasks');

module.exports = (app) => {
  exampleRoute(app);
  tasksRoute(app);
}