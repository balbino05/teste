// middleware/authMiddleware.js
const verificarAutenticacao = (req, res, next) => {
    // Lógica de verificação de autenticação
    if (usuarioAutenticado) {
      next(); // Prossiga para a próxima middleware ou rota
    } else {
      res.status(401).json({ erro: 'Não autorizado' });
    }
  };
  
  module.exports = { verificarAutenticacao };
  