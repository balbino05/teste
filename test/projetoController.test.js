// test/projetoController.test.js

const { chai, app } = require('./config');

describe('Projeto Controller', () => {
  describe('POST /projetos', () => {
    it('Deve criar um novo projeto', async () => {
      const res = await chai.request(app)
        .post('/api/projetos')
        .send({
          nome: 'Novo Projeto',
          descricao: 'Descrição do Novo Projeto',
          dataInicio: '2022-01-01',
        });

      res.should.have.status(201);
      res.body.should.be.a('object');
      res.body.should.have.property('id');
      res.body.should.have.property('nome').eql('Novo Projeto');
      res.body.should.have.property('descricao').eql('Descrição do Novo Projeto');
    });
  });

  // Adicione mais testes para outras rotas conforme necessário
});
