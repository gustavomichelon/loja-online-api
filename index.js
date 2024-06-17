const express = require('express');
const apiRoutes = require('./routes/api'); // Importa as rotas da API
const sequelize = require('./config/database'); // Importa a configuração do Sequelize

const app = express();

// Middleware para processar o corpo das requisições como JSON
app.use(express.json());

// Define o caminho para as rotas da API
app.use('/api', apiRoutes);

// Sincroniza o Sequelize com o banco de dados e inicia o servidor
sequelize.sync().then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
  });
}).catch(err => {
  console.error('Erro ao conectar com o banco de dados:', err);
});
