const Engineer = require("../scripts/Engineer");

describe("Engineer", () => {
    describe("Constructor", () => {
        it("can set the person's github account", () => {
            const testValue = "myusername";
            const v = new Engineer("Nick", 1, "hello@hello.com", testValue);
            expect(v.github).toBe(testValue);
        });
    });
    
    describe("Get methods", () => {
        it("return \"Engineer\" via getRole", () => {
            const testValue = "Engineer";
            const v = new Engineer("Nick", 1, "hello@hello.com", "myusername");
            expect(v.getRole()).toBe(testValue);
        });
          
        it("can get the github username via getGithub", () => {
            const testValue = "myusername";
            const v = new Engineer("Nick", 1, "hello@hello.com", testValue);
            expect(v.getGithub()).toBe(testValue);
        });
    });
    
});

