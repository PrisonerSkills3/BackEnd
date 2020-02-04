const request = require("supertest");

const server = require("../api/server");

describe("authRouter", () => {
  describe("register route", () => {
    it("should return a 500 error without completed body", () => {
      return request(server)
        .post("/api/auth/register")
        .then(res => {
          expect(res.status).toEqual(500);
        });
    });

    it("should return a text/html response if error message is returned", () => {
      return request(server)
        .post("/api/auth/register")
        .then(res => {
          expect(res.type).toEqual("text/html");
        });
    });
  });

  describe("login route", () => {
    it("should return a 400 error without completed body", () => {
      return request(server)
        .post("/api/auth/login")
        .then(res => {
          expect(res.status).toEqual(400);
        });
    });

    it("should return a json object as a response if error message is returned", () => {
      return request(server)
        .post("/api/auth/login")
        .then(res => {
          expect(res.type).toEqual("application/json");
        });
    });
  });

  describe("add prisoner route", () => {
    it("should return a 401 error without completed body", () => {
      return request(server)
        .post("/api/auth/add-prisoner")
        .then(res => {
          expect(res.status).toEqual(401);
        });
    });

    it("should return a json object as a response if error message is returned", () => {
      return request(server)
        .post("/api/auth/add-prisoner")
        .then(res => {
          expect(res.type).toEqual("application/json");
        });
    });
  });

  describe("edit prisoner route", () => {
    it("should return a 404 error without completed body", () => {
      return request(server)
        .post("/api/auth/edit-prisoner")
        .then(res => {
          expect(res.status).toEqual(404);
        });
    });

    it("should return a text/html response if error message is returned", () => {
      return request(server)
        .post("/api/auth/edit-prisoner")
        .then(res => {
          expect(res.type).toEqual("text/html");
        });
    });
  });

  describe("delete prisoner route", () => {
    it("should return a 404 error without completed body", () => {
      return request(server)
        .post("/api/auth/delete-prisoner")
        .then(res => {
          expect(res.status).toEqual(404);
        });
    });

    it("should return a text/html response if error message is returned", () => {
      return request(server)
        .post("/api/auth/delete-prisoner")
        .then(res => {
          expect(res.type).toEqual("text/html");
        });
    });
  });
});
