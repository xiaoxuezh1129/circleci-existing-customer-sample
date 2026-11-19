import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    runner: '@circleci/vitest-circleci-coverage/runner',
    reporters: ['@circleci/vitest-circleci-coverage/reporter'],
  },
});