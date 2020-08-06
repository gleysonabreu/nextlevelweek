module.exports = {
  bail: true,
  clearMocks: true,
  coverageProvider: "v8",
  moduleFileExtensions: [
     "js",
     "jsx",
     "ts",
     "tsx",
     "json",
   ],
  preset: 'ts-jest',
  testEnvironment: "node",
   testMatch: [
     "**.spec.ts"
   ],
   rootDir: ".",
};
