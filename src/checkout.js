// Puts it all together: cart + discount + shipping = order total.
import { subtotal } from "./cart.js";
import { discountFor } from "./discount.js";
import { shippingCost } from "./shipping.js";

export function orderTotal(cart, { code, method } = {}) {
  const sub = subtotal(cart);
  const discount = discountFor(code, sub);
  const shipping = shippingCost(sub - discount, method);
  return { subtotal: sub, discount, shipping, total: sub - discount + shipping };
}
