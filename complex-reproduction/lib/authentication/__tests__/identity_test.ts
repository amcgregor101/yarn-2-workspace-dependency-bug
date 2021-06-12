import {identity} from "../index";

test("identity is identity", () => {
    expect(identity(42)).toBe(42)
})