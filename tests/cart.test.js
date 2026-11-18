import { describe, it, expect } from "vitest";
import { createCart, addItem, removeItem, subtotal } from "../src/cart.js";

describe("cart", () => {
  it("starts empty", () => {
    expect(subtotal(createCart())).toBe(0);
  });

  it("adds items and totals them", () => {
    const cart = createCart();
    addItem(cart, "mug", 1200, 2);
    addItem(cart, "sticker", 300);
    expect(subtotal(cart)).toBe(2700);
  });

  it("combines the same item added twice", () => {
    const cart = createCart();
    addItem(cart, "mug", 1200);
    addItem(cart, "mug", 1200);
    expect(cart.items).toHaveLength(1);
    expect(cart.items[0].quantity).toBe(2);
  });

  it("removes an item", () => {
    const cart = createCart();
    addItem(cart, "mug", 1200);
    removeItem(cart, "mug");
    expect(subtotal(cart)).toBe(0);
  });
});
