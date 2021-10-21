'use strict';


const clothes = (Sequelize, DataTypes)  => Sequelize.define('clothes', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    size: {
        type: DataTypes.ENUM('s', 'm', 'l', 'xl'),
        allowNull: true,
    }
});

module.exports = clothes