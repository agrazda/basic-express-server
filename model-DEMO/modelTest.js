// 'use strict';


// const {db, phrases} = require('../model-DEMO')
// const supertest = require('supertest');
// const app = require('../app');
// const request = supertest(app.server);


// beforeAll(() => {
//     await db.sync(); 
// });

// afterAll(async () => {

//     await db.drop();
// })


// describe('Testing our sequelize model', ()=>{

//     it('Should be able to create phrase', async() => {

//         let newPhrase=await phrases.create({
//             words:'some test words',
//             title:'my new phrase'
//         });

//         console.log(newPhrase);
//         expect(newPhrase.words).toEqual('some test words');
//         //.toEqual is to ==
//         //.toBe is to ===
//     });
// });