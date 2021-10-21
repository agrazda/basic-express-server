'use strict';



const food = (Sequelize, DataTypes) => Sequelize.define('food', {
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    calories: {
        type: DataTypes.INTEGER,
        allowNull: true, 
    }
});

module.exports = food;
