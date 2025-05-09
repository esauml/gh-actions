module.exports = {
    preset: 'ts-jest',                // Use ts-jest preset
    testEnvironment: 'node',          // Set test environment to Node.js
    roots: ['./src'],         // Your source folder for tests
    transform: {
        '^.+\\.tsx?$': 'ts-jest',      // Handle .ts and .tsx files
    },
    moduleFileExtensions: ['ts', 'tsx', 'js'],  // File extensions to handle
};
