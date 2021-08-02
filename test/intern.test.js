const Intern = require("../scripts/Intern");

describe("Intern", () => {
    describe("Constructor", () => {
        it("can set the person's school", () => {
            const testValue = "myschool";
            const v = new Intern("Nick", 1, "hello@hello.com", testValue);
            expect(v.school).toBe(testValue);
        });
    });
    
    describe("Get methods", () => {
        it("return \"Intern\" via getRole", () => {
            const testValue = "Intern";
            const v = new Intern("Nick", 1, "hello@hello.com", "myschool");
            expect(v.getRole()).toBe(testValue);
        });
          
        it("can get the person's school via getSchool", () => {
            const testValue = "myschool";
            const v = new Intern("Nick", 1, "hello@hello.com", testValue);
            expect(v.getSchool()).toBe(testValue);
        });
    });
    
});