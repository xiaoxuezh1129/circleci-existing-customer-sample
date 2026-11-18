import { describe, it, expect } from "vitest";
import { discountFor } from "../src/discount.js";

describe("discount", () => {
  it("applies a percent code", () => {
    expect(discountFor("SAVE10", 2000)).toBe(200);
  });

  it("applies a flat code", () => {
    expect(discountFor("FIVEOFF", 2000)).toBe(500);
  });

  it("never discounts more than the subtotal", () => {
    expect(discountFor("FIVEOFF", 300)).toBe(300);
  });

  it("ignores unknown codes", () => {
    expect(discountFor("NOPE", 2000)).toBe(0);
  });
});
