const { Question } = require('../models');

exports.home = async (req, res) => {

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

    let score = 0;

    for(const answer in req.body) {
        score += Number(req.body[answer]);
    }

    req.body = {};

    res.render('home', {score});

}