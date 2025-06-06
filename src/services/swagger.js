const swaggerAutogen = require('swagger-autogen')({ language: 'pt-BR' });
const swaggerUi = require('swagger-ui-express');

const doc = {
  info: { title: 'Minha API', version: '1.0.0' },
  host: 'localhost:3000',
  basePath: '/',
};

const outputFile = '../src/docs/swagger_output.json';
const endpointsFiles = [
  'src/routers/tasks.js',
  'src/routers/example.js'
];

swaggerAutogen(outputFile, endpointsFiles, doc);

const swaggerFile = require('../docs/swagger_output.json');

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
}