// routes.js

const express = require('express');
const router = express.Router();
const projetoController = require('./controllers/projetoController');
const tarefaController = require('./controllers/tarefaController');

/**
 * @swagger
 * /projetos:
 *   post:
 *     summary: Cria um novo projeto
 *     description: Endpoint para criar um novo projeto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               descricao:
 *                 type: string
 *               dataInicio:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Projeto criado com sucesso
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               nome: Projeto 1
 *               descricao: Descrição do Projeto 1
 *               dataInicio: 2022-01-01
 *       400:
 *         description: Erro de validação nos dados do projeto
 *         content:
 *           application/json:
 *             example:
 *               erro: Nome do projeto é obrigatório
 */
router.post('/projetos', projetoController.criarProjeto);
router.get('/projetos', projetoController.listarProjetos);
router.post('/projetos/:id/tarefas', tarefaController.adicionarTarefa);
router.get('/projetos/:id/tarefas', tarefaController.listarTarefas);
router.put('/tarefas/:id/concluir', tarefaController.marcarComoConcluida);
router.delete('/tarefas/:id', tarefaController.excluirTarefa);

const { verificarAutenticacao, verificarAutorizacao } = require('./middleware/authMiddleware');
const { validarProjeto } = require('./middleware/validacaoMiddleware');

router.post('/projetos', verificarAutenticacao, verificarAutorizacao, validarProjeto, projetoController.criarProjeto);

module.exports = router;
