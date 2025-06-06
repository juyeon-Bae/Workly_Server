const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Word = sequelize.define('Word', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    category: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    word: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    explanation: {
        type: DataTypes.STRING(300),
        allowNull: false,
    },
    userId: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
}, {
    timestamps: true, // createdAt, updatedAt 자동 생성
    tableName: 'words',
});

module.exports = Word;
