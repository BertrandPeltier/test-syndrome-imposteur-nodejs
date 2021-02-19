const Sequelize = require('sequelize');
const sequelize = require('../database');

class Answer extends Sequelize.Model {};

Answer.init({
    answer_text: Sequelize.STRING,
    answer_value: Sequelize.INTEGER
},{
    sequelize,
    tableName: "answer"
});

module.exports = Answer;