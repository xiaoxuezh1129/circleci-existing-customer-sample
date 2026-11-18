import { describe, it, expect } from "vitest";
import { formatPrice } from "../src/format.js";

describe("format", () => {
  it("formats cents as dollars", () => {
    expect(formatPrice(1234)).toBe("$12.34");
  });

  it("formats zero", () => {
    expect(formatPrice(0)).toBe("$0.00");
  });
});
