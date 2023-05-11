const app = require("../app");
const request = require("supertest");

const testTask = {
  uuid: "dff77221-eebc-4a39-8283-044da5c31656",
  title: "this is a title",
};

describe("PATCH /v1/task/", () => {
  it("responds with JSON containing the patched task", (done) => {
    request(app)
      .patch("/v1/task/")
      .set("Accept", "application/json")
      .send(testTask)
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.id).toBeGreaterThan(0);
        expect(typeof res.body.uuid).toBe("string");
        expect(typeof res.body.title).toBe("string");
        expect(typeof res.body.tag).toBe("string");
        expect(typeof res.body.completed).toBe("boolean");
        done();
      });
  });
});
