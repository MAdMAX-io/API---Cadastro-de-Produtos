const mongoose = require('mongoose');

/**
 * Iniciando conecção com o mongo DB
 * 
 * TODO acesso ao bano com usuario e senha
 */
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

mongoose.set('useCreateIndex', true);

module.exports = mongoose;