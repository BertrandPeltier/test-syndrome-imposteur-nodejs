const { Question } = require('../models');

exports.test = async (req, res) => {

    try {
        const questions = await Question.findAll({
            include: 'answers'
        });
        res.render('home', {questions});
    }
    catch {
        console.log(error);
        res.send('Error'); // Redirect('/') ?
    }

    
}

exports.result = (req, res) => {

    const result = {
        score: 0,
        reading: ''
    };

    for(const answer in req.body) {

        result.score += Number(req.body[answer]);
    }

    if (result.score <= 40) {result.reading = 'Vous vivez faiblement l’expérience du sentiment d’imposture.'};
    if (result.score > 40 && result.score <= 60) { result.reading = 'Vous vivez modérément l’expérience du sentiment d’imposture.'};
    if (result.score > 60 && result.score <= 80) {result.reading = 'vous vivez fréquemment l’expérience de sentiment d’imposture.'};
    if (result.score > 80) {result.reading = 'vous vivez intensément l’expérience du sentiment d’imposture.'};

    console.log(result);

    res.render('home', {result});

}