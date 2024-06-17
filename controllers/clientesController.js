const Cliente = require('../models/clientes');

// Função para listar todos os clientes
exports.listarClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll(); // Usa o método findAll do Sequelize para buscar todos os clientes
    res.json(clientes); // Retorna os clientes em formato JSON
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao buscar clientes' }); // Retorna um erro 500 em caso de falha
  }
};
