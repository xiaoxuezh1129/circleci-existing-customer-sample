import { describe, it, expect } from "vitest";
import { createCart, addItem } from "../src/cart.js";
import { orderTotal } from "../src/checkout.js";

describe("checkout", () => {
  it("adds shipping to a small order", () => {
    const cart = createCart();
    addItem(cart, "mug", 1200);
    expect(orderTotal(cart)).toEqual({ subtotal: 1200, discount: 0, shipping: 500, total: 1700 });
  });

  it("applies a discount code", () => {
    const cart = createCart();
    addItem(cart, "mug", 1200, 2);
    const result = orderTotal(cart, { code: "SAVE10" });
    expect(result.discount).toBe(240);
    expect(result.total).toBe(2400 - 240 + 500);
  });

  it("ships free on big orders", () => {
    const cart = createCart();
    addItem(cart, "hoodie", 6000);
    expect(orderTotal(cart).shipping).toBe(0);
  });
});
