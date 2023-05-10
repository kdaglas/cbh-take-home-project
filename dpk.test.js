// changed import to es6 syntax
import { deterministicPartitionKey } from "./dpk.js";

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  // it("Returns an encoded response when given a string input", () => {
  //   const trivialKey = deterministicPartitionKey("me");
  //   expect(trivialKey).toBe("432243416a9ad2a62f96237defbd2767e8925125f9b764665854d1568401fd1192026a1976570e3873d8063c702817a4647ab5533457411db0238350b6767e61");
  // });

  // it("Returns an encoded response when given an int input", () => {
  //   const trivialKey = deterministicPartitionKey(20);
  //   expect(trivialKey).toBe("4e0dc5afeb62f79787a2996f7b6d22458aa05977df9133320989705b649cd341122976ec79e69ee64c9277ab73623a78d26e1ba752de6da9e35e2e1c3f38a99c");
  // });
});
