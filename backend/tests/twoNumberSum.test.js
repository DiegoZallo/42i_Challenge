const supertest = require("supertest-as-promised")(require("../src/app"));
const twoNumberSum = require('../src/routes/twoNumberSum')
const chai = require('chai');
const expect = chai.expect;
const dataTest = require('./utils')

describe("---------- `Two Number Sum` ----------", () => {

    describe('Valid Cases:',()=>{

        it("POST If all values are correct and targetSum can be generated, should return 200", async () => {
            const result = await supertest
              .post('/twoNumberSum')
              .send(dataTest[3]);
              
            expect(result.status).to.eql(200);
            expect(result.body).to.eql([1,4]);
        });

        it("POST If all values are correct and targetSum can Not be generated, should return 200 and empty array", async () => {
            const result = await supertest
              .post('/twoNumberSum')
              .send(dataTest[4]);
              
            expect(result.status).to.eql(200);
            expect(result.body).to.eql([]);
        });
    })

    describe('Invalid Cases:',()=>{

        it("POST If targetSum is 0, should return 400", async () => {
            const result = await supertest
              .post('/twoNumberSum')
              .send(dataTest[0]);
              
            expect(result.status).to.eql(400);
            expect(result.body).to.eql({
              error: "Invalid target sum format/value",
            });
        });
        it("POST If targetSum is not a Number, should return 400", async () => {
            const result = await supertest
              .post('/twoNumberSum')
              .send(dataTest[1]);
              
            expect(result.status).to.eql(400);
            expect(result.body).to.eql({
              error: "Invalid target sum format/value",
            });
        });
        it("POST If numbers is empty Array, should return 400", async () => {
            const result = await supertest
              .post('/twoNumberSum')
              .send(dataTest[2]);
              
            expect(result.status).to.eql(400);
            expect(result.body).to.eql({
              error: "Can't acept an empty numbers array",
            });
        });
        it("POST If numbers is not an Array, should return 400", async () => {
            const result = await supertest
              .post('/twoNumberSum')
              .send(dataTest[5]);
              
            expect(result.status).to.eql(400);
            expect(result.body).to.eql({
                error:"Invalid numbers format"
            });
        });
        it("POST If array contains repeated numbers, should return 400", async () => {
            const result = await supertest
              .post('/twoNumberSum')
              .send(dataTest[6]);
              
            expect(result.status).to.eql(400);
            expect(result.body).to.eql({
                error:"Can't acept repeated numbers"
            });
        });
    })

  });