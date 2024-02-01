// app.js

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const { swaggerUi, specs } = require('./swagger'); // Certifique-se de ajustar o caminho correto

const app = express();

app.use(bodyParser.json());
app.use('/api', routes);
// Rota para a documentação Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
