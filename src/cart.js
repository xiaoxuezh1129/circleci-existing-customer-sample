// A shopping cart: add items, remove items, and get the subtotal (in cents).
export function createCart() {
  return { items: [] };
}

export function addItem(cart, name, priceCents, quantity = 1) {
  const existing = cart.items.find((item) => item.name === name);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.items.push({ name, priceCents, quantity });
  }
  return cart;
}

export function removeItem(cart, name) {
  cart.items = cart.items.filter((item) => item.name !== name);
  return cart;
}

export function subtotal(cart) {
  return cart.items.reduce((sum, item) => sum + item.priceCents * item.quantity, 0);
}
