const request = require("supertest");
const app = require("../app");

const task = {
  id: 0,
  uuid: "",
  title: "Test Task",
  tag: "none",
  completed: false,
};

describe("PATCH /v1/task/", () => {
  it("should update an existing task", async () => {
    const createdTaskResponse = await request(app).post("/v1/task").send(task);

    const uuid = createdTaskResponse.body.uuid;
    const updatedTask = {
      uuid,
      title: "Updated Task",
    };
    const updateResponse = await request(app)
      .patch("/v1/task")
      .send(updatedTask);
    console.log(updateResponse.body);
    expect(updateResponse.status).toBe(200);
    expect(updateResponse.body.id).toBeGreaterThan(0);
    expect(updateResponse.body.uuid).toEqual(uuid);
    expect(updateResponse.body.title).toEqual(updatedTask.title);
    expect(typeof updateResponse.body.tag).toBe("string");
    expect(typeof updateResponse.body.completed).toBe("boolean");
  });

  it("should return 404 for non-existing task", async () => {
    const updatedTask = {
      uuid: "non-existing-uuid",
      title: "Updated Task",
      tag: "test",
    };
    const updateResponse = await request(app)
      .patch("/v1/task")
      .send(updatedTask);

    expect(updateResponse.status).toBe(404);
    expect(updateResponse.body).toEqual({ message: "Task not found" });
  });
});
