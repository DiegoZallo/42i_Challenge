const supertest = require("supertest-as-promised")(require("../src/app"));
const Test = require("supertest/lib/test");
const twoNumberSum = require('../src/routes/twoNumberSum')
const chai = require('chai');
const expect = chai.expect;

describe("---------- `Two Number Sum` ----------", () => {

    const dataTest = [
        { // 0
            numbers: [1, 2, 3, 4, 5],
            targetSum: 0,
        },
        { // 1
            numbers: [1, 2, 3, 4, 5],
            targetSum: 'x',
        },
        { // 2
            numbers: [],
            targetSum: 9,
        },
        { // 3
            numbers: [1, 2, 3, 4, 5],
            targetSum: 5,
        },
        { // 4
            numbers: [1, 2, 3, 4, 5],
            targetSum: 12,
        },
        { // 5
            numbers: '[1, 2, 3, 4, 5]',
            targetSum: 12,
        }
    
    ];

    describe('Valid Cases:',()=>{

        it("POST If all values are correct and targetSum can be generated, response should be 200", async () => {
            const result = await supertest
              .post('/twoNumberSum')
              .send(dataTest[3]);
              
            expect(result.status).to.eql(200);
            expect(result.body).to.eql([1,4]);
        });

        it("POST If all values are correct and targetSum can Not be generated, response should be 200 and an empty array []", async () => {
            const result = await supertest
              .post('/twoNumberSum')
              .send(dataTest[4]);
              
            expect(result.status).to.eql(200);
            expect(result.body).to.eql([]);
        });
    })

    describe('Invalid Cases:',()=>{

        it("POST If targetSum is 0, response should be 400", async () => {
            const result = await supertest
              .post('/twoNumberSum')
              .send(dataTest[0]);
              
            expect(result.status).to.eql(400);
            expect(result.body).to.eql({
              error: "Invalid target sum format/value",
            });
        });
        it("POST If targetSum is not a Number, response should be 400", async () => {
            const result = await supertest
              .post('/twoNumberSum')
              .send(dataTest[1]);
              
            expect(result.status).to.eql(400);
            expect(result.body).to.eql({
              error: "Invalid target sum format/value",
            });
        });
        it("POST If numbers is empty Array, response should be 400", async () => {
            const result = await supertest
              .post('/twoNumberSum')
              .send(dataTest[2]);
              
            expect(result.status).to.eql(400);
            expect(result.body).to.eql({
              error: "Can't acept an empty numbers array",
            });
        });
        it("POST If numbers is not an Array, response should be 400", async () => {
            const result = await supertest
              .post('/twoNumberSum')
              .send(dataTest[5]);
              
            expect(result.status).to.eql(400);
            expect(result.body).to.eql({
                error:"Invalid numbers format"
            });
        });
    })

  });