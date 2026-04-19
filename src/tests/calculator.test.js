const {
  addition,
  subtraction,
  multiplication,
  division,
} = require("../calculator");

describe("calculator functions", () => {
  describe("addition", () => {
    test("adds two positive numbers (image example: 2 + 3)", () => {
      expect(addition(2, 3)).toBe(5);
    });

    test("adds negative and positive numbers", () => {
      expect(addition(-5, 2)).toBe(-3);
    });

    test("adds decimal numbers", () => {
      expect(addition(1.2, 2.3)).toBeCloseTo(3.5);
    });
  });

  describe("subtraction", () => {
    test("subtracts two positive numbers (image example: 10 - 4)", () => {
      expect(subtraction(10, 4)).toBe(6);
    });

    test("subtracts to a negative result", () => {
      expect(subtraction(3, 8)).toBe(-5);
    });

    test("subtracts decimal numbers", () => {
      expect(subtraction(5.5, 2.2)).toBeCloseTo(3.3);
    });
  });

  describe("multiplication", () => {
    test("multiplies two positive numbers (image example: 45 * 2)", () => {
      expect(multiplication(45, 2)).toBe(90);
    });

    test("multiplies by zero", () => {
      expect(multiplication(9, 0)).toBe(0);
    });

    test("multiplies negative and positive numbers", () => {
      expect(multiplication(-3, 4)).toBe(-12);
    });
  });

  describe("division", () => {
    test("divides two positive numbers (image example: 20 / 5)", () => {
      expect(division(20, 5)).toBe(4);
    });

    test("divides numbers resulting in a decimal", () => {
      expect(division(7, 2)).toBeCloseTo(3.5);
    });

    test("throws on division by zero", () => {
      expect(() => division(20, 0)).toThrow("Cannot divide by zero.");
    });
  });
});
