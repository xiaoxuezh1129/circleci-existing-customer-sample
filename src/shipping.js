// Shipping cost (in cents). Orders of $50 or more ship free.
export const FREE_SHIPPING_THRESHOLD = 5000;

export function shippingCost(subtotalCents, method = "standard") {
  if (subtotalCents >= FREE_SHIPPING_THRESHOLD) return 0;
  if (method === "express") return 1500;
  return 500;
}
