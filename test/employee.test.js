const Employee = require("../scripts/Employee");

describe("Employee", () => {
    it("can construct Employee object", () => {
        const v = new Employee();
        expect(typeof(v)).toBe("object");
    });
    
    describe("Constructor", () => {
        it("can set the person's name", () => {
            const person = "Nick";
            const v = new Employee(person);
            expect(v.person).toBe(person);
        });
        
        it("can set the id", () => {
            const testValue = 50;
            const v = new Employee("Nick", testValue);
            expect(v.id).toBe(testValue);
        });
        
        it("can set the email", () => {
            const testValue = "hello@hello.com";
            const v = new Employee("Nick", 1, testValue);
            expect(v.email).toBe(testValue);
        });
    });
    
    describe("Get methods", () => {
        it("can get person's name via getName", () => {
            const testValue = "Nick";
            const v = new Employee(testValue);
            expect(v.getName()).toBe(testValue);
        });
        
        it("can get id via getId", () => {
            const testValue = 50;
            const v = new Employee("Nick", testValue);
            expect(v.getId()).toBe(testValue);
        });
        
        it("can get email via getEmail", () => {
            const testValue = "hello@hello.com";
            const v = new Employee("Nick", 1, testValue);
            expect(v.getEmail()).toBe(testValue);
        });
        
        it("returns \"Employee\" via getRole", () => {
            const testValue = "Employee";
            const v = new Employee("Nick", 1, "hello@hello.com");
            expect(v.getRole()).toBe(testValue);
        });
    });
});
