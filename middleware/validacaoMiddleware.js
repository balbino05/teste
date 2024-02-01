// middleware/validacaoMiddleware.js
const { body, validationResult } = require('express-validator');

const validarProjeto = [
  body('nome').notEmpty().withMessage('O nome do projeto é obrigatório'),
  body('descricao').notEmpty().withMessage('A descrição do projeto é obrigatória'),
  body('dataInicio').isISO8601().withMessage('A data de início do projeto deve ser válida'),
  // Adicione mais validações conforme necessário
  (req, res, next) => {
    const erros = validationResult(req);
    if (erros.isEmpty()) {
      return next();
    }
    return res.status(400).json({ erros: erros.array() });
  },
];

module.exports = { validarProjeto };
