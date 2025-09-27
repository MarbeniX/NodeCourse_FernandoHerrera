import { message } from "../../src/js-foundation/01-template";

describe("js-foundation/01-template.ts", () => {
    test("Template test", () => {
        expect(message).toContain("Hello ");
    });
});
