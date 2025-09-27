import { makePersonBuidler } from "../../src/js-foundation/04-factoryfunction";

describe("js-foundation/04-factoryfunction.ts", () => {
    const getUUID = () => "1234";
    const getAge = () => 23;

    test("makePersonBuilder creates a function", () => {
        const personBuilder = makePersonBuidler(getUUID, getAge);
        expect(typeof personBuilder).toBe("function");
    });

    test("personBuilder creates an objetct with correct properties", () => {
        const personBuilder = makePersonBuidler(getUUID, getAge);
        const person = personBuilder({
            name: "John Doe",
            birthdate: "2002-22-06",
        });
        expect(person).toEqual({
            id: "1234",
            name: "John Doe",
            birthdate: "2002-22-06",
            age: 23,
        });
    });
});
