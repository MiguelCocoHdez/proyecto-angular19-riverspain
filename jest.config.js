/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {}],
  },
  testMatch: ["**/tests/**/*.test.ts"], 
  moduleNameMapper: {
    "^@app/(.*)$": "<rootDir>/src/app/$1", 
  },
};
