const supertest = require("supertest")(require("../src/app"));


describe("---------- `Non-Constructible Change` ----------", () => {

    it("POST si el personaje ya existe, responde con el error correspondiente y un status 400", async () => {

        const result = await supertest
          .post("/personaje")
          .send({ personaje: 0 });
        expect(result.status).to.eql(400);
        expect(result.body).to.eql({
          error: "Ya existe ese personaje",
        });
      });
  });