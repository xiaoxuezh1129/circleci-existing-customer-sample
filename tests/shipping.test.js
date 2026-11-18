import { describe, it, expect } from "vitest";
import { shippingCost } from "../src/shipping.js";

describe("shipping", () => {
  it("charges standard shipping on small orders", () => {
    expect(shippingCost(1000)).toBe(500);
  });

  it("charges more for express", () => {
    expect(shippingCost(1000, "express")).toBe(1500);
  });

  it("is free at $50 or more", () => {
    expect(shippingCost(5000)).toBe(0);
    expect(shippingCost(9000, "express")).toBe(0);
  });
});
