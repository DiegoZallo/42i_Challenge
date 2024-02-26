const supertest = require("supertest-as-promised")(require("../src/app"));
const nonConstChg = require('../src/routes/nonConstChg')
const chai = require('chai');
const expect = chai.expect;
const dataTest = require('./utils')


describe("---------- `Non-Constructible Change` ----------", () => {
    describe('Valid Cases: ', ()=>{
        it("POST If coins are [1, 1, 2, 3, 5, 7, 22], should return 200, result 20", async () => {
            const result = await supertest
              .post("/nonConstChg")
              .send(dataTest[7]);
            expect(result.status).to.eql(200);
            expect(result.body).to.eql(20);
          });
        it("POST If coins are [1, 1, 2, 2, 3, 5, 7, 22], should return 200, result 44", async () => {
            const result = await supertest
              .post("/nonConstChg")
              .send(dataTest[8]);
            expect(result.status).to.eql(200);
            expect(result.body).to.eql(44);
          });
        it("POST If coins are [2, 2, 3, 5, 7, 22], should return 200, result 1", async () => {
            const result = await supertest
              .post("/nonConstChg")
              .send(dataTest[9]);
            expect(result.status).to.eql(200);
            expect(result.body).to.eql(1);
          });
        it("POST If coins are empty, should return 200, result 1", async () => {
            const result = await supertest
              .post("/nonConstChg")
              .send(dataTest[10]);
            expect(result.status).to.eql(200);
            expect(result.body).to.eql(1);
          });
    })

    describe('Invalid Cases: ', ()=>{
        it("POST If coins is not an Array, should return 400", async () => {
            const result = await supertest
              .post("/nonConstChg")
              .send(dataTest[11]);
            expect(result.status).to.eql(400);
            expect(result.body).to.eql({
                error:"Invalid coins format"
            });
          });
    })
    

  });