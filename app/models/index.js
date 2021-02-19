const Question = require('./question');
const Answer = require('./answer');

Question.belongsToMany(Answer, {
    as: "answers",
    through: 'question_has_answer',
    foreignKey: 'question_id',
    otherKey: 'answer_id'
});

Answer.belongsToMany(Question, {
    as: "questions",
    through: 'question_has_answer',
    foreignKey: 'answer_id',
    otherKey: 'question_id'
});

module.exports = { Question, Answer };