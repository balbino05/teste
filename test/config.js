// test/config.js

process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Certifique-se de ajustar o caminho correto
const { sequelize } = require('../models'); // Certifique-se de ajustar o caminho correto

chai.use(chaiHttp);

before(async () => {
  // Executar migrações antes dos testes
  await sequelize.sync({ force: true });
});

after(async () => {
  // Fechar a conexão do banco de dados após os testes
  await sequelize.close();
});

module.exports = { chai, app };
