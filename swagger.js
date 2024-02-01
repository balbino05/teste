// swagger.js

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Gerenciamento de Projetos API',
      version: '1.0.0',
      description: 'API para gerenciar projetos e tarefas',
    },
  },
  apis: ['./routes.js'], // caminho para o arquivo com as rotas
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
