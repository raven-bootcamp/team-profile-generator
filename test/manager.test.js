const Manager = require("../scripts/Manager");

describe("Manager", () => {
    describe("Constructor", () => {
        it("can set the office number", () => {
            const testValue = 50;
            const v = new Manager("Nick", 1, "hello@hello.com", testValue);
            expect(v.officeNumber).toBe(testValue);
        });
    });
    
    describe("Get methods", () => {
        it("return \"Manager\" via getRole", () => {
            const testValue = "Manager";
            const v = new Manager("Nick", 1, "hello@hello.com", 50);
            expect(v.getRole()).toBe(testValue);
        });
          
        it("can get the office number via getOfficeNumber", () => {
            const testValue = 50;
            const v = new Manager("Nick", 1, "hello@hello.com", testValue);
            expect(v.getOfficeNumber()).toBe(testValue);
        });
    });
    
});