const exampleRoute = require('./example');
const tasksRoute = require('./tasks');
const filesRoute = require('./files');

module.exports = (app, upload) => {
  exampleRoute(app);
  tasksRoute(app);
  filesRoute(app, upload);
}