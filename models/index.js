'use strict';


const foodModel = require('./food.js');
const clothesModel = require('./clothes.js');





const { Sequelize, DataTypes} = require('sequelize');


const sequelize = new Sequelize('sqlite:memory');



const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);



module.exports = {
    db: sequelize,
    food,
    clothes
};