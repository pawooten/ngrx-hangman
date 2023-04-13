module.exports = {
  preset: "jest-preset-angular",
  globalSetup: 'jest-preset-angular/global-setup',
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "html", "js", "json", "mjs"],
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!(.*\\.mjs)|date-fns)"],
};

