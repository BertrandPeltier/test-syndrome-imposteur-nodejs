const Sequelize = require('sequelize');
const sequelize = require('../database');

class Test extends Sequelize.Model {};

Test.init({
    test_date: Sequelize.DATE,
    test_score: Sequelize.INTEGER,
},{
    sequelize,
    tableName: "test"
});

module.exports = Test;