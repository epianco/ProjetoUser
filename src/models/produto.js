const Sequelize = require('sequelize');

const sequelize = require('../database/database.js');

const Produto = sequelize.define("produto", {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },

    produto:{
        allowNull: false,
        type: Sequelize.STRING(130),
        validate: {
            len: [3, 100]
        }
    },

    descricao: {
        allowNull: false,
        type: Sequelize.STRING(150),
        validate: {
            len: [2, 150]
        }
    },

    quantidade: {
        allowNull: false,
        type: Sequelize.INTEGER
    },

    valor: {
        allowNull: false,
        type:Sequelize.DOUBLE(),
        validate: {
            len:[1, 99999]
        }
    },

    ativo: {
        allowNull: false,
        type: Sequelize.BOOLEAN(),
        defaultValue: true
    }
});

module.exports = Produto;