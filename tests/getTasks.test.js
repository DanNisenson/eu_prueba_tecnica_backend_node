const app = require("../app");
const request = require("supertest");

describe("GET /v1/task/all", () => {
  it("responds with JSON containing a list of all tasks", (done) => {
    request(app)
      .get("/v1/task/all")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toBeInstanceOf(Array);
        done();
      });
  });
});
