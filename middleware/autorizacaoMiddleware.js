// middleware/autorizacaoMiddleware.js
const verificarAutorizacao = (req, res, next) => {
    // Lógica de verificação de autorização
    if (usuarioAutorizado) {
      next(); // Prossiga para a próxima middleware ou rota
    } else {
      res.status(403).json({ erro: 'Proibido' });
    }
  };
  
  module.exports = { verificarAutorizacao };
  