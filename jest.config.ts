import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testPathIgnorePatterns: ["/node_modules/"],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
    },
  },
};

export default config;
