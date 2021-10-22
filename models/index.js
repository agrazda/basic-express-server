'use strict';


const foodModel = require('./food.js');
const clothesModel = require('./clothes.js');
const messageModel = require('./message.js');
const channelModel = require('./channel.js');




const { Sequelize, DataTypes} = require('sequelize');


const sequelize = new Sequelize('sqlite:memory');



const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);
const messages = messageModel(sequelize, DataTypes);
const channels = channelModel(sequelize, DataTypes);


channels.hasMany(messages, { foreignKey: 'channelId', sourceKey: 'id'});
messages.belongsTo(channels, { foreignKey: 'channelId', targetKey: 'id'});


module.exports = {
    db: sequelize,
    food,
    clothes,
    messages,
    channels,

};