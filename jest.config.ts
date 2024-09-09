import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
	collectCoverage: true,
    coverageReporters: ["json", "html"],
	preset: "ts-jest",
	testEnvironment: "node",
	verbose: true,
	testMatch: [ "**/__tests__/**/*.ts?(x)", "**/?(*.)+(spec|test).ts?(x)" ]
}

export default config;