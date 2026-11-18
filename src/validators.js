// Checks for the checkout form.
export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidZip(zip) {
  return /^\d{5}$/.test(zip);
}
