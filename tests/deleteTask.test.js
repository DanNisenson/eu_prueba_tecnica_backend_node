const request = require("supertest");
const app = require("../app");

describe("DELETE /v1/task/:uuid", () => {
  it("should delete a task by UUID", async () => {
    const task = { title: "Test Task", tag: "test" };
    const createdTaskResponse = await request(app).post("/v1/task").send(task);

    const uuid = createdTaskResponse.body.uuid;
    const deleteResponse = await request(app).delete(`/v1/task/${uuid}`);
    expect(deleteResponse.status).toBe(200);
    expect(deleteResponse.body).not.toContainEqual({ uuid, ...task });
  });

  it("should return 404 for non-existing task", async () => {
    const deleteResponse = await request(app).delete(
      "/v1/task/non-existing-uuid"
    );

    expect(deleteResponse.status).toBe(404);
    expect(deleteResponse.body).toEqual({ message: "Task not found" });
  });
});
