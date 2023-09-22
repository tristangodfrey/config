/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	moduleFileExtensions: ["js", "json", "ts"],
	// rootDir: ".",
	testRegex: ".*\\.(spec)\\.ts$",
	transform: {
		"^.+\\.ts?$": "ts-jest",
		"^.+\\.(js|jsx)$": "babel-jest",
	},
	// collectCoverageFrom: ["src/**/*.ts", "!**/node_modules/**"],
	preset: "ts-jest",
	// coverageReporters: ["cobertura", "text"],
	// coverageDirectory: "../../coverage",
	testEnvironment: "node",
	// reporters: ["jest-standard-reporter", "default", "jest-junit"],
};
