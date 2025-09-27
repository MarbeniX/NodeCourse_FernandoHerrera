import { getUUID } from "../../src/plugins";

describe("plugins/getUUID.plugin.ts", () => {
    test("getUUID returns a valid UUID v4", () => {
        const uuid = getUUID();
        expect(typeof uuid).toBe("string");
        expect(uuid.length).toBe(36);
    });
});
