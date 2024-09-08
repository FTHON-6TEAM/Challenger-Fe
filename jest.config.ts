import type { Config } from 'jest';
import { TextDecoder, TextEncoder } from 'util';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

const config: Config = {
  verbose: true,
  coverageProvider: 'v8',
  // setupFiles: ['./jest.polyfills.js'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', '<rootDir>/', 'tests'],
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1',
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  globals: { TextEncoder: TextEncoder, TextDecoder: TextDecoder },
};
``;

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
