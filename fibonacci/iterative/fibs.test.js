import fibs from "./fibs.js";

test("checks if jest is working properly", () => {
  expect(fibs("hello")).toBe("jest testing check");
});
