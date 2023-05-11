const app = require("../app");
const request = require("supertest");

const testTask = {
  id: 0,
  uuid: "",
  title: "this is a title",
  tag: "none",
  completed: false,
};

describe("POST /v1/task/", () => {
  it("responds with JSON containing the inserted task", (done) => {
    request(app)
      .post("/v1/task/")
      .set("Accept", "application/json")
      .send(testTask)
      .expect("Content-Type", /json/)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.id).toBeGreaterThan(0);
        expect(res.body.uuid).toBeDefined();
        expect(res.body.title).toBeTruthy();
        expect(res.body.tag).toBe("none");
        expect(res.body.completed).toBe(false);
        done();
      });
  });
});
