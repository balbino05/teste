// projetoController.js

const { Projeto } = require('../models');

module.exports = {
  criarProjeto: async (req, res) => {
    try {
      const projeto = await Projeto.create(req.body);
      return res.status(201).json(projeto);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar projeto.' });
    }
  },

  listarProjetos: async (req, res) => {
    try {
      const projetos = await Projeto.findAll();
      return res.status(200).json(projetos);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao listar projetos.' });
    }
  },
};
