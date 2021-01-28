const Sequelize = require('sequelize');
const sequelize = require('../database');

class Question extends Sequelize.Model {};

Question.init({
    question_text: Sequelize.STRING
},{
    sequelize,
    tableName: "question"
});

module.exports = Question;