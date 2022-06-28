module.exports = {
    // It suggests that a map from ordinary regex to module names that permit to stub out assets with a single module
 	moduleNameMapper: {
        "@root(.*)$": "<rootDir>/src/$1"
    },
}