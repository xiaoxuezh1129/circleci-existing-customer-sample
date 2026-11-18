// Turns cents into a friendly price string, e.g. 1234 -> "$12.34".
export function formatPrice(cents) {
  return `$${(cents / 100).toFixed(2)}`;
}
