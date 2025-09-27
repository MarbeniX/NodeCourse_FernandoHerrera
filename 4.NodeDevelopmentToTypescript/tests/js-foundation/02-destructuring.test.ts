import { characters } from "../../src/js-foundation/02-destructuring";

describe("js-foundation/02-destructuring.ts", () => {
    test("Array destructuring", () => {
        const [first, second] = characters;
        expect(first).toBe("Mario");
        expect(second).toBe("Luigi");
    });

    test("Skipping elements in array destructuring", () => {
        const [, , third] = characters;
        expect(third).toBe("Peach");
    });

    test("Rest operator in array destructuring", () => {
        const [first, ...rest] = characters;
        expect(first).toBe("Mario");
        expect(rest).toEqual(["Luigi", "Peach", "Bowser"]);
    });

    test("Array contains values", () => {
        expect(characters).toContain("Mario");
        expect(characters).toContain("Luigi");
        expect(characters).not.toContain("Yoshi");
    });
});
