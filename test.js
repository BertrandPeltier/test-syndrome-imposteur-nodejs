/*require('dotenv').config();

const { Question, Answer } = require('./app/models');


Question.findAll({
    include: 'answers'
}).then(questions => {
    for(const question of questions) {
        console.log(`${question.id} - ${question.question_text}`);
        for(const answer of question.answers) {
            console.log(`- ${answer.answer_text}`);
        }
    }
});*/

console.log(Date().toString());
console.log(Date.now());
