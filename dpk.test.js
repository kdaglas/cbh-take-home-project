// changed import to es6 syntax
import { deterministicPartitionKey } from "./dpk.js";

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  // it("Returns the literal '0' when given no input", () => {
  //   const trivialKey = deterministicPartitionKey();
  //   expect(trivialKey).toBe("0");
  // });
});
