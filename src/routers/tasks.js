const controller = require('../controllers/tasks');

module.exports = (app) => {
  app.post('/tasks', controller.insertTask
    /*#swagger.start
      #swagger.tags = ['Tasks']
      #swagger.summary = 'Rota para inserir tarefa'
      #swagger.parameters['body'] = {
        in: 'body',
        description: 'User data.',
        required: true,
        schema: {
          "description": "Teste"
        }
      }
      #swagger.responses[200] = {
        description: 'Sucesso',
        schema: [
          {
            "hello": "world"
          }
        ]
      }
    */
  );
  app.get('/tasks', controller.getAllTasks);
  app.get('/filter-tasks', controller.getTasks);
  app.patch('/tasks/:id', controller.updateTask);
  app.delete('/tasks/:id', controller.deleteTask);
}