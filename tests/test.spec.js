var request = require("request");
var helloWorld = require("../app.js");
var base_url = "http://localhost:4000"

describe("Hello World Server", function() {
    describe("GET /", function() {
        it("returns status code 200", function() {
            request.get(base_url, function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        it("returns Hello World", function() {
            request.get(base_url, function(error, response, body) {
                expect(body).toBe("Hellow World");
                helloWorld.closeServer();
                done();
            });
        });
    });
});
