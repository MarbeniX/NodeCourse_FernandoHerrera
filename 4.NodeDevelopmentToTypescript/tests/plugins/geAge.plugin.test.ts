import { getAge } from "../../src/plugins";

describe("plugins/getAge.plugin.ts", () => {
    test("getAge returns correct age for a given birthdate", () => {
        const birthdate = new Date("1990-01-01");
        const age = getAge(birthdate);
        const currentYear = new Date().getFullYear();
        expect(age).toBe(currentYear - 1990);
    });

    test("getAge returns a number", () => {
        const birthdate = new Date("2000-01-01");
        const age = getAge(birthdate);
        expect(typeof age).toBe("number");
    });

    //Introduction to Jest - Mocks
    test("getAge should return 0 years", () => {
        const spy = jest
            .spyOn(Date.prototype, "getFullYear")
            .mockReturnValue(2002);
        const birthdate = "2002-12-31";
        const age = getAge(new Date(birthdate));
        expect(age).toBe(22);
    });
});
