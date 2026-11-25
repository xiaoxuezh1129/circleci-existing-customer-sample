import { test, expect } from 'vitest';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const marker = path.join(os.tmpdir(), 'flaky-demo-marker');

test('flaky: fails the first time, passes on retry', () => {
  if (!fs.existsSync(marker)) {
    fs.writeFileSync(marker, 'x');
    throw new Error('Simulated flaky failure (first attempt)');
  }
  fs.unlinkSync(marker);
  expect(true).toBe(true);
});