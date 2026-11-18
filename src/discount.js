// Discount codes. Returns the discount amount (in cents) for a given subtotal.
const CODES = {
  SAVE10: { type: "percent", value: 10 },
  FIVEOFF: { type: "flat", value: 500 },
};

export function discountFor(code, subtotalCents) {
  const rule = CODES[code];
  if (!rule) return 0;
  if (rule.type === "percent") return Math.round((subtotalCents * rule.value) / 100);
  return Math.min(rule.value, subtotalCents);
}
