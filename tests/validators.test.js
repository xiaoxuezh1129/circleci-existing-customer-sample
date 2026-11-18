import { describe, it, expect } from "vitest";
import { isValidEmail, isValidZip } from "../src/validators.js";

describe("validators", () => {
  it("accepts a normal email", () => {
    expect(isValidEmail("jill@example.com")).toBe(true);
  });

  it("rejects an email with no @", () => {
    expect(isValidEmail("jill.example.com")).toBe(false);
  });

  it("accepts a 5-digit zip", () => {
    expect(isValidZip("94105")).toBe(true);
  });

  it("rejects a bad zip", () => {
    expect(isValidZip("9410")).toBe(false);
  });
});
