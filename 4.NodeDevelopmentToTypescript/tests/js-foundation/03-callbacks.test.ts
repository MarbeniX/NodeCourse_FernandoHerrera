import { getUserById } from "../../src/js-foundation/03-callbacks";

describe("js-foundation/03-calbacks.ts", () => {
    test("getUserById with existing user", (done) => {
        //Function to be called
        getUserById(1, (error, user) => {
            expect(error).toBeNull();
            expect(user).toEqual({ id: 1, name: "Alice" });
            done();
        });
    });

    test("getUserById with non-existing user", (done) => {
        getUserById(4, (error, user) => {
            expect(error).toBe("User with id 4 not found");
            expect(user).toBeUndefined();
            done();
        });
    });
});
